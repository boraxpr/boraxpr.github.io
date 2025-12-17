---
type: post
title: 'What Is Database Pooling — and Why So Many People Get It Wrong'
published: 2025-06-06
---

This issue is rampant in **Node.js**, **Go**, and **Python** — basically anywhere you're *not* using a meta-framework like Java Spring Boot or Python Django.

In **contractor-heavy environments with no real code reviews**, things like this slip through. And they **quietly burn** your system with way more resource usage than necessary.

Take this common anti-pattern:

    const sql = require('mssql');

    var pool = await sql.connect(config);
    var query = "SELECT * FROM TABLE";
    var result = await pool.request().query(query);

I’ve seen this copy-pasted into dozens of methods. One `connect()` call per API. What’s wrong with it?

---

### ❌ Why This Is a Problem

Every time you call an endpoint, the app reconnects to the database:

> Network call → Authenticate → Allocate new connection → Run query → Return result

Now imagine:
- **Every API call** does this  
- **Dozens or hundreds of users** hit the system  
- You’re running in a **limited connection pool**

Your database gets hammered not by queries, but by **connection spam**.

When the pool overflows, the DB has to:  
1. Figure out which connections are idle  
2. Kill those  
3. Start new ones  
4. Authenticate again  
5. *Maybe* finally run your query

This is silent tech debt. And it scales like a time bomb.

---

### ✅ How It’s Done Right

Frameworks like **Spring Boot** have HikariCP under the hood — a high-performance connection pool you don’t even think about. You just inject `DataSource` and go.

In Node.js and other minimal stacks? **You have to manage it yourself.**  
At minimum:

    // db.js
    const sql = require('mssql');
    const poolPromise = sql.connect(config);
    module.exports = poolPromise;

Then in your services:

    // userService.js
    const pool = await require('./db');
    const result = await pool.request().query("SELECT * FROM Users");

One connection pool. Reused. As it should be.

---

### 🧨 TL;DR

> Don’t `sql.connect()` on every API call.  
> Connect once on app startup.  
> Reuse that pool. Always.

Otherwise, you're not building a backend — you're building a denial-of-service engine.
