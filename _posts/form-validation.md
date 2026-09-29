---
title: "Validate on the Server, Then Again in the Browser"
excerpt: "Client validation is a convenience for users. Server validation is the only one that protects data. Sharing one schema between them keeps the messages consistent."
coverImage: "/assets/blog/hello-world/cover.jpg"
date: "2026-05-21T13:05:00.000Z"
author:
  name: JJ Kasper
  picture: "/assets/blog/authors/jj.jpeg"
ogImage:
  url: "/assets/blog/hello-world/cover.jpg"
---

Client-side validation exists so people learn about a mistake before waiting on a network round trip. It is a user experience feature. It provides no protection whatsoever, because anyone can send a request that never touched your form.

Server-side validation is the one that matters, and it has to be complete rather than a subset. The uncomfortable version of this is that any rule enforced only in the browser is not enforced.

## One Schema, Two Places

Writing the rules twice guarantees they drift, usually in the error messages, so users see one wording before submit and another after. Defining a schema once and running it in both places removes the duplication and keeps the copy identical.

Progressive enhancement is the other half. A form that submits normally and then gets enhanced with client-side handling works before hydration, works when a script fails, and works for anyone on a slow connection during that gap. Starting from a functioning form and improving it is far easier than retrofitting a working fallback onto something that assumed JavaScript from the beginning.
