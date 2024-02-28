---
title: "Silvia Maggi Design Website"
date: '2022-03-21'
last_modified_at: '2023-09-12 17:18:01'
featured-post: false
popular-post: true
categories:
  - Projects
tags:
  - html
  - css
  - sass
  - jekyll
  - liquid
  - markdown
  - git
  - sublime text
  - sketch app
  - figma
  - netlify
  - microformats
  - webmentions 
description: "I redesigned and built my personal website from scratch following the need to have a customisable, flexible site to contain my work, interests and passions."
excerpt: "I redesigned and built my personal website from scratch following the increasing need to have an easier to customise, flexible site to contain my work, interests and passions. As sustainability is a core concern, total control over code and design was the main requirement."
featuredimage: true
featimage-alt: "Silvia Maggi Design website case study"
featimage-class: 'u-featured'
featimage: 'feat-brand-new-website'
---
## Philosophy
Ever since the early 2000s, I’ve been maintaining websites and blogs. I used to design and develop them until it felt like a massive task. Thus, I started to use WordPress, learning to build and edit themes. During the following years, WordPress became a widespread <abbr title="Content Management System">CMS</abbr> allowing people to manage their own content. Deep customisation and vetting every plug-in in use require significant time and effort: this became problematic for me.

[The website obesity crisis](https://idlewords.com/talks/website_obesity.htm){: title="Read the transcript or watch the talk Maciej Cegłowski gave in Sydney in 2015"} is an increasing phenomena which gets worse every year[^total-kilobytes]. I wanted my website to **represent a stance on sustainability**.

## Content first
[Simone](https://minutestomidnight.co.uk/) and I moved *Silvia Maggi Design* from WordPress to [Jekyll](https://jekyllrb.com/){: title="Visit the website of Jekyll"}, with hosting on [Netlify](https://www.netlify.com/){: title="Visit the Netlify website"}. Using [Liquid](https://shopify.github.io/liquid/){: title="Check the Liquid language documentation"} template language and [Markdown](https://daringfireball.net/projects/markdown/){: title="Learn more about Markdown"} for posts and pages meant that the content needed reworking. I revisited every post, photo and case study to keep what made sense and rewrite what wasn't good enough.

## Information architecture
Since Jekyll is a blog-aware [static site generator](https://jamstack.org/generators/){: title="Visit the Jamstack website"}, it doesn't rely on a database to dynamically generate pages. Provided with an opportunity to optimise the site's information architecture — I had `303` tags, most of which barely used — I worked to achieve a slimmer and less dispersive [archive](/archive/){: title="Browse my website's archive"}.

### No hamburger menu
There is strong evidence that a hidden navigation significantly **decreases user experience both on mobile and desktop**[^hamburger-menus], therefore I decided to avoid using the infamous hamburger icon, both on mobile and desktop. To do so, I kept the main navigation as uncomplicated as possible, assigning less relevant sections to the footer menu.

With phones sizes ever increasing[^bottom-navigation], I opted to position the main navigation at the bottom on mobile.

{% include pattern-figure.html image="/assets/images/smd-mobile-menu.jpg" alt="A screenshot of this website's homepage showing the bottom main navigation" caption="The navigation on mobile" width="388" height="760" %}

## Layouts
Building static websites doesn't mean doing everything manually. Liquid uses a combination of objects, tags and filters inside template files called _layouts_ to **display dynamic content**. The language was new to me, but the learning curve wasn't so steep because of my experience working with PHP.

## Collections
Everything that is not a blog post is organised in collections. It's a neat way to group related content and keep it organised. Each item in a collection is iterated on a page that outputs its content.
Currently, they are:

- [Projects](/work/){: title="Visit my projects page"}
- [Newsletter archive](/newsletter/){: title="Visit my newsletter archive page"}

## Design
We chose [Bootstrap 5](https://getbootstrap.com/){: title= "Visit the Bootstrap 5 website"} to speed up the creation of grids and other features, building my theme on top of it. Using utility-first CSS[^utility-first] helped us decouple stylesheets from markup. Along with a customised inclusion of Bootstrap's SASS source files, it helped keep the final CSS light and efficient.

For typography, I use two local custom fonts for the headings, strictly **avoiding calls to third-party sites**. The rest adopts a system font stack.

I refreshed logo and styling as well, using muted nature-inspired colours and graphic elements that align with my passion for drawing and watercolours. 

### SVGs
Interface images, the logo and all the icons are inline SVGs. When not possible, we call for an aggressively optimised PNG. This choice **contributes to the website performance**.

## Accessibility
I took care of all the details that make a site compliant with the basic WCAG rules. A test with [WAVE](https://wave.webaim.org/report#/https://silviamaggidesign.com/ "Check the test result on WAVE") didn’t reveal any problematic issue.

I checked the colour contrast of elements, the legibility of text, and took care of *alternate description* for links and images. The automatic test that WAVE performs assured me I did a good job.

Yet, no tool can reliably substitute a manual test. That is, navigating a site using assistive technologies available to everyone.

As I took a closer look to the WCAG 2.1 success criteria, and recently enrolled in the [Web Accessibility course on Udacity](https://www.udacity.com/course/web-accessibility--ud891 "Visit the course page"), I decided to take a step-by-step approach to make my website entirely compliant.

Continue reading on [the first of a series of posts where I explain the changes I’m making and why](https://silviamaggidesign.com/accessibility/making-website-accessible-1/).

## Responsive images and photo galleries
Over the years, I published many pictures on social networks and  previous blogs. After [quitting social media](https://silviamaggidesign.com/personal/life-off-social-media/){: title="Read what happened after I quit social media"}, the website needed to become the centre of my virtual life and the place from where to publish elsewhere.

Whereas I previously didn't invest much time thinking about images before publishing, now I have **workflows to make sure they're optimised** and within specific dimensions. Jekyll's responsive images plugin automatically generates different versions of the photos I include, based on the viewport of multiple devices. Despite the amount of pictures published, the website performance is stellar, both on mobile and desktop.

Simone created an [image gallery carousel in pure HTML and CSS](https://simonesilvestroni.com/project-responsive-photogallery-carousel/){: title="Read Simone's case study"}, featuring intuitive controls for mobile devices, along with responsive images. The gallery is now a module ready to be implemented.

## Search

An important feature is the ability to search within the website. To implement it we used [vanilla Javascript](https://github.com/daviddarnes/jekyll-search-js){: title="Check the script on Github"}. We also provide an accessible no-script alternative which relies on DuckDuckGo, presenting the results in a new browser tab.

## SEO
Taking care of the SEO was straightforward. It needed a combination of good practises set up once:

- looking for [canonical URLs](https://en.wikipedia.org/wiki/Canonical_link_element){: title="Visit the Wikipedia page on canonical link elements"};
- taking description and title from the [Front Matter](https://jekyllrb.com/docs/front-matter/){: title="Learn about it on Jekyll's website"} of posts and pages;
- implementing [Open graph](https://ogp.me/){: title="Visit the Open graph website"} for rich content display when links are shared on other websites such as social media or instant messengers;
- adding a correct structured data content following [schema](https://schema.org/docs/documents.html){: title="Visit the Schema website"} guidelines.

Google Lighthouse gives a `100` result on SEO, with all 15 audits fully passed.

## Results

### Benchmarks

{: .table .table-striped .fs-4 }
| **Markup** | **Google score** | **Speed index** | **Homepage weight** |
|:-:| |:-:| |:-:| |:-:|
| ✅ [valid](https://validator.w3.org/nu/?doc=https://silviamaggidesign.com/) | **[`100`](https://pagespeed.web.dev/report?url=https%3A%2F%2Fsilviamaggidesign.com%2F)** | **`0.5 sec`** | **`250 kb`** |

### Sustainability

Only `0.06g of CO2` is produced every time someone visits the homepage. Cleaner than `94%` of [web pages tested](https://www.websitecarbon.com/website/silviamaggidesign-com/ "Visit Website carbon"). The website is running on sustainable energy.

{: .detached }
Due to the site compact size, it’s member of: [![512kb Blue Team](/assets/images/blue-team.svg)](https://512kb.club/#512)

## Further reading

- [How I am making my website accessible — Part 1](https://silviamaggidesign.com/accessibility/making-website-accessible-1/ "Read the blog post")
- [How I am making my website accessible — Part 2](https://silviamaggidesign.com/accessibility/making-website-accessible-2/ "Read the blog post")

---

[^total-kilobytes]: [https://httparchive.org/reports/state-of-the-web#bytesTotal](https://httparchive.org/reports/state-of-the-web#bytesTotal){: title="See the report on HTTP Archive"}
[^hamburger-menus]: [https://www.nngroup.com/articles/hamburger-menus/](https://www.nngroup.com/articles/hamburger-menus/){: title="Read the article on NN/g"}
[^bottom-navigation]: [https://www.smashingmagazine.com/2019/08/bottom-navigation-pattern-mobile-web-pages/](https://www.smashingmagazine.com/2019/08/bottom-navigation-pattern-mobile-web-pages/){: title="Read the article on Smashing Magazine"}
[^utility-first]: [https://adamwathan.me/css-utility-classes-and-separation-of-concerns/](https://adamwathan.me/css-utility-classes-and-separation-of-concerns/){: title="Read Adam Wathan's article on Medium"}