---
layout: page
title: Contacts
date: 2020-02-27T17:03:58.000Z
last_modified_at: '2022-01-13 16:58:21'
description: 'Get in touch via email, connect on LinkedIn, GitHub, Flickr and Mastodon. Subscribe to my RSS feed or newsletter.'
excerpt: 'Think I could help with your project? I’m available for hire. <a href="mailto:contacts@silviamaggidesign.com" title="Write me an email"><strong>Write me an email</strong></a>, I will get back to you within two working days.'
permalink: '/contacts/'
---
Have a question, or simply want to start a conversation? Feel free to connect on {% for item in site.data.nav-social %}[{{ item.name }}]({{ item.link }} "{{ item.name }}"){% unless forloop.last %}, {% endunless %}{% if forloop.last %}.{% endif %}{% endfor %}

## Newsletter

[Design, Digested](/newsletter/ "Go to the Newsletter page") is a newsletter about design, tech, and their implication in our lives. Would you like a preview? Check the [newletter archive](/newsletter/archive/).

{% include pattern-newsletter-sub.html %}

## Updates

Get the latest from the blog by subscribing to my [RSS feed](https://silviamaggidesign.com/feed.xml).