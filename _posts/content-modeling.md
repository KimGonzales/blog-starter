---
title: "Model Content, Not Pages"
excerpt: "A content type shaped like one layout cannot be reused anywhere else. Modeling the meaning instead of the presentation is what makes a second surface cheap."
coverImage: "/assets/blog/dynamic-routing/cover.jpg"
date: "2026-09-03T16:35:00.000Z"
author:
  name: Joe Haddad
  picture: "/assets/blog/authors/joe.jpeg"
ogImage:
  url: "/assets/blog/dynamic-routing/cover.jpg"
---

The quickest content model mirrors the page you are building: a hero heading, a left column, a call to action. It ships fast and then blocks everything. The moment the same content needs to appear in a newsletter, a mobile app, or a search result, the fields describe positions nobody else has.

Modeling the meaning takes longer up front. An article has a title, a summary, a body, an author, and a publication date. Where the summary appears is a decision for each surface, which is exactly why it should not be encoded in a field named after a slot.

## Relationships Over Duplication

Repeating an author's name on every article guarantees inconsistency the first time someone changes how they are credited. Referencing an author record keeps one source of truth and makes listing everything a person wrote a query rather than a search.

The test for a model is adding a second surface. If a plain listing of titles and summaries requires new fields, the model is describing a layout. If it is a straightforward projection of what is already there, the model is describing content.
