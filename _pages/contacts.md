---
layout: page
title: Contacts
date: 2020-02-27T17:03:58.000Z
last_modified_at: '2021-08-30T21:15:01.784Z'
description: 'Get in touch via email, connect on LinkedIn, Flickr, and GitHub. You can also subscribe to my RSS feed or newsletter.'
permalink: /get-in-touch-silviamaggi/
redirect_from:
  - /contact/
  - /contacts-silviamaggi/
  - /it/contatti/
---
{%- assign socialnav = site.data.nav-social -%}

# {{ page.title }}

<p class="lead">Have a question or simply want to get in touch?</p>

Feel free to [email me](mailto:contacts@silviamaggidesign.com) or connect on <a href="{{ socialnav[0].link }}" target="_blank" rel="noopener">{{ socialnav[0].name }}</a>, <a href="{{ socialnav[2].link }}" target="_blank" rel="noopener">{{ socialnav[2].name }}</a> and <a href="{{ socialnav[1].link }}" target="_blank" rel="noopener">{{ socialnav[1].name }}</a>. You can also <a href="{{ socialnav[3].link }}">subscribe to my {{ socialnav[3].name }}</a>.
