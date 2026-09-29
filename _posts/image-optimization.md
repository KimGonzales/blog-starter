---
title: "Image Optimization Is Still the Biggest Performance Win"
excerpt: "Layout shift, oversized downloads, and eager loading below the fold account for most poor Core Web Vitals scores. Fixing images usually beats every JavaScript optimization you were considering."
coverImage: "/assets/blog/hello-world/cover.jpg"
date: "2024-11-08T08:20:00.000Z"
author:
  name: Tim Neutkens
  picture: "/assets/blog/authors/tim.jpeg"
ogImage:
  url: "/assets/blog/hello-world/cover.jpg"
---

Teams spend weeks shaving kilobytes off a bundle while shipping a hero image four times larger than any viewport will display. Images are typically the heaviest thing on a page, and the fixes are mechanical rather than architectural, which makes them the highest return on effort available.

Three problems cover most of it. Serving one size to every device wastes bandwidth on phones. Omitting width and height causes the page to jump as images arrive, which is what cumulative layout shift measures. Loading everything eagerly makes the browser compete with itself for the one image the visitor can actually see.

## Format Matters Less Than Dimensions

Modern formats help, but the ordering is worth keeping straight: correct dimensions first, then lazy loading below the fold, then format conversion. An oversized WebP still loses to a correctly sized JPEG.

The one image you should not lazy load is the largest one above the fold. That element is usually what largest contentful paint is timing, and deferring it directly inflates the metric you are trying to improve.
