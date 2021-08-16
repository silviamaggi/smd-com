---
title: Contacts
description: Get in touch by filling out a simple form. Follow or connect on social media such as LinkedIn and Flickr. Subscribe to my newsletter.
permalink: /get-in-touch-silviamaggi/
redirect_from:
  - /contact/
  - /contacts-silviamaggi/
  - /it/contatti/
---
# {{ page.title }}

## Write me a message

<div data-tf-widget="pLyazv5E" data-tf-hide-headers style="width:100%;height:400px;"></div><script src="https://embed.typeform.com/next/embed.js"></script>

## Connect with me

<ul class="navigation navigation-social">
{% for item in site.data.social -%}
<li><a href="{{ item.link }}" title="Visit my {{ item.name }} profile" target="_blank" rel="noopener">{{ item.name }}</a></li>
{% endfor -%}
</ul>

## Join the mailing list