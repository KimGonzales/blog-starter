---
title: "Versioning an API You Cannot Take Back"
excerpt: "Additive changes need no version. Removals and renames do. Knowing which category a change falls into prevents most breakage before it ships."
coverImage: "/assets/blog/preview/cover.jpg"
date: "2026-08-12T12:25:00.000Z"
author:
  name: Tim Neutkens
  picture: "/assets/blog/authors/tim.jpeg"
ogImage:
  url: "/assets/blog/preview/cover.jpg"
---

Once someone else depends on a response shape, you have made a promise. The useful discipline is sorting changes into ones that keep the promise and ones that break it, because only the second kind needs a versioning ceremony.

Adding an optional field is safe. Adding a new endpoint is safe. Removing a field, renaming one, narrowing an accepted value, or changing a type are all breaking, even when the new shape is obviously better. Clients parse what you sent last week.

## Deprecate on a Schedule

Running two versions forever doubles the surface area you maintain and test. Running them for a stated window with a clear migration path is sustainable, and the stated window is the part teams skip.

Measure who is still calling the old version before you remove it. A deprecation notice in a changelog reaches nobody; per-client usage data tells you exactly whom to contact. Turning something off and discovering from support tickets who depended on it is an avoidable way to learn.
