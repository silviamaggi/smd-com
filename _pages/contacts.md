---
layout: page
title: Contacts
date: 2020-02-27T17:03:58.000Z
last_modified_at: '2022-01-13 16:58:21'
description: 'Get in touch via email, connect on LinkedIn, GitHub, and Flickr. Subscribe to my RSS feed or newsletter.'
excerpt: 'Get in touch via email, connect on LinkedIn, GitHub, and Flickr. Subscribe to my <a href="/feed.xml">RSS feed</a> or newsletter.'
permalink: /get-in-touch-silviamaggi/
---
{%- assign socialnav = site.data.nav-social -%}

<p class="p-summary lead"><strong>I&rsquo;m available for hire</strong>. If you need help with:</p>

<ul class="smd-ul">
  <li><strong>UX consultancy</strong>: problem-finding, research-based prototypes;</li>
  <li><strong>Design and development</strong> of apps and websites using static site generators or CMSs.</li>
</ul>

<div class="text-center my-5">
  <a class="btn btn-lg btn-smd btn-smd-cta py-3 px-4 fw-bold" href="mailto:contacts@silviamaggidesign.com" title="Write me an email"><span class="text-uppercase fs-4">✍️ <strong>Write me an email</strong></span></a>
</div>

<p class="detached">Have a question, or simply want to start a conversation? Feel free to connect on <a href="{{ socialnav[0].link }}" rel="nofollow me">{{ socialnav[0].name }}</a>, <a href="{{ socialnav[1].link }}" rel="nofollow me">{{ socialnav[1].name }}</a>, <a href="{{ socialnav[2].link }}" rel="nofollow me">{{ socialnav[2].name }}</a> and <a href="{{ socialnav[3].link }}" rel="nofollow me">{{ socialnav[3].name }}</a>.</p>

<h2>Newsletter</h2>

<p><a href="/newsletter/" title="Go to the Newsletter page">Design, Digested</a> is a newsletter about design, tech, and their implication in our lives.</p>

{%- include pattern-newsletter-sub.html %}