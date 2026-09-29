---
title: "Designing for Partial Failure"
excerpt: "One failing widget should not blank the page. Scoping error boundaries to independent regions turns a total outage into a degraded corner of the screen."
coverImage: "/assets/blog/dynamic-routing/cover.jpg"
date: "2026-07-01T14:50:00.000Z"
author:
  name: Joe Haddad
  picture: "/assets/blog/authors/joe.jpeg"
ogImage:
  url: "/assets/blog/dynamic-routing/cover.jpg"
---

A single boundary at the root of an application converts every error into a white screen. That is better than an unhandled crash and much worse than it needs to be. The interesting decision is not whether to catch errors but where the seams are.

Draw them around regions that can fail independently. A recommendations panel, an activity feed, an embedded chart. When one throws, that region shows a message and everything else on the page continues to work, which is usually the difference between an annoyance and an outage.

## Retry Belongs Next to the Failure

A fallback that only apologizes leaves the user with one option: reload everything. A fallback with a retry that re-runs just the failed region is dramatically better, and it is cheap once the boundary is already scoped correctly.

Errors caught this way still need reporting. A boundary that renders a friendly message and swallows the cause silently means the bug exists in production and nobody knows. Log it with enough context to identify which region failed and what the user was doing, then show the friendly message.
