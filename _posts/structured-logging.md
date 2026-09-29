---
title: "Structured Logging Pays for Itself the First Time You Need It"
excerpt: "A log line that is a sentence can only be grepped. A log line that is an object can be filtered, aggregated, and correlated across services."
coverImage: "/assets/blog/hello-world/cover.jpg"
date: "2026-03-24T11:10:00.000Z"
author:
  name: JJ Kasper
  picture: "/assets/blog/authors/jj.jpeg"
ogImage:
  url: "/assets/blog/hello-world/cover.jpg"
---

Interpolating values into a message produces something readable by a person and nearly useless to a machine. Emitting the same information as fields, with the message as one field among several, means you can filter by user, group by route, and compute a rate without writing a regular expression.

The habit that makes this powerful is attaching a correlation identifier at the edge of the system and passing it through every downstream call. One request touching five services becomes one query instead of five separate investigations that you then align by timestamp and hope.

## Levels Are a Contract

Log levels only help if they mean something consistent. Error should mean a human needs to look. Warn should mean something recovered but degraded. Info should describe state changes worth reconstructing later. Debug should be verbose and off in production.

When error is used for expected conditions, alerting becomes noise and people stop reading it. That failure is cultural rather than technical, and no amount of tooling fixes a team that has learned to ignore its own alarms.
