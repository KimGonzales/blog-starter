---
title: "What Belongs in Edge Middleware"
excerpt: "Middleware runs before every matched request, which makes it powerful and easy to misuse. Redirects, rewrites, and cheap header work belong there. Database calls generally do not."
coverImage: "/assets/blog/hello-world/cover.jpg"
date: "2025-06-04T13:40:00.000Z"
author:
  name: Tim Neutkens
  picture: "/assets/blog/authors/tim.jpeg"
ogImage:
  url: "/assets/blog/hello-world/cover.jpg"
---

Middleware sits in front of matched requests and can rewrite, redirect, or annotate them before any route handler runs. That position is exactly what makes it attractive for cross-cutting concerns, and exactly why an expensive operation there taxes every single request.

Good candidates share a shape: they are cheap, they depend only on the incoming request, and they change where the request goes rather than what it returns. Locale detection from a header. A legacy path redirect. Reading a cookie to pick a variant. Attaching a request identifier for tracing.

## Latency Is Multiplied Here

A database round trip inside middleware does not cost one round trip. It costs one per matched request, including static assets if your matcher is careless, and it happens before any caching layer has a chance to help. Narrow the matcher first, then look hard at anything doing network calls.

Authorization is the genuinely hard case. Checking whether a session cookie exists is cheap and belongs in middleware. Verifying what that session is permitted to do usually needs a lookup, and that check belongs closer to the resource it protects, where it can be cached and where a failure degrades one route instead of the whole site.
