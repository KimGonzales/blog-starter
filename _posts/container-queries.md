---
title: "Container Queries Change How You Build Layouts"
excerpt: "Media queries ask about the viewport. Container queries ask about the space a component was actually given, which is the question component authors wanted to ask all along."
coverImage: "/assets/blog/dynamic-routing/cover.jpg"
date: "2025-03-11T10:15:00.000Z"
author:
  name: JJ Kasper
  picture: "/assets/blog/authors/jj.jpeg"
ogImage:
  url: "/assets/blog/dynamic-routing/cover.jpg"
---

A card in a sidebar and the same card in a full-width grid want different layouts, but the viewport is identical in both cases. For years the workaround was a variant prop, so the parent told the child which shape to take and every new placement meant another variant.

Container queries invert that. The component declares a containment context and then styles itself against its own available width. Drop it in a narrow column and it stacks; drop it in a wide grid and it goes horizontal. No prop, no coordination with the parent, no combinatorial variant list.

## Containment Has a Cost

Declaring a container means the browser can no longer let that element be sized purely by its contents in the queried axis. Inline-size containment is the common choice precisely because it constrains width while leaving height to the content.

The practical migration is unglamorous: find every size-related variant prop in your component library and ask whether it exists only because the component could not see its own box. Most of them do, and each one you delete removes a decision the caller should never have had to make.
