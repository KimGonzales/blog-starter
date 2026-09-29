---
title: "Generics Are for Relationships, Not Reuse"
excerpt: "A type parameter earns its place when it ties two things together. If a generic appears exactly once in a signature, it is usually doing nothing that unknown would not do more honestly."
coverImage: "/assets/blog/dynamic-routing/cover.jpg"
date: "2024-09-19T11:45:00.000Z"
author:
  name: JJ Kasper
  picture: "/assets/blog/authors/jj.jpeg"
ogImage:
  url: "/assets/blog/dynamic-routing/cover.jpg"
---

The useful question about a type parameter is what relationship it expresses. In a function that takes an array and a key and returns the value at that key, the parameters tie the argument types to the return type, and the compiler can hold you to it. That is a generic doing real work.

A type parameter that shows up once in a signature is a different story. It cannot constrain anything, because there is nothing to constrain it against. It reads as flexibility but behaves as an unchecked cast, and `unknown` with an explicit narrowing step is both shorter and more honest about what the caller is responsible for.

## Inference Is the Whole Point

Generics that require callers to annotate every use have failed at their job. If people are writing the type arguments out by hand, the inference sites are wrong, and the fix is usually to move a parameter so the compiler can see it in an argument position rather than only in a return position.

Conditional types and mapped types extend this considerably, and they are also where readability falls off a cliff. A type that takes three attempts to read is a maintenance cost, and a named intermediate alias almost always pays for itself.
