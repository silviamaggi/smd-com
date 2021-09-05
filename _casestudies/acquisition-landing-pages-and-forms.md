---
layout: post
title: UniCredit acquisition landing pages and forms
featured-post: true
date: 2021-04-13T16:05:42.000Z
last_modified_at: '2021-09-05T16:29:15.917Z'
description: UniCredit Bank wanted to reach a wider range of clients. We helped them increase the conversion rates of their mobile pages.
featured-image: feat-unicredit-case-study-featured-img.jpg
excerpt: UniCredit Bank wanted to reach a wider range of clients. We helped them increase the conversion rates of their mobile pages.
---
**Skills**: User interviews, Content Strategy, User flows, Wireframing, HTML& CSS, Prototyping, UI  
**Tools**: Sketch app, UI Farm framework

## The problem

[UniCredit](https://unicredit.it/){:target="_blank" rel="noopener"}, a leading European commercial bank headquartered in Italy, wants to leverage the increasing use of smartphones to reach a wider range of clients. Their acquisition landing pages and forms **look outdated and not mobile friendly**. An overhaul is essential for the bank to remain competitive.

## The solution

Within a single codebase, we **created custom experiences** for smartphone, tablet and desktop to replace the existing pages and forms. The goal was to increase their trustworthiness and conversion rates.

## My role

**I led the project and worked on the UX and final designs**. My two colleagues at UI Farm provided valuable feedback, collaborating to devise the best content strategy. Their expertise completed the project with state-of-the-art frontend and backend development.

{% include toc.md %}

## The context

It’s 2013. In Italy, a small percentage of people uses smartphones to go online; even fewer to make purchases. UniCredit **sees the potential of mobile and wants to invest to widen their customer base**, reach younger people and innovate.

To do so, they contacted [UI Farm](https://uifarm.co.uk/){:target="_blank" rel="noopener"}, the London-based web agency I co-founded that specialised in **device-agnostic responsive design**. After extensive meetings with UniCredit, we understood why their potential clients were less likely to open a bank account from a mobile device:

> […] in 2013, only 37 percent of users [aged 16 years and older] used their smartphones to go online, while 84 percent declared to have such a habit in 2017.
>
> <cite>—<a href="https://www.statista.com/statistics/800840/smartphone-and-internet-usage-in-italy/" target="_blank" rel="noopener">Statista Research Department</a></cite>

* Slow technology adoption in an aging society.
* Lack of trust in new technology.
* Historical preference for in-person services, which feel personalised and safer.

> Over the period of consideration [2013 – 2018], purchases via smartphone increased from barely six percent to over 26 percent of total online purchase in Italy.
>
> <cite>—<a href="https://www.statista.com/statistics/579435/incidence-rate-of-mobile-devices-on-online-purchases-by-type-in-italy/" target="_blank" rel="noopener">Statista Research Department</a></cite>

Together, we devised a content strategy to **build trust through the user interface**.

## Meet the personas

UniCredit know their customers well, thanks to their continuous research and usability tests. However, they still had questions our work aimed to answer:

* **To what extent the landing pages help our customers upgrade their products?**
* **Is it easy to find information on how to switch banks?**
* **Will people request our products online?**

Based on existing data, and observations of a group of ten people I gave tasks to perform, I developed three personas:

{% include pattern-figure.html image="/assets/images/Marco-avatar.png" caption="" width="95" height="95" %}

### Inquisitive Elisa

Has an account with a competitor but would like to switch, if the process is straightforward.

{% include pattern-figure.html image="/assets/images/Giulio-avatar.png" caption="" width="95" height="95" %}

### Cautious Giulio

A UniCredit client with growing curiosity about internet banking, despite online security concerns

## Customer journey maps

The customer journey maps follow the actions the personas take to reach their goals. I chose them over user flows because *they highlight thoughts and emotions*, useful to identify a journey’s pain points.



{% include pattern-figure.html image="/assets/images/customer-journey-map_marco.png" caption="Eager Marco customer journey map" width="1754" height="1056" %}

{% include pattern-figure.html image="/assets/images/customer-journey-map_elisa.png" caption="Inquisitive Elisa customer journey map" width="1920" height="1130" %}

{% include pattern-figure.html image="/assets/images/customer-journey-map_giulio.png" caption="Cautious Giulio customer journey map" width="1754" height="1142" %}

## Content strategy

At UI Farm, content precedes design. Even before starting to sketch, **the focus is on content and its prioritisation**. This is also related to performance, which is treated like a design element.

We analysed the content of the existing landing pages and proposed a solution to UniCredit.

### Analysis

{% include pattern-figure.html image="/assets/images/unicredit-content-analysis.png" caption="" width="1006" height="1565" %}


Reference

Notes

**2**

The navigation is isolated and, with its low-contrast features, barely visible.

**3, 4**

The visual, title, subtitle and call to actions are all images.

**5**

The steps to complete the request are presented before the product feature are explained.

**6**

First product feature's within an open accordion.

**7**

Each feature presents the product PDF and call to actions.

**9**

The free number anyone can call to get help is below the legal message. With the exception of the campaign claim, the text is very low-contrast and small.

{% include pattern-figure.html image="/assets/images/unicredit-content-strategy.png" caption="" width="895" height=" 1497" %}

Reference

Notes

**2**

More prominent navigation. Aiming for higher contrast ratio between foreground and background for accessibility.

**3, 4**

The product visual will be an image, while the rest will be HTML/CSS, ensuring that they will adapt to every screen. The page performance will improve too, with fewer HTTP requests and better use of bandwidth.

**5**

On desktop, each product feature will be presented in full, without accordions.

**6**

The process steps are visible below the product features.

**7**

Same look & feel as the bigger ones, for consistency. These also represent the last way out, positioned strategically after all important information.

**8**

The free phone number and product PDF will be more visible and readily available in this area.

**9**

Elements needed either for legal or marketing reasons, but doesn't directly serve users, is in the final footer with a better contrast ratio for accessibility.

## Wireframes

After UniCredit signed off a modified proposal, I proceeded to prepare the wireframes. Thanks to UI Farm’s framework, I was able to **rapidly prototype the pages directly in-browser**.

### Mobile wireframes: notes

* **Each feature block is conditionally loaded**. Their content is served only when users tap the accordion. The same goes for the legal message at the bottom of the page.
* At UniCredit’s request, each block contains the Calls to Actions. The product PDF is visible in one place only, between the product features and the process steps.
* Tapping the free number will initiate a phone call to the support team, thanks to **the adaptive capabilities of our framework**.

{% include pattern-figure.html image="/assets/images/unicredit-landingpages-mobile.png" caption="UniCredit landing pages wireframes mobile" width="84" height="735" %}

{% include pattern-figure.html image="/assets/images/unicredit-landingpages-wireframes_desktop.jpg" caption="UniCredit landing pages wireframes desktop" width="368" height="1024" %}

> My colleagues and I wanted the work for UniCredit to be something to be proud of for years to come.

## Sticky header

My colleagues and I wanted the work for UniCredit to be **something to be proud of for years to come**. Thus, we felt that having the Call to Actions at the end of each product feature wasn’t going to reflect our best output.

We sat down together to find a solution that was technically feasible, elegant, and that would allow us to stay within budget and timeline.

The solution, which UniCredit approved, is a dynamic sticky header.

{% include pattern-figure.html image="/assets/images/mobile-sticky-header-CTAs.png" caption="On mobile with Call to Actions" width="640" height="1308" %}

{% include pattern-figure.html image="/assets/images/mobile-sticky-header-free-number.png" caption="On mobile with free number button" width="640" height="988" %}

When the Call to Actions are visible in the page, the sticky header shows the Free number button instead.

## Acquisition forms

When users click on the Call to Action _Request it online_, they land on the UniCredit acquisition forms. From there, they are guided through a four-step straightforward procedure.

### User flows

#### First interaction

On a landing page, click on _Request it online_, wait to receive an email from UniCredit. This choice works as security verification.

{% include pattern-figure.html image="/assets/images/unicredit-forms-flow_1.jpg" caption="Form flow, first interaction" width="2560" height="947" %}

#### Form flow

Click on the link received via email and start the request process.

{% include pattern-figure.html image="/assets/images/unicredit-forms-flow_2.jpg" caption="Form flow" width="2560" height="820" %}

### Wireframes

We applied the same principles to the forms, except we couldn’t implement the sticky header.

**Some elements on mobile were conditionally loaded**, and users had the ability to contact the Free number for assistance. In this case, the process steps are the first element users are going to see after the header.

Of great importance is the the lock icon at the top right: together with the browser icon for secure connections, it will reassure users this is a safe procedure.

{% include pattern-figure.html image="/assets/images/unicredit-forms-wireframes_mobile.png" caption="Forms wireframes, mobile" width="79" height="736" %}

## Final result

Having started the wireframing phase in-browser meant that, once the client was happy with the result, **I could work on the visual design directly in HTML/CSS**.

Using SASS, I could **rapidly wrap reusable elements** — such as brand colours, typography, buttons — into variables and patterns. My colleagues could simultaneously work on the functionality of both pages and forms.

**UniCredit had live access to the prototype** and could interact with us, commenting on the progress as needed through our JIRA board. Soon, we were ready to deliver and wait for the client to start the testing phase.

### Landing pages

(Gallery)

### Forms

(Gallery)

## Conclusions

**The landing pages had been received well**, but the number of people that used the online forms didn’t increase much: the experiment wasn’t successful.

While the landing pages redesign implementation received the go-ahead, the forms didn’t.

The shift toward mobile and online services happened during the following years, gradually.

> […] the number of users of banking services such as home and corporate banking steadily increased, growing from approximately 30.4 million in 2010 to nearly 58 million in 2019.
>
> <cite>—<a href="https://www.statista.com/statistics/737981/number-of-home-and-corporate-banking-users-in-italy/" class="rank-math-link" target="_blank" rel="noopener">Statista Research Department</a></cite>

This project **proved how important culture is when designing**. Getting to know the context of use, how a population responds to changes and the cultural reasons behind behaviours is paramount to avoid costly mistakes.

Furthermore, without testing, UniCredit might have ended up with a redesign that didn’t make any difference for its users.

## Client review

> UI Farm’s innovative workflow and unique skills has given us a very clear insight into our customers’ behaviour and preferences, which has considerably boosted our account application conversions. Thanks to UI Farm’s approach, we have been able to significantly improve the experience delivered to our customers and prospects, and make changes that may have seemed minor to us but have resulted in significant conversion lifts. UI Farm has truly changed our approach to Interaction Design.
>
> <cite>Gabriele Rosati, Head of Interaction Design at UniCredit.</cite>

## Further information

Read more about [UI Farm’s workflow for the multi-device Web](https://medium.com/ui-farm/how-we-work-a-modern-workflow-for-the-multi-device-web-4e0dcb081b5b){:target="_blank" rel="noopener"}

## Contact

✒️ [Get in touch]({{ site.url }}/get-in-touch-silviamaggi/) for comments, feedback or if you wish to work with me.

