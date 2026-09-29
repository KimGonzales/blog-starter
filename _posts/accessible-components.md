---
title: "Accessible Components Start With Semantic HTML"
excerpt: "Before adding ARIA attributes, check whether a native element already does the job. Keyboard focus, screen reader announcements, and contrast ratios are mostly free if you pick the right tag."
coverImage: "/assets/blog/preview/cover.jpg"
date: "2024-07-02T14:30:00.000Z"
author:
  name: Joe Haddad
  picture: "/assets/blog/authors/joe.jpeg"
ogImage:
  url: "/assets/blog/preview/cover.jpg"
---

The first rule of ARIA is not to use ARIA. A `<button>` is focusable, announces its role, fires on both click and Enter, and respects the platform's focus ring. A `<div>` with a click handler does none of that, and every attribute you add to rehabilitate it is another thing to keep correct.

Most accessibility failures in component libraries are not exotic. They are a custom dropdown that traps focus, a modal that leaves the background scrollable, an icon button with no accessible name, or a disabled state conveyed only by lowering opacity. Each one is cheap to fix and expensive to discover late.

## Contrast Is Measurable

Unlike a lot of design debate, contrast has a number. Body text needs a ratio of 4.5 to 1 against its background; large text and meaningful icons need 3 to 1. That makes it one of the few things you can put in a lint rule or a test rather than a review comment.

Focus indicators deserve the same treatment. A focus ring that looks sharp on a white surface can vanish entirely on a dark panel, so the indicator has to be checked against whatever actually sits behind it, not against the canvas you designed it on.
