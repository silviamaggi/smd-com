---
layout: page
title: Contact
date: '2020-02-27 17:03:58'
last_modified_at: '2023-04-04 21:05:28'
description: 'Get in touch via email. Connect on LinkedIn, GitHub, and Mastodon.'
excerpt: 'The best way to contact me is via email. I will get back to you in a few days.'
permalink: '/contact/'
---
<div class="my-5">
  <p class="text-center">🖋 <a href="mailto:contacts@silviamaggidesign.com"><strong>Write me an email</strong>&nbsp;→</a></p>
</div>

Have a question, or simply want to start a conversation? Feel free to connect on {% for item in site.data.nav-social %}[{{ item.name }}]({{ item.link }}){% unless forloop.last %}, {% endunless %}{% if forloop.last %}.{% endif %}{% endfor %}