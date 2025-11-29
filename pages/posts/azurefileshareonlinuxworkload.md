---
type: post
title: 'Understanding Why Azure File Share Fails Under Heavy Linux File Operations'
date: 2025-11-29
---

## Why Azure File Share breaks TSDB/WAL workloads (SMB and NFS)

Azure File Share is built on top of a **Windows-based backend**. This matters because Windows and Linux have **fundamentally different filesystem semantics**, especially around atomic operations and metadata consistency.

If you only **read/write small files**, you won't notice the difference.
The problems appear when you do:

* massive writes
* rapid rename/delete
* concurrent writes
* database-style workloads
* TSDB/WAL workloads

This is where Azure File Share fails.

---

## Azure File Share Protocols

Azure File Share offers two ways to mount storage:

### 1. **SMB**

* Native Windows behavior
* NTFS ACLs
* Zero POSIX semantics
* **Completely unsuitable for Linux apps requiring atomicity**

### 2. **NFS (Azure Files NFSv4.1)**

* Document claims “Fully POSIX”
* But the limitation section states clearly:
  **“ACLs aren’t supported.”**

This is the key problem.

---

## What ACL Means (Real POSIX vs Fake POSIX)

People think POSIX = `rwxrwxrwx`
But POSIX also includes **ACL (Access Control List)** support for fine-grained permissions:

```txt
# file: notes.txt
# owner: tar
# group: devs
user::rw-
user:bob:rw-
group::r--
group:design:r--
mask::rw-
other::---
```

Azure NFS does **not** support these.
No NFSv4 ACLs.
Only rwx bits.
This means Azure NFS is **POSIX only on the surface**.

Under the hood:

```
Linux App (Container)
      ↓
POSIX-like NFS Emulation Layer
      ↓
Azure File Backend (Windows ACL Logic)
```

There is a **translation layer**.
Translation = inconsistency = bugs.

---

## Why TSDB, WAL, Prometheus, Loki break

It’s not “lack of ACL” itself that causes corruption.
It’s what that *implies*:

**Azure NFS is not backed by a true POSIX filesystem.**

This leads to:

### 1. **Non-atomic rename/delete**

Linux guarantees atomicity:

* rename: instant old→new
* delete: instantly gone

Windows needs multiple steps (temp file, move, commit).
TSDB workloads rely heavily on atomic rename/delete for WAL and index files.
Non-atomic operations cause partial files and corruption.

---

### 2. **Metadata drift**

Real POSIX filesystems store strong metadata in **inodes**, including:

* owner
* group
* permissions
* file size
* last modified/accessed
* block pointers
* hardlinks
* inode number

Databases depend on these for correctness.

Azure File NFS uses backend ACL logic (Windows-style), so inode metadata is **emulated** and can drift.

---

### 3. **Inode instability**

Prometheus maintainers found inode drift on Azure File.
This causes:

* duplicate inodes
* stale filehandles
* corrupted index blocks
* WAL segment corruption

Reference:
[https://github.com/prometheus/prometheus/issues/10679](https://github.com/prometheus/prometheus/issues/10679)

---

### 4. **Latency in metadata operations**

Azure File NFS metadata latency is **high single-digit milliseconds**.
TSDBs expect **microseconds**.

High-latency metadata = race conditions.

---

### 5. **Not suitable for databases at all**

This affects not just Loki/Prometheus, but also:

* PostgreSQL
* MySQL
* MSSQL
* SQLite
* Any ACID database

It’s the reason **data centers use Linux filesystems** (xfs/ext4) for database storage.
Linux guarantees atomicity.
Windows-like filesystems do not.

---

## Final Summary

Azure File Share:

* SMB = Windows semantics
* NFS = POSIX emulation
* Backend = Windows ACL engine
* No real POSIX consistency
* Not safe for TSDB/WAL/database workloads

This is why corruption eventually occurs under high write/rename/delete workloads.

TLDR: Do not use Azure File Share (SMB or NFS) for any database, TSDB, WAL, or index-heavy workload.
Use Azure Storage Blob instead.