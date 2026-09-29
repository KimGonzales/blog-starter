---
title: "Rate Limiting Without Punishing Real Users"
excerpt: "Fixed windows let bursts through at the boundary. Token buckets absorb spikes while holding a sustained average. The identifier you key on matters more than either."
coverImage: "/assets/blog/dynamic-routing/cover.jpg"
date: "2026-05-02T08:45:00.000Z"
author:
  name: Joe Haddad
  picture: "/assets/blog/authors/joe.jpeg"
ogImage:
  url: "/assets/blog/dynamic-routing/cover.jpg"
---

The simplest limiter counts requests in a fixed window and rejects anything over the threshold. It is easy to reason about and has an obvious hole: a client can spend its entire allowance at the end of one window and again at the start of the next, producing double the intended rate at the boundary.

A token bucket fixes that. Tokens refill at a steady rate up to a maximum, each request spends one, and an empty bucket means rejection. Bursts are absorbed up to the bucket size while the long-run average stays where you set it, which matches how legitimate clients actually behave.

## Choose the Key Carefully

Keying on IP address groups everyone behind a corporate network or mobile carrier into one bucket, so a single heavy user throttles a whole office. Keying on account identifier is fairer but useless for unauthenticated endpoints, which are usually the ones most in need of protection.

Whatever you decide, tell the client. Returning the limit, the remaining count, and a retry delay lets a well-behaved caller back off intelligently. Rejecting without explanation guarantees an immediate retry, which is the opposite of what you wanted.
