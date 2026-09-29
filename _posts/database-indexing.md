---
title: "Reading a Query Plan Before Adding an Index"
excerpt: "Adding indexes by intuition produces tables with a dozen of them and no improvement. The plan tells you which access path the planner chose and why it ignored the index you already have."
coverImage: "/assets/blog/preview/cover.jpg"
date: "2025-08-27T07:55:00.000Z"
author:
  name: Joe Haddad
  picture: "/assets/blog/authors/joe.jpeg"
ogImage:
  url: "/assets/blog/preview/cover.jpg"
---

The instinct when a query is slow is to add an index on whatever appeared in the where clause. Sometimes that works. Often it produces a table carrying a dozen indexes, slower writes, and a query that still performs a sequential scan because the planner decided the index was not worth using.

The plan answers this directly. It shows whether the engine scanned the table or sought through an index, how many rows it expected versus how many it found, and where time actually went. A large gap between estimated and actual row counts usually points at stale statistics rather than a missing index.

## Column Order Is Not Arbitrary

A composite index on two columns serves queries filtering on the first column, or on both. It generally cannot help a query filtering only on the second. This is why two similar-looking queries can have completely different performance against the same index, and why copying an index definition from another table rarely transfers.

Indexes that cover a query, containing every column it needs, avoid touching the table at all. That is a genuine improvement and also the easiest way to end up with enormous indexes, so it is worth measuring rather than assuming.
