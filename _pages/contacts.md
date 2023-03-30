---
layout: page
title: Contacts
date: '2020-02-27 17:03:58'
last_modified_at: '2023-03-30 21:41:21'
description: 'Get in touch via email, connect on LinkedIn, GitHub, and Mastodon.'
excerpt: 'The best way to contact me is via email. I will get back to you in a few days.'
permalink: '/contacts/'
---
<div class="my-5">
  <p class="text-center">🖋 <a href="mailto:contacts@silviamaggidesign.com"><strong>Write me an email</strong>&nbsp;→</a></p>
</div>

Have a question, or simply want to start a conversation? Feel free to connect on {% for item in site.data.nav-social %}[{{ item.name }}]({{ item.link }}){% unless forloop.last %}, {% endunless %}{% if forloop.last %}.{% endif %}{% endfor %}