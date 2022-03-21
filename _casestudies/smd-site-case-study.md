---
layout: post
title: 'Silvia Maggi Design website'
date: 2022-03-21
last_modified_at: '2022-03-21 17:07:18'
featured-post: false
type: 'Web design'
description: 'I redesigned and built my personal website from scratch following the need to have an easier to customise, flexible site to contain my work, interests and passions.'
excerpt: 'I redesigned and built my personal website from scratch following the need to have an easier to customise, flexible site to contain my work, interests and passions.'
featured-image: feat-brand-new-website.jpg
featured-image-alt: Silvia Maggi Design website case study
gallery: false
caption: true
year: 
  - 2021
skills:
  - HTML
  - SASS
  - Jekyll
  - Liquid
  - Markdown
  - Bootstrap 5
  - Git
tools:
  - Sublime Text
  - Sketch app
  - Figma
---
{: .lead}
I redesigned and built my personal website from scratch following the increasing need to have an easier to customise, flexible site to contain my work, interests and passions. As sustainability is a core concern, *total control over code and design* was the main requirement.

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

- [Work](/silvia-maggi-portfolio/){: title="Visit my portfolio page"}
- [Newsletter archive](/newsletter/archive/){: title="Visit my newsletter archive page"}
- [Jeremy Bearimy](/jeremybearimy/){: title="Visit the special section 'Jeremy Bearimy'"}

## SEO
Taking care of the SEO was straightforward. It needed a combination of good practises set up once:

- looking for [canonical URLs](https://en.wikipedia.org/wiki/Canonical_link_element){: title="Visit the Wikipedia page on canonical link elements"};
- taking description and title from the [Front Matter](https://jekyllrb.com/docs/front-matter/){: title="Learn about it on Jekyll's website"} of posts and pages;
- implementing [Open graph](https://ogp.me/){: title="Visit the Open graph website"} for rich content display when links are shared on other websites such as social media or instant messengers;
- adding a correct structured data content following [schema](https://schema.org/docs/documents.html){: title="Visit the Schema website"} guidelines.

Google Lighthouse gives a `100` result on SEO, with all 15 audits fully passed.

## Design
We chose [Bootstrap 5](https://getbootstrap.com/){: title= "Visit the Bootstrap 5 website"} to speed up the creation of grids and other features, building my theme on top of it. Using utility-first CSS[^utility-first] helped us decouple stylesheets from markup. Along with a customised inclusion of Bootstrap's SASS source files, it helped keep the final CSS light and efficient.

For typography, I use two local custom fonts for the headings, strictly **avoiding calls to third-party sites**. The rest adopts a system font stack.

I refreshed logo and styling as well, using muted nature-inspired colours and graphic elements that align with my passion for drawing and watercolours. 

### SVGs
Interface images, the logo and all the icons are inline SVGs. When not possible, we call for an aggressively optimised PNG. This choice **contributes to the website performance**. 

## Responsive images and photo galleries
Over the years, I published many pictures on social networks and  previous blogs. After [quitting social media](https://silviamaggidesign.com/personal/life-off-social-media/){: title="Read what happened after I quit social media"}, the website needed to become the centre of my virtual life and the place from where to publish elsewhere.

Whereas I previously didn't invest much time thinking about images before publishing, now I have **workflows to make sure they're optimised** and within specific dimensions. Jekyll's responsive images plugin automatically generates different versions of the photos I include, based on the viewport of multiple devices. Despite the amount of pictures published, the website performance is stellar, both on mobile and desktop.

Simone created an [image gallery carousel in pure HTML and CSS](https://minutestomidnight.co.uk/work/web-design/responsive-photogallery-carousel/){: title="Read Simone's case study"}, featuring intuitive controls for mobile devices, along with responsive images. The gallery is now a module ready to be implemented.

## Search

An important feature is the ability to search within the website. To implement it we used [vanilla Javascript](https://github.com/daviddarnes/jekyll-search-js){: title="Check the script on Github"}. We also provide an accessible no-script alternative which relies on DuckDuckGo, presenting the results in a new browser tab.

## Results

### Benchmarks

{: .table .table-striped .fs-4 }
| **Markup** | **Google score** | **Speed index** | **Homepage weight** |
|:-:| |:-:| |:-:| |:-:|
| ✅ [valid](https://validator.w3.org/nu/?doc=https://silviamaggidesign.com/) | **[`100`](https://pagespeed.web.dev/report?url=https%3A%2F%2Fsilviamaggidesign.com%2F)** | **`0.5 sec`** | **`250 kb`** |

### Accessibility

-   ✅ **No errors** for WCAG detected on [WAVE](https://wave.webaim.org/report#/https://silviamaggidesign.com/){: title="Verify the result on WAVE's website"}.
-   ✅ **`100`** on [Google Lighthouse](https://web.dev/measure/){: title="Verify the result on Google Lighthouse"}

### Sustainability

Only `0.20g of CO2` is produced every time someone visits the homepage. Cleaner than `85%` of [web pages tested](https://www.websitecarbon.com/website/silviamaggidesign-com/ "Visit Website carbon"). The website is running on sustainable energy.

{: .detached }
Due to the site compact size, it’s member of: [![512kb Blue Team](/assets/images/blue-team.svg)](https://512kb.club/#512)

## Contact
<a href="mailto:contacts@silviamaggidesign.com" title="Email me">Get in touch</a> to talk about your next project.

## Footnotes
[^total-kilobytes]: [https://httparchive.org/reports/state-of-the-web#bytesTotal](https://httparchive.org/reports/state-of-the-web#bytesTotal){: title="See the report on HTTP Archive"}
[^hamburger-menus]: [https://www.nngroup.com/articles/hamburger-menus/](https://www.nngroup.com/articles/hamburger-menus/){: title="Read the article on NN/g"}
[^bottom-navigation]: [https://www.smashingmagazine.com/2019/08/bottom-navigation-pattern-mobile-web-pages/](https://www.smashingmagazine.com/2019/08/bottom-navigation-pattern-mobile-web-pages/){: title="Read the article on Smashing Magazine"}
[^utility-first]: [https://adamwathan.me/css-utility-classes-and-separation-of-concerns/](https://adamwathan.me/css-utility-classes-and-separation-of-concerns/){: title="Read Adam Wathan's article on Medium"}