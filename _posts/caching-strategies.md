---
title: "Caching Strategies That Actually Reduce Latency"
excerpt: "Most caching problems are really invalidation problems. A look at stale-while-revalidate, cache tags, and why a short TTL is usually the wrong lever to reach for first."
coverImage: "/assets/blog/hello-world/cover.jpg"
date: "2024-05-14T09:12:00.000Z"
author:
  name: Tim Neutkens
  picture: "/assets/blog/authors/tim.jpeg"
ogImage:
  url: "/assets/blog/hello-world/cover.jpg"
---

Every caching discussion starts with how long to keep something and ends with how to throw it away at the right moment. The time-to-live is the easy part. Invalidation is where the real design work lives, and reaching for a shorter TTL to paper over a correctness problem trades a small amount of staleness for a large amount of load.

The pattern worth internalizing is stale-while-revalidate. A request that arrives after expiry gets the stale response immediately while a background refresh runs. Nobody waits on the origin, and the window of incorrectness is bounded by how fast the refresh completes rather than by how long anyone was willing to wait.

## Tags Beat Timers

Once content has relationships, time-based expiry stops matching reality. A product price changes and you want every page mentioning that product to update, not just the ones whose timer happened to lapse. Cache tags let you express that: attach identifiers when you store an entry, then purge by identifier when the underlying record changes.

The cost is bookkeeping. You have to know which tags a response depends on, which means knowing which records it read. Frameworks that track this automatically make tagging nearly free; everywhere else you are maintaining that mapping by hand, and a missed tag is a bug that only shows up as someone staring at an old number.
