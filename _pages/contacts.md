---
layout: page
title: Contacts
date: 2020-02-27T17:03:58.000Z
last_modified_at: '2021-12-22 15:23:09'
description: 'Get in touch via email, connect on LinkedIn, Flickr, and GitHub. You can also subscribe to my RSS feed or newsletter.'
excerpt: 'Get in touch via email, connect on LinkedIn, Flickr, and GitHub. You can also subscribe to my RSS feed or newsletter.'
permalink: /get-in-touch-silviamaggi/
---
{%- assign socialnav = site.data.nav-social -%}

<p class="lead">If you need help with:</p>

  <ul class="smd-ul">
    <li><strong>UX consultancy</strong>: problem-finding, research-based prototypes.</li>
    <li><strong>Design and development</strong> of apps and websites using static site generators or CMSs.</li>
  </ul>

<p><a href="mailto:contacts@silviamaggidesign.com" title="It opens your email client">Write me an email</a> — <strong>I&rsquo;m available for hire</strong>.</p>

<p class="detached">Have a question, or simply want to start a conversation? Feel free to connect on <a href="{{ socialnav[0].link }}" rel="nofollow me">{{ socialnav[0].name }}</a>, <a href="{{ socialnav[2].link }}" rel="nofollow me">{{ socialnav[2].name }}</a> and <a href="{{ socialnav[1].link }}" rel="nofollow me">{{ socialnav[1].name }}</a>.</p>

<h2>Newsletter</h2>

<p><a href="/design-inspiration-newsletter-silvia-maggi/" title="Go to the Newsletter page">Design, Digested</a> is a newsletter about design, tech, and their implication in our lives.</p>

{%- include pattern-newsletter-sub.html %}