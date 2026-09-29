---
title: "Drawing the Line Between Server and Client Components"
excerpt: "The boundary is not about interactivity alone. It is about which data a component needs, where that data lives, and what has to ship to the browser for it to render."
coverImage: "/assets/blog/preview/cover.jpg"
date: "2025-01-23T16:05:00.000Z"
author:
  name: Joe Haddad
  picture: "/assets/blog/authors/joe.jpeg"
ogImage:
  url: "/assets/blog/preview/cover.jpg"
---

The usual heuristic is that anything interactive belongs on the client, and it gets you surprisingly far. It also hides the more important question: what has to travel to the browser for this component to do its job. A component that formats a date needs the date and a formatter. A component that reads from the database needs credentials that must never leave the server.

The trap is the boundary creeping upward. One deeply nested component needs a click handler, so a directive lands on it, and over a few refactors the marker migrates to a shared layout. Now the entire subtree is client-rendered and nobody decided that on purpose.

## Push the Boundary Down

Keep interactive pieces as small and as deep as you can. A page that renders on the server with three tiny client islands ships far less JavaScript than a page marked client-side at the root with a few server-rendered children.

Passing data across the boundary has its own rules. Props sent to a client component are serialized, so functions, class instances, and anything with cyclic references will not survive the trip. Serialization errors are noisy and immediate, which is better than the alternative, but they still surprise people the first time.
