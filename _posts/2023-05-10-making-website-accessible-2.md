---
title: Making my website accessible — Part 2
date: '2023-05-10 10:44:24'
last_modified_at: '2023-05-10 11:36:37'
featured-post: false
categories:
  - Accessibility
tags:
  - WCAG
  - W3C
  - accessibility
description: "Second post of a series where I explain the steps I’m taking to make my website accessible."
excerpt: "Second post of a series where I explain the steps I’m taking to make my website accessible."
---
In September last year, having closely studied the WCAG 2.1 success criteria, I decided to examine my own website before assessing the accessibility of other websites.

I finally have had some time to continue the improvements after so many months. In the meantime, I went on with my studies, performed accessibility assessments for UniCredit and provided design guidance on how to comply with WCAG 2.1.

## Bypass block

A bypass block is a link that allows people to skip the repetitive parts of a website and go directly to its content. My website has always had a *Skip to content* link, but it wasn’t visible.

### WCAG Requirement

- [**2.4.1** Bypass Blocks:](https://www.w3.org/WAI/WCAG21/Understanding/bypass-blocks.html) A mechanism is available to bypass blocks of content that are repeated on multiple Web pages. (Level A)
- [**Technique G1** Adding a link at the top of each page that goes directly to the main content area](https://www.w3.org/WAI/WCAG21/Techniques/general/G1). Procedure: 
  + Check that a link is the first focusable control on the Web page.
  + Check that the description of the link communicates that it links to the main content.
  + Check that the link is either always visible or visible when it has keyboard focus.
  + Check that activating the link moves the focus to the main content.
  + Check that after activating the link, the keyboard focus has moved to the main content.

### Results

Using a keyboard, press the <code>TAB</code> key. The *Skip to content* link will appear. Press <code>Enter</code>, then <code>TAB</code> again: the first link within the main content of the page will be in focus — while bypassing the main navigation.

## Focus order

When using a keyboard to navigate my website, a bunch of links took up focus, yet they were not displayed on screen. These links are machine readable, and used for identification on the internet, but got in the way of the proper focus order because of how I had previously implemented them.

### WCAG Requirement

- [**2.4.3** Focus Order:](https://www.w3.org/WAI/WCAG21/Understanding/focus-order.html) If a Web page can be navigated sequentially and the navigation sequences affect meaning or operation, focusable components receive focus in an order that preserves meaning and operability. (Level A)

### Results

I have changed the implementation of those links, which are not links anymore. Now the pages are navigable in a logical and meaningful way. What’s on the screen matches what assistive technology read.

## Focus visible

Modern browsers should provide a default outline to visually indicate an interactive element. Yet, most of them would only activate it when people use keyboard navigation. Styling the link focus is a good idea as it helps operating the page and discovering where the focus is located.

### WCAG Requirement

- [**2.4.7** Focus Visible:](https://www.w3.org/WAI/WCAG21/Understanding/focus-visible.html) Any keyboard operable user interface has a mode of operation where the keyboard focus indicator is visible. (Level AA)

### Results

A dotted outline is now visible around links that take focus, both when using a keyboard and a pointer. 

## Read further

- [Making my website accessible — Part 1](https://silviamaggidesign.com/accessibility/making-website-accessible-1/)
