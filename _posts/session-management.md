---
title: "Sessions or Tokens: Pick Based on Revocation"
excerpt: "Stateless tokens scale beautifully and are miserable to revoke. Server sessions require a lookup and let you log someone out instantly. That trade-off decides it."
coverImage: "/assets/blog/preview/cover.jpg"
date: "2026-04-13T15:20:00.000Z"
author:
  name: Tim Neutkens
  picture: "/assets/blog/authors/tim.jpeg"
ogImage:
  url: "/assets/blog/preview/cover.jpg"
---

The usual framing pits stateless against stateful and argues about scale. The question that actually decides it is what happens when you need to end a session right now, because an account was compromised or permissions were reduced.

A signed token is valid until it expires, by design. Revoking one early means keeping a denylist, at which point you are doing a lookup on every request and have rebuilt sessions with extra steps. A server-side session is a lookup from the start, and deleting the record ends access immediately.

## Short Lifetimes Split the Difference

The common compromise is a short-lived access token paired with a longer-lived refresh token that can be revoked. Access is checked without a lookup; revocation takes effect within the access token's lifetime rather than instantly.

Whatever you choose, cookie attributes carry more weight than the token format. HttpOnly keeps the value away from scripts, Secure keeps it off plaintext connections, and SameSite is your baseline cross-site request defense. Getting those three wrong undoes any amount of care spent on the token itself.
