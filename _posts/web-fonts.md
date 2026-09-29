---
title: "Web Fonts Without the Flash"
excerpt: "Font loading trades invisible text against a visible swap. Subsetting, preloading, and a well-chosen fallback metric make the swap small enough to stop mattering."
coverImage: "/assets/blog/preview/cover.jpg"
date: "2026-06-10T10:40:00.000Z"
author:
  name: Tim Neutkens
  picture: "/assets/blog/authors/tim.jpeg"
ogImage:
  url: "/assets/blog/preview/cover.jpg"
---

A custom font cannot render until it downloads, which leaves the browser two options: show nothing, or show a fallback and swap later. Neither is free. Invisible text makes a page feel broken; a swap makes it jump.

Most of the pain comes from shipping more font than the page needs. A full weight range across several styles, covering every script in Unicode, is an enormous download for a site that uses two weights of Latin text. Subsetting to the characters and weights you actually use routinely cuts this by an order of magnitude.

## Match the Fallback's Metrics

The visible jump during a swap is caused by the fallback and the web font having different dimensions, so line lengths and heights shift. Adjusting the fallback's size and spacing to approximate the real font makes the swap far less noticeable, sometimes imperceptible.

Preloading the one or two fonts used above the fold moves the request earlier without flooding the connection. Preloading everything is worse than preloading nothing, because it competes with the resources needed for first paint.
