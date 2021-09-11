---
layout: page
title: Contacts
date: 2020-02-27T17:03:58.000Z
last_modified_at: '2021-09-11T13:19:53.143Z'
description: 'Get in touch via email, connect on LinkedIn, Flickr, and GitHub. You can also subscribe to my RSS feed or newsletter.'
excerpt: 'Get in touch via email, connect on LinkedIn, Flickr, and GitHub. You can also subscribe to my RSS feed or newsletter.'
permalink: /get-in-touch-silviamaggi/
redirect_from:
  - /contact/
  - /contacts-silviamaggi/
  - /it/contatti/
---
{%- assign socialnav = site.data.nav-social -%}

# {{ page.title }}

<p class="lead">Are you looking for help with UX, responsive web design, information architecture? <strong>I&rsquo;m available for hire</strong> — <a href="mailto:contacts@silviamaggidesign.com" title="Email me">let&rsquo;s get in touch</a>.</p>

Have a question, or simply want to start a conversation? Feel free to connect on <a href="{{ socialnav[0].link }}" target="_blank" rel="noopener">{{ socialnav[0].name }}</a>, <a href="{{ socialnav[2].link }}" target="_blank" rel="noopener">{{ socialnav[2].name }}</a> and <a href="{{ socialnav[1].link }}" target="_blank" rel="noopener">{{ socialnav[1].name }}</a>.

<h2>Newsletter</h2>

<p><a href="/design-inspiration-newsletter-silvia-maggi/">Design, Digested</a> is a newsletter about design, tech, and their implication in our lives.</p>

{%- include pattern-newsletter-sub.html %}

<span class="smd-font-micro">By subscribing, you acknowledge that your information will be transferred to Mailchimp for processing. <a href="https://mailchimp.com/legal/" target="_blank" rel="noopener">Learn more about Mailchimp’s privacy practices</a>.</span>
