---
title: Making my website accessible – Part 1
date: '2022-09-15 13:23:08'
last_modified_at: '2024-02-28 16:54:08'
featured-post: false
popular-post: true
categories:
  - Accessibility
tags:
  - wcag
  - w3c
  - accessibility
description: "As I took a closer look to the WCAG 2.1 success criteria, I decided to take a step-by-step approach to make my website entirely compliant. First of a series."
excerpt: "As I took a closer look to the WCAG 2.1 success criteria, I decided to take a step-by-step approach to make my website entirely compliant. First post of a series."
---
When [I designed and developed my new website]({{ site.url }}/design/brand-new-website/ "Read the launch blog post"),  I took care of all the details that make a site compliant with the basic WCAG rules. A test with [WAVE](https://wave.webaim.org/report#/https://silviamaggidesign.com/ "Check the test result on WAVE") didn’t reveal any problematic issue.

I checked the colour contrast of elements, the legibility of text, and took care of *alternate description* for links and images. The automatic test that WAVE performs assured me I did a good job.

Yet, no tool can reliably substitute a manual test. That is, navigating a site using assistive technologies available to everyone.

As I took a closer look to the WCAG 2.1 success criteria, and recently enrolled in the [Web Accessibility course on Udacity](https://www.udacity.com/course/web-accessibility--ud891 "Visit the course page"), I decided to take a step-by-step approach to make my website entirely compliant.

This is the first of a series of posts where I explain the changes I’m making and why.

## Button vs link

There used to be three buttons on my website: 

- *Buy me a coffee*, at the end of blog posts.
- *Back to Top* in the footer.
- *Submit* in the newsletter form.

Of the three, only one is semantically a button. The others were links dressed as buttons. It bothers me that I didn’t question the suggestions made by frameworks such as Bootstrap, despite knowing the difference between the two control elements.

### WCAG Requirement

[Deque University’s checklist of accessibility techniques for links](https://dequeuniversity.com/checklists/web/links) lists the following best practice: 

[...] Links SHOULD be used only for actions that take the user to other locations, and SHOULD NOT be used for button-like functionality.
- **Note 1:** "Other locations" means other web pages, or to other locations in the same web page. Typically, the URL will change after activating a link.                
- **Note 2:** "Button-like functionality" means scripted features, including submitting forms.

### Results

*Buy me a coffee* now looks like a link. I also deleted the coffee cup emoji because it didn’t add any value. 

*Back to top* now looks like a link. This element could have been a button, if I had added a script to it. Because my website uses Javascript only where strictly necessary, I opted not to.

### Useful resource

🔗 [Button versus link](https://a11y-101.com/design/button-vs-link) on A11y-101.

## Accessible forms

The previous newsletter subscription form was too minimalistic. It presented an input field containing a placeholder and a button. However, a placeholder is no substitute for a label and its use is aggravated by the fact that it disappears as soon as people start writing into it.

### WCAG Requirements

- [**1.3.1** Info and Relationships:](https://www.w3.org/WAI/WCAG21/quickref/#qr-content-structure-separation-programmatic) Information, structure, and relationships conveyed through presentation can be programmatically determined or are available in text. (Level A)
- [**2.4.6** Headings and Labels:](https://www.w3.org/WAI/WCAG21/quickref/#qr-navigation-mechanisms-descriptive) Headings and labels describe topic or purpose. (Level AA)
- [**4.1.2** Name, Role, Value:](https://www.w3.org/WAI/WCAG21/quickref/#qr-ensure-compat-rsv) For all user interface components (including but not limited to: form  elements, links and components generated by scripts), the name and role can be programmatically determined; states, properties, and values that can be set by the user can be programmatically set; and notification of  changes to these items is available to user agents, including assistive  technologies. (Level A)

### Result

To increase understandability and operability of the form, I added a label and deleted the redundant placeholder. 

### Useful resource

🔗 [Labeling Controls](https://www.w3.org/WAI/tutorials/forms/labels/ "Read the tutorial") on W3C WAI.

## Legibility

Line length is an important parameter to take into account when designing a website. Make it too short, and the text is fragmented into small groups; make it too long, and you’ll have to turn your head from side to side to read it. 

Finding a comfortable line length is important for everyone, especially for people with reading difficulty.

### WCAG Requirements

[**1.4.8** Visual Presentation](https://www.w3.org/WAI/WCAG21/quickref/#visual-presentation):  For the visual presentation of blocks of text, a mechanism is available to achieve the following:

1. Foreground and background colors can be selected by the user.
2. Width is no more than 80 characters or glyphs (40 if CJK).
3. Text is not justified (aligned to both the left and the right margins).
4. Line spacing (leading) is at least space-and-a-half within paragraphs, and  paragraph spacing is at least 1.5 times larger than the line spacing.
5. Text can be resized without assistive technology up to 200 percent in a way  that does not require the user to scroll horizontally to read a line of  text on a full-screen window. (Level AAA).

### Results

I reduced the max-width of the main container to make sure that block of texts are never longer than 80 characters. Also, text is now left aligned, and paragraphs behave normally: there is space before and after.

## Read further

- [Making my website accessible — Part 2]({{ site.url }}/accessibility/making-website-accessible-2/)