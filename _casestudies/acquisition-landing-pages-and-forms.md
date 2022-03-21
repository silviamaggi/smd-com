---
layout: post
title: UniCredit acquisition landing pages and forms
featured-post: false
type: 'UX, UI'
casestudy-order: 1
date: 2021-04-13T16:05:42.000Z
last_modified_at: '2022-01-25 18:23:03'
description: 2014 – UniCredit Bank wanted to reach a wider range of clients. I helped them increase the conversion rates of their mobile pages.
featured-image: feat-unicredit-case-study-featured-img.jpg
featured-image-alt: Screens showing UniCredit landing pages and forms
excerpt: UniCredit Bank wanted to reach a wider range of clients. I helped them increase the conversion rates of their mobile pages.
year: 
  - 2014
skills:
  - Observational research
  - Content Strategy
  - Flow diagrams
  - Wireframing
  - HTML & CSS
  - Prototyping
  - UI
tools:
  - Sketch app
  - Responsive framework
---
## The problem

<a href="https://unicredit.it/" title="Go to the Unicredit Bank website">UniCredit</a>, a leading European commercial bank headquartered in Italy, wants to leverage the increasing use of smartphones to reach a wider range of clients. Their acquisition landing pages and forms <strong>look outdated and are not mobile friendly</strong>. An overhaul is essential for the bank to remain competitive.

## My role

I <strong>led the project</strong> and worked on the UX and final designs. My colleagues at UI Farm provided valuable feedback, collaborating to devise the best content strategy. Their expertise completed the project with state-of-the-art frontend development.

## The context

It’s 2013. A small percentage of Italians use smartphones for online services or purchases[^smartphone-habits]. UniCredit see the potential of mobile and wants to widen their customer base by reaching a younger audience. They contacted [UI Farm](https://web.archive.org/web/20180314165034/http://uifarm.co.uk/){:target="_blank" title="Go to the UI Farm website"}, the London-based web agency I co-founded that specialised in device-agnostic responsive design. We focused on why their potential clients were less likely to open a bank account from a mobile device:

- slow technology adoption in an ageing society;
- lack of trust in new technology;
- historical preference for in-person services, perceived as personalised and safer.

We devised a content strategy to **build trust through the user interface**.

## Observational research

To understand how straightforward it was to find the information they needed on the landing pages, we observed ten people performing a task.

**Recruiting**: we screened people reached through our network of clients and collaborators to make sure we tested at least 10 users.
**Target users**: people under 30 who don't have a bank account yet, or wish to switch banks.
**Task**: starting from an ad on Google, find the information needed to switch banks or to open an account with UniCredit.

I distilled the research insights into customer journey maps. The maps follow the actions the personae take to reach their goals.

{% include pattern-imagegallery.html folder="/assets/images/gallery-unicredit-case-study/gallery-1/" id="1" %}

I chose them over user flows because <em>they highlight thoughts and emotions</em>, useful to identify a journey’s pain points.

## Content strategy

**Content precedes design**. Even before starting to sketch, the focus is on content and its prioritisation. This is also related to performance, which I treat like a design element. After analysing the content of the existing landing pages, we proposed a solution to UniCredit.

{% include pattern-figure-cols.html image1="/assets/images/unicredit-content-analysis.jpg" image2="/assets/images/unicredit-content-strategy.jpg" alt="Analysis of the current landing pages structure vs. Content strategy proposed" caption="Analysis of the current landing pages structure (first) vs. Content strategy proposed (second)" width="1004" height="1200" %}

## Wireframes

Thanks to UI Farm’s responsive framework[^uifarm-workflow], I prototyped the pages directly in the browser.

{% include pattern-figure-cols.html image1="/assets/images/unicredit-feature-block_mobile.png" image2="/assets/images/unicredit-freenumber_mobile.png" alt="Details of the landing pages mobile wireframes" caption="Details of the landing pages  wireframes: mobile" width="1137" height="1273" %}

- Each feature block is **conditionally loaded**: their content is served upon tapping the accordion. The same goes for the legal message at the bottom of the page.
- The free number button initiates a phone call to the support team, thanks to **adaptive capabilities** of the framework.

{% include pattern-figure.html image="/assets/images/uc-landing-desktop-wireframes-top.png" caption="Details of the landing page wireframes: desktop" width="1024" height="600" %}

{% include pattern-figure.html image="/assets/images/uc-landing-desktop-wireframes-bottom.png" caption="Details of the landing page wireframes: desktop" width="1024" height="600" %}

## Interactive header

My colleagues and I felt that having the Calls to Actions repeated at the end of each product feature wasn’t the best output. Instead, we went for a dynamic solution: an **interactive header** where the Calls to Actions switched to the Free number button if the former were already visible in the screen.

{% include pattern-figure-cols.html image1="/assets/images/unicredit-ctas-mobile.jpg" image2="/assets/images/unicredit-freenumber-mobile.jpg" alt="Dynamic sticky header on mobile" caption="Dynamic sticky header: mobile" width="487" height="1000" %}

## Forms

When users click on the Call to Action _Request it online_, they land on the UniCredit acquisition forms. From there, they are guided through a four-step procedure.

### Entry point

Users encounter an initial brief form — serving as a security verification — and will receive an email from UniCredit with a link to continue with the request.

{% include pattern-figure.html image="/assets/images/unicredit-forms-flow_1.jpg" caption="Form flow, entry point" width="2560" height="947" %}

### Form flow

Users click on the link received via email and start the request process.

{% include pattern-figure.html image="/assets/images/unicredit-forms-flow_2.jpg" caption="Form flow" width="2560" height="820" %}

### Wireframes

We applied the same principles — conditionally loaded elements, ability to call the support from mobile. Of great importance is the the lock icon at the top right: together with the browser icon for secure connections, it reassures users this is a safe procedure.

{% include pattern-figure-cols.html image1="/assets/images/unicredit-forms-wireframes-mobile-1.jpg" image2="/assets/images/unicredit-forms-wireframes-mobile-2.jpg" alt="Details of the forms wireframes, mobile" caption="Details of the forms wireframes: mobile" width="800" height="1224" %}

## Final result

Having started the wireframing phase in the browser meant that, once the client was happy with the result, I could work on the visual design directly in HTML and CSS. Using <abbr title="Syntactically Awesome Style Sheets">SASS</abbr>, I could **rapidly create reusable elements** — such as brand colours, typography, buttons and content modules — using variables, mixins and patterns. My colleagues could simultaneously work on the functionality.

UniCredit had live access to the prototype. They interacted with us *in real time*, commenting on the progress through a JIRA board. We delivered a landing page for each product, a generic template and a detailed style guide. At this stage, a third party started the testing phase.

### Landing pages

{% include pattern-figure.html image="/assets/images/unicredit-landingpages-final.jpg" caption="Landing pages final design" width="1200" height="548" %}

### Forms

{% include pattern-figure.html image="/assets/images/unicredit-forms-final.jpg" caption="Forms final design" width="1200" height="548" %}

## Conclusions

The landing pages had been received well and **boosted conversions**. However, the number of people using the online forms didn’t increase significantly. While the landing pages redesign received the go-ahead, the forms didn’t. In fact, the shift toward mobile and online services happened gradually during the following years[^growing-users].

This project proved how important culture is when designing. Getting to know **the context of use**, how a population responds to changes and the reasons behind behaviours is paramount to avoid costly mistakes.

## Client review

> UI Farm’s innovative workflow and unique skills has given us a very clear insight into our customers’ behaviour and preferences, which has considerably boosted our account application conversions. Thanks to UI Farm’s approach, we have been able to significantly improve the experience delivered to our customers and prospects, and make changes that may have seemed minor to us but have resulted in significant conversion lifts. UI Farm has truly changed our approach to Interaction Design.
>
> <cite>Gabriele Rosati, Head of Interaction Design at UniCredit.</cite>

## Contact

<a href="mailto:contacts@silviamaggidesign.com" title="Email me">Get in touch</a> to talk about your next project.

## Footnotes

[^smartphone-habits]: "*In 2013, only 37% of users used their smartphones to go online, while 84% declared to have such a habit in 2017. [...] Between 2013 and 2018, purchases via smartphone increased from barely 6% to over 26% of total online purchase in Italy.*" — **Source**: Statista Research Department [<a href="https://www.statista.com/statistics/800840/smartphone-and-internet-usage-in-italy/" title="Go to the statistics page">1</a> and <a href="https://www.statista.com/statistics/579435/incidence-rate-of-mobile-devices-on-online-purchases-by-type-in-italy/" title="Go to the statistics page">2</a>]

[^growing-users]: "*The number of users of banking services such as home and corporate banking steadily increased, growing from approximately 30.4 million in 2010 to nearly 58 million in 2019.*" — **Source**: <a href="https://www.statista.com/statistics/737981/number-of-home-and-corporate-banking-users-in-italy/" title="Go to the statistics page">Statista Research Department</a>

[^uifarm-workflow]: Read about [UI Farm’s workflow for the multi-device Web](https://medium.com/ui-farm/how-we-work-a-modern-workflow-for-the-multi-device-web-4e0dcb081b5b){:title="Read the article on Medium"}