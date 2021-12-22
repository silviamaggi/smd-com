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

<h2 id="guestbook">Guestbook</h2>

👋 Sign the guestbook using the form below, like in [the early days of the Web](https://neustadt.fr/essays/the-small-web/){:target="_blank" rel="noopener" title="Go to Parimal Satyal's article about the small web"}. Thank you for stopping by!

<form class="my-4 pt-3" action="/guestbooked" name="guestbook" netlify netlify-honeypot="not-for-humans">
  <div style="display: none;"><label>Don’t fill this out if you're human: <input name="not-for-humans" /></label></div>
  <div class="mb-3">
    <label class="form-label" for="guestName">Name</label>
    <input class="form-control form-control-lg" placeholder="Your name" type="text" name="name" id="guestName" required>
  </div>
  <div class="mb-3">
    <label class="form-label" for="guestURL">Website (optional)</label>
    <input class="form-control form-control-lg" placeholder="Your website" type="text" name="website" id="guestURL">
  </div>
  <div class="mb-3">
    <label class="form-label" for="guestMessage">Message</label>
    <textarea class="form-control form-control-lg" rows="3" name="message" placeholder="Your message" id="guestMessage" required></textarea>
  </div>
  <button class="btn btn-lg btn-smd fw-bold" type="submit">Submit</button>
</form>

{%- include pattern-guestbook-entry.html -%}