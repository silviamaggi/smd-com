---
title: How the Instagram navigation became convoluted
last_modified_at: '2022-04-19 18:15:13'
featured-post: false
popular-post: false
categories:
  - UX
tags:
  - instagram
  - navigation
  - bottom navigation
  - ux
  - design
description: "With the introduction of significant layout changes – the tabs Reel and Shop – the Instagram navigation became convoluted. Let's briefly explore how."
excerpt: 'With the introduction of significant layout changes — the tabs Reel and Shop — the Instagram navigation became convoluted. Let’s briefly explore how.'
image-caption: true
featuredimage: true
featimage-alt: "Spiral staircase"
featimage-class: 'u-featured'
featimage: 'feat-insta-convoluted'
image-caption: true
featimage-caption-desc: 'Photo by <a href="https://unsplash.com/@naletu">Natalya Letunova</a>'
---
## The reason

[Announcing the changes](https://about.instagram.com/blog/announcements/introducing-reels-and-shop-tabs){:title="Read the announcement on Instagram's website"}, Adam Mosseri, Head of Instagram, pointed out how the pandemic changed the way people use the app. Short and entertaining videos became prominent, and people started buying more online. Young people and creators are at the centre of Instagram’s focus, which is the reason behind the positioning of the two new tabs in the bottom navigation.

## The science

For a person holding a phone with one hand, the bottom area is easier to reach with the thumb. Anything at the top, considering the increasing sizes of modern phones, is impossible to touch without readjusting the phone.

{% responsive_image_block %}
  path: assets/images/thumb-zone-mapping-1.jpg
  alt: Two phones side-by-side showing the areas that are most easier and harder to reach with one hand
  caption-true: {{ page.image-caption }}
  caption: Thumb-zone mapping explained by Samantha Ingram
{% endresponsive_image_block %}

{% responsive_image_block %}
  path: assets/images/thumb-zone-mapping-2.jpg
  alt: Two phones side-by-side showing the areas that are most easier and harder to reach with one hand
  caption-true: {{ page.image-caption }}
  caption: New thumb-zone mapping adjusted to larger screen sizes by Arturas Leonovas
{% endresponsive_image_block %}

## The convoluted navigation

### Activity

For the _Reel_ and _Shop_ tabs to be quick and easy to access, _New Post_ and _Activity_ had to be moved to the top of the screen. _New Post_ is on both the home page and profile page, while _Activity_ is only accessible from the home page.

{% include pattern-figure.html image="/assets/images/instagram-feed.jpg" alt="Screenshot of the feed page with the new layout" caption="Instagram home page with the new layout" width="360" height="760" %}

Being able to access _Activity_ exclusively from one page means more taps and more **chances of getting lost or distracted** before reaching it. One could argue that the in-app notifications won’t make you miss a comment or like, but people might wish to easily go back and reply at a later moment. As mentioned earlier, the _Create New_ feature is now at the top. What I find confusing is how the nature of the feature changes based on its position within the app.

### Home

From the home screen, people can create four types of content — _Post_ being the default — by choosing from a sliding menu at the bottom of the page, which I initially didn’t notice: _Post_, _Story_, _Reel_, _Live_.

{% include pattern-figure.html image="/assets/images/instagram-post.jpg" alt="Screenshot of the interface for posting" caption="Posting from the home screen and the four types of content" width="360" height="760" %}

### Profile

From the profile, people can create six types of content: _Feed Post_, _Story_, _Highlight_, _IGTV Video_, _Reel_, _Guide_.

{% include pattern-figure-cols.html image1="/assets/images/instagram-add.jpg" alt1="Screenshot of the profile home page that highlights where to start posting" image2="/assets/images/instagram-post-types.jpg" alt2="Screenshot that shows the six types of content that can be posted" caption="Posting from the profile page and the six types of content" width="360" height="760" %}

## One possible explanation

Instagram may be testing which one of the _similar-but-different_ features performs best. The reason I say this is that the layouts are too different to think they both fit the app. Moreover, it’s good UX practice to test between two solutions. If this is the case, we’ll find out soon.

In the meantime, if you updated the app and felt lost, know that it’s not you. At the moment, the navigation is genuinely convoluted.

## Conclusions

The products we design or use can get complicated over time, mainly when they become established. It happens when users ask for more features or when they change the way they use it. See [Design, Digested 12 – Struggling with growth](/design-digested/social-media-content-moderation/){:title="View the post on my website"}.

Sometimes it happens when the business model changes: if the goal is to keep people engaged — and watching reels and looking for things to buy do it — then these actions need to take priority on the screen.

## Useful links

<ul class="smd-ul">
<li><a href="https://www.smashingmagazine.com/2016/09/the-thumb-zone-designing-for-mobile-users/">The Thumb Zone: Designing For Mobile Users by Samantha Ingram</a> (on Smashing Magazine)</li>
<li><a href="https://www.smashingmagazine.com/2019/08/bottom-navigation-pattern-mobile-web-pages/">Bottom Navigation Pattern On Mobile Web Pages: A Better Alternative? by Arturas Leonovas</a> (on Smashing Magazine)</li>
<li><a href="https://www.nngroup.com/articles/mobile-navigation-patterns/">Basic Patterns for Mobile Navigation: A Primer</a> (on NNg)</li>
<li><a href="https://uxplanet.org/perfect-bottom-navigation-for-mobile-app-effabbb98c0f">UX Design for Mobile: Bottom Navigation</a> (on Medium)</li>
</ul>

<!-- <small>Photo by [Lalo Hernandez](https://unsplash.com/photos/r34cKhbEDCU) on Unsplash</small> -->
