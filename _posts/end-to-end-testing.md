---
title: "End-to-End Tests Fail for Boring Reasons"
excerpt: "Flaky suites are usually timing, not complexity. Waiting on state instead of duration, and selecting by role instead of class name, removes most of the noise."
coverImage: "/assets/blog/dynamic-routing/cover.jpg"
date: "2025-11-15T15:25:00.000Z"
author:
  name: JJ Kasper
  picture: "/assets/blog/authors/jj.jpeg"
ogImage:
  url: "/assets/blog/dynamic-routing/cover.jpg"
---

A browser test that passes locally and fails in continuous integration is almost never testing something subtle. It is racing the application. The machine is slower, or faster, or the network is, and an assertion runs a few milliseconds before the thing it asserts about exists.

Fixed sleeps are the common culprit and they fail in both directions. Too short and the test is flaky. Too long and the suite takes twenty minutes. Waiting on a condition instead of a duration fixes both: wait for the element, the response, the absence of a spinner.

## Selectors Are Contracts

Selecting elements by CSS class ties your tests to styling decisions, so a Tailwind refactor breaks fifty tests that have nothing to do with the change. Selecting by accessible role and name ties them to what users perceive, which is both more stable and a passive accessibility check.

Keep the pyramid shape in mind. End-to-end tests are the slowest and most fragile thing you own, so they should cover the handful of paths whose breakage would be unacceptable. Everything else belongs in a unit or integration test that runs in milliseconds and tells you exactly which function broke.
