---
layout: portfolio-content
title: UniCredit acquisition landing pages and forms
featured-post: true
date: 2021-04-13T16:05:42.000Z
last_modified_at: '2021-09-11T19:17:25.902Z'
description: UniCredit Bank wanted to reach a wider range of clients. We helped them increase the conversion rates of their mobile pages.
featured-image: feat-unicredit-case-study-featured-img.jpg
excerpt: UniCredit Bank wanted to reach a wider range of clients. We helped them increase the conversion rates of their mobile pages.
skills:
  - User interviews
  - Content Strategy
  - User flows
  - Wireframing
  - HTML & CSS
  - Prototyping
  - UI
tools:
  - Sketch app
  - Responsive framework
problem: '<a href="https://unicredit.it/" target="_blank" rel="noopener">UniCredit</a>, a leading European commercial bank headquartered in Italy, wants to leverage the increasing use of smartphones to reach a wider range of clients. Their acquisition landing pages and forms look outdated and not mobile friendly. An overhaul is essential for the bank to remain competitive.'
solution: 'Within a single codebase, we created custom experiences for smartphone, tablet and desktop to replace the existing pages and forms. The goal was to increase their trustworthiness and conversion rates.'
myrole: 'I led the project and worked on the UX and final designs. My two colleagues at UI Farm provided valuable feedback, collaborating to devise the best content strategy. Their expertise completed the project with state-of-the-art frontend and backend development.'
---
## The context

> *In 2013, only 37 percent of users [aged 16 years and older] used their smartphones to go online, while 84 percent declared to have such a habit in 2017.*
>
> <cite><a href="https://www.statista.com/statistics/800840/smartphone-and-internet-usage-in-italy/" target="_blank" rel="noopener">Statista Research Department</a></cite>

It’s 2013. In Italy, a small percentage of people uses smartphones to go online; even fewer to make purchases. UniCredit sees the potential of mobile and wants to invest to widen their customer base, reach younger people and innovate. To do so, they contacted [UI Farm](https://uifarm.co.uk/){:target="_blank" rel="noopener"}, the London-based web agency I co-founded that specialised in device-agnostic responsive design. We focused on why their potential clients were less likely to open a bank account from a mobile device:

<ul class="smd-ul">
<li>Slow technology adoption in an aging society.</li>
<li>Lack of trust in new technology.</li>
<li>Historical preference for in-person services, which feel personalised and safer.</li>
</ul>

Together, we devised a content strategy to **build trust through the user interface**.

> *Over the period of consideration [2013 – 2018], purchases via smartphone increased from barely six percent to over 26 percent of total online purchase in Italy.*
>
> <cite><a href="https://www.statista.com/statistics/579435/incidence-rate-of-mobile-devices-on-online-purchases-by-type-in-italy/" target="_blank" rel="noopener">Statista Research Department</a></cite>

## Understanding the users

UniCredit know their customers well, thanks to their continuous research and usability tests. However, they still had questions our work aimed to answer:

<ul class="smd-ul">
  <li>To what extent the landing pages help our customers upgrade their products?</li>
  <li>Is it easy to find information on how to switch banks?</li>
  <li>Will more people request our products online?</li>
</ul>

Based on existing data, and observations of a group of ten people, I created customer journey maps for each persona.

## Customer journey maps

To understand how straightforward it is to find the right information on the landing pages, I gave ten people a task and observed what they did. During, I asked how they felt. The customer journey maps follow the actions the personae take to reach their goals. I chose them over user flows because *they highlight thoughts and emotions*, useful to identify a journey’s pain points.

{% include pattern-imagegallery.html folder="/assets/images/gallery-unicredit-case-study/gallery-1" id="1" %}

## Content strategy

Content precedes design. Even before starting to sketch, the focus is on content and its prioritisation. This is also related to performance, which is treated like a design element. We analysed the content of the existing landing pages and proposed a solution to UniCredit.

{% include pattern-figure-cols.html image1="/assets/images/unicredit-content-analysis.jpg" image2="/assets/images/unicredit-content-strategy.jpg" alt="Analysis of the current landing pages structure / Content strategy proposed" caption="Analysis of the current landing pages structure / Content strategy proposed" width="1004" height="1200" %}

## Wireframes

I prototyped the pages directly in-browser, thanks to UI Farm’s framework.

{% include pattern-figure-cols.html image1="/assets/images/unicredit-feature-block_mobile.png" image2="/assets/images/unicredit-freenumber_mobile.png" alt="Details of the landing pages mobile wireframes" caption="Details of the landing pages mobile wireframes" width="1137" height="1273" %}

<ul class="smd-ul">
  <li>Each feature block is conditionally loaded. <em>Their content is served only when users tap the accordion.</em> The same goes for the legal message at the bottom of the page.</li>
  <li>The free number button initiates a phone call to the support team, thanks to the adaptive capabilities of our framework.</li>
</ul>

{% include pattern-figure.html image="/assets/images/uc-landing-desktop-wireframes-top.png" caption="Details of landing page wireframes, desktop" width="1024" height="600" %}

{% include pattern-figure.html image="/assets/images/uc-landing-desktop-wireframes-bottom.png" caption="Details of landing page wireframes, desktop" width="1024" height="600" %}

## Clever sticky header

My colleagues and I felt that having the Calls to Action repeated at the end of each product feature wasn’t going to reflect our best output. We found a solution that was technically feasible, elegant, and that would allow us to stay within budget and timeline. The solution, which UniCredit approved, is a dynamic sticky header.

{% include pattern-figure-cols.html image1="/assets/images/unicredit-ctas-mobile.jpg" image2="/assets/images/unicredit-freenumber-mobile.jpg" alt="Sticky header on mobile" caption="Sticky header on mobile" width="487" height="1000" %}

{% include pattern-figure.html image="/assets/images/unicredit-sticky-header-desktop.jpg" caption="Sticky header on desktop" width="1200" height="563" %}

When the Calls to Action are visible in the page, the sticky header shows the Free number button instead.

## Forms

When users click on the Call to Action _Request it online_, they land on the UniCredit acquisition forms. From there, they are guided through a four-step straightforward procedure.

### Entry point

 Users encounter an initial brief form — that works as a security verification — and will receive an email from UniCredit containing a link to continue with the request.

{% include pattern-figure.html image="/assets/images/unicredit-forms-flow_1.jpg" caption="Form flow, entry point" width="2560" height="947" %}

### Form flow

Users click on the link received via email and start the request process.

{% include pattern-figure.html image="/assets/images/unicredit-forms-flow_2.jpg" caption="Form flow" width="2560" height="820" %}

### Wireframes

We applied the same principles — conditionally loaded elements, and ability to call the support from mobile — to the forms. Of great importance is the the lock icon at the top right: together with the browser icon for secure connections, it reassures users this is a safe procedure.

{% include pattern-figure-cols.html image1="/assets/images/unicredit-forms-wireframes-mobile-1.jpg" image2="/assets/images/unicredit-forms-wireframes-mobile-2.jpg" alt="Details of the forms wireframes, mobile" caption="Details of the forms wireframes, mobile" width="800" height="1224" %}

## Final result

Having started the wireframing phase in-browser meant that, once the client was happy with the result, I could work on the visual design directly in HTML/CSS. Using SASS, I could rapidly wrap reusable elements — such as brand colours, typography, buttons — into variables and patterns. My colleagues could simultaneously work on the functionality.

UniCredit had live access to the prototype and could interact with us, commenting on the progress as needed through our JIRA board. Soon, we were ready to deliver and wait for the client to start the testing phase.

## Landing pages

{% include pattern-figure.html image="/assets/images/unicredit-landingpages-final.jpg" caption="Landing pages final design" width="1200" height="548" %}

## Forms

{% include pattern-figure.html image="/assets/images/unicredit-forms-final.jpg" caption="Forms final design" width="1200" height="548" %}

## Conclusions

The landing pages had been received well, but the number of people that used the online forms didn’t increase much: that experiment wasn’t successful. While the landing pages redesign implementation received the go-ahead, the forms didn’t. The shift toward mobile and online services happened gradually during the following years.

> *The number of users of banking services such as home and corporate banking steadily increased, growing from approximately 30.4 million in 2010 to nearly 58 million in 2019.*
>
> <cite><a href="https://www.statista.com/statistics/737981/number-of-home-and-corporate-banking-users-in-italy/" class="rank-math-link" target="_blank" rel="noopener">Statista Research Department</a></cite>

This project proved how important culture is when designing. Getting to know the context of use, how a population responds to changes and the cultural reasons behind behaviours is paramount to avoid costly mistakes. Furthermore, without testing, UniCredit might have ended up with a redesign that didn’t make any difference for its users.

## Client review

> UI Farm’s innovative workflow and unique skills has given us a very clear insight into our customers’ behaviour and preferences, which has considerably boosted our account application conversions. Thanks to UI Farm’s approach, we have been able to significantly improve the experience delivered to our customers and prospects, and make changes that may have seemed minor to us but have resulted in significant conversion lifts. UI Farm has truly changed our approach to Interaction Design.
>
> <cite>*Gabriele Rosati, Head of Interaction Design at UniCredit.*</cite>

## Further information

🔗 Read about [UI Farm’s workflow for the multi-device Web](https://medium.com/ui-farm/how-we-work-a-modern-workflow-for-the-multi-device-web-4e0dcb081b5b){:target="_blank" rel="noopener"}

## Contact

<a href="mailto:contacts@silviamaggidesign.com" title="Email me">Get in touch</a> to talk about your next project.
