---
title: "Background Jobs Need to Be Safe to Run Twice"
excerpt: "Every queue eventually delivers a message more than once. Idempotency is not an optimization, it is the property that makes retries survivable."
coverImage: "/assets/blog/hello-world/cover.jpg"
date: "2026-07-22T09:15:00.000Z"
author:
  name: JJ Kasper
  picture: "/assets/blog/authors/jj.jpeg"
ogImage:
  url: "/assets/blog/hello-world/cover.jpg"
---

Queues promise at-least-once delivery, which is a polite way of saying a job will occasionally run twice. A worker that completes its work and then dies before acknowledging will see the same message again. This is normal operation, not a malfunction.

So the job has to be safe to repeat. Charging a card needs an idempotency key so the second attempt recognizes the first. Sending an email needs a record that it already went out. Incrementing a counter needs to become setting a value, because increments do not survive duplication.

## Failure Needs a Destination

Retries with exponential backoff handle transient problems well. They handle permanent ones terribly, cycling forever on a job that will never succeed while consuming capacity that healthy work needs.

A dead letter queue after a bounded number of attempts gives those jobs somewhere to go, and gives you a list to inspect. The list is the point: a dead letter queue nobody looks at is just a slower way to lose data, so it needs an alert and an owner like any other signal.
