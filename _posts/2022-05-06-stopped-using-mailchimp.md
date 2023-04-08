---
title: How I stopped using Mailchimp
date: '2022-05-06 21:41:33'
last_modified_at: '2022-07-19 16:24:16'
featured-post: false
categories:
  - Personal
tags:
  - design digested
  - privacy
  - trackers
  - mailchimp
  - newsletter
description: 'I don’t like trackers. That’s why I stopped using Mailchimp. I tell you why and how I stopped using Mailchimp and what I did instead.'
excerpt: 'I tell you why and how I stopped using Mailchimp and what I did instead.'
---
I don’t like trackers. When I decided to build [my own independent website](https://silviamaggidesign.com/design/brand-new-website/), I got rid of everything that could tell me who visited it. Furthermore, every link I share on it is <abbr title="Urchin Tracking Module">UTM</abbr>[^utm]-free. I do it because I also don’t like to track people. 

The next natural step was to get rid of Mailchimp. Their new composer had given me headhaches, leaving me less than happy every time I sent out a newsletter. Not activating tracking for opens and clicks didn’t help much, as Mailchimp will keep using the clicks data for abuse mitigation purposes[^mailchimp-trackers].

## My problem

I needed a way to receive subscriptions, store the subscribers’ addresses and send emails to those addresses. It doesn’t interest me to grow exponentially. I’m glad when people subscribe, but I don’t sell anything. Having a few subscribers that like to read what I write is already a success. Therefore, I don’t need a marketing tool.

## The solution

Without looking further away, the solution has always been in front of my eyes: the email. It stores the addresses and can send emails to groups. Email providers might put limits to the number of people in groups, but for now I’m fine using Protonmail. After a few tests I found that the best email client for the job is Thunderbird.

[Netlify](https://www.netlify.com/), my web hosting, comes with built-in form handling. I created a simple subscription form  adding a `netlify` attribute to the `<form>` tag[^netlify-forms].  Now I manage it from the site admin panel. Spam is automatically filtered out and I receive notifications every time someone subscribes. 

Mailchimp provides a handy archive of past newsletters for people to consult before deciding to subscribe. I recreated it [on my website](https://silviamaggidesign.com/newsletter/). 

## What’s ahead

I’m considering using [Freelists](https://www.freelists.org/), a mailing list host that doesn’t use advertisement and doesn’t charge money. More on this if and when I decide to switch. 

## Conclusions

The entire process took time to setup but it’s rewarding. Every decision is in line with the work I keep doing to discard any attempt to create an online persona that doesn’t reflect who I am. Altough I have a branding and I like design, my newsletters don’t contain images anymore – not even my logo. I appreciate the idea of being _light_ in people’s inboxes, giving more focus to the content. 

---

[^utm]: [https://en.wikipedia.org/wiki/UTM_parameters](https://en.wikipedia.org/wiki/UTM_parameters)
[^mailchimp-trackers]: [https://mailchimp.com/en-gb/help/enable-and-view-click-tracking/](https://mailchimp.com/en-gb/help/enable-and-view-click-tracking/)
[^netlify-forms]: [https://docs.netlify.com/forms/setup/](https://docs.netlify.com/forms/setup/)