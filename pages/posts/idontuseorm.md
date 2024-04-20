---
type: post
title: 'HOT TAKE: I do not use ORMs - Why it should not be used on production, ever'
date: 2024-04-04
---

Object-Relational Mapping (ORM) is an anti-pattern that should be avoided at all costs.

## Reasons to avoid ORMs

- Violation of Separation of Concerns: ORMs void the separation of concerns between the database and the application.
- N+1 Query Problem: Most ORMs lead to N+1 query problems that you will notice only after it runs on production servers. N+1 query problems refer to N extra number of queries executed instead of a single optimized query.
- Complexity and Learning Curve: ORMs require developers to work with unfamiliar APIs to achieve optimal SQL code generation.
- Abstraction Overhead: Newer ORMs are marketed as "SQL-Like". If it's SQL-like, Why not just use SQL? Instead of having a giant pile of magic abstraction in data layers.

## Reasons to use SQL instead of ORMs

- Universality and Simplicity: SQL is the most common programming language used for database management systems. Every university course teaches SQL. Recruiting developers ? It's more likely that they know SQL than your specific ORM library.
- Control and Performance: SQL is considered straightforward and essential, especially for complex projects where direct control over database queries is necessary.

## Debunk 1 : Use ORM now !!, What would you do when we need to change the database in the future ?

Companies often avoid changing their databases due to compliance concerns, as any modifications can impact compliance requirements significantly. In large organizations, there's a strong emphasis on data tracking and logging to ensure that every action taken on the database is traceable and logged for audit purposes. The cost of changing production databases is high and is not advisable as it might leads to data loss and data corruption. The benefits just do not outweigh the cost.

## Debunk 2 : Use ORM now !!, Why use the complex-hard-labourly SQL when you have the Easy-to-Use ORM ?

When it comes to ORM, while suitable for simpler projects or short-term applications, there's a risk of missing out on developing SQL and DBMS skills, which are crucial in the long run for more complex projects. In general, SQL is considered straightforward and essential, once you learn how to use it. You know it forever. Unlike some ORMs, which maintainers may abandon within the next 3 months if they do not generate enough traffic or if the maintainers are simply bored and want to create a new one. For toy projects or short-lived applications, ORM can be a suitable choice if you do not want to develop and grow as a developer.

## Conclusion

For simple projects on production, I would still be against using ORMs. Initially, every project starts as a simple CRUD application. Over time, projects inevitably become more complex.
For simple projects, using SQL is easier and straightforward as well. The latest ORMs promise no n+1 query problems, SQL-like APIs. But why does it matter? When you can simply learn and use SQL. It's highly valued because it has been researched, battle-tested, and proven to work since 1974 (that's over 50 years ago!). While many languages from that period have faded away, SQL is still widely used and relevant. Let that sink in.
SQL is declarative and highly readable, almost like your everyday english. It's even more readable than Python. It's easy to learn and use. That's why it has been used widely for over 50 years and will be used in the future.
