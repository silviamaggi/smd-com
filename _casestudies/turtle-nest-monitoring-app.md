---
layout: post
title: Turtle nest monitoring app
featured-post: false
date: 2021-08-09 15:00
description: Scientists need to monitor turtle nests and record their status to measure the effectiveness of strategies to protect the aquatic megafauna and their habitats.
excerpt: Scientists need to monitor turtle nests and record their status to measure the effectiveness of strategies to protect the aquatic megafauna and their habitats.
featured-image: feat-turtle-nest-monitoring-app-featured-img.jpg
---
**Skills**: Wireframing, Prototyping  
**Tools**: Figma

## The problem

Turtle scientists need to monitor nests and record status and number of hatchings so that they can **measure the effectiveness of [AMMC](https://www.ammco.org/){:target="_blank" rel="noopener"} strategies to protect the aquatic megafauna and their habitats.**

## The solution

I designed the interaction for a mobile app that allows turtle scientists to **record new turtle nests and receive notifications when they’re ready to hatch.** This would help scientists checking how many eggs have hatched and how many have not.

## My role

This is a design challenge from[ UX Rescue](https://www.uxrescue.org/){:target="_blank" rel="noopener"}. Based on a definition of the **user group, their needs, user stories, and the data recorded,** I proposed wireframes and a live prototype.

## Overview

The African Marine Mammal Conservation Organization (AMMC) has created Siren, an open science software platform that helps local coastal communities, scientists, governments and NGOs understand data about marine mammal populations and solve conservation problems.

Siren has already led to the legal protection of 5 marine mammals on the Western Coast of Africa and they are now expanding their outreach to protect 11 endangered species of sharks and rays including one that experts thought was extinct.

Siren wants to add new features on the mobile and web interface for turtle scientists like the monitoring of nests and better statistics, analytics and visualization tools on the web interface.

## Wireframes

### New nest interaction

A turtle scientist is checking a beach when they encounter a turtle nest.

All the nests are recorded on the map, each showing their status.

The scientist adds the nest:

* Their name, GPS location, beach ID and new nest ID are all assigned automatically.
* They specify the date of sighting, turtle species, and the status of the nest (undisturbed, partially lost, lost).
* Estimated dates of hatching and excavation are calculated automatically, but can be modified manually.
* The scientist activates the notifications to be ready to go and record the status of the eggs.

{% include pattern-figure.html image="/assets/images/Siren-add-nest_wireframes.png" caption="Off-brand contact lenses container" width="1400" height="621" %}

### Notifications interaction

After receiving the notification, the scientist can fill in the latest data recorded:

* Effective date of excavation
* Number of eggs hatched
* Number of eggs dead

{% include pattern-figure.html image="/assets/images/Siren-notifications_wireframes.png" caption="Off-brand contact lenses container" width="1400" height="594" %}

## Prototype

<iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450" src="https://www.figma.com/embed?embed_host=share&amp;url=https%3A%2F%2Fwww.figma.com%2Fproto%2FpNyDsJ0tQXauivuJeXJDc3%2FSIREN-Mobile-application-%E2%80%93-Exercise%3Fnode-id%3D2%253A2" allowfullscreen=""></iframe>