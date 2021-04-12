---
title: Call for papers
tags:
  - nav
navtitle: Call for papers
date: 2021-03-06
permalink: /call-for-papers/index.html
metaTitle: Frontend 2021 Call For Papers
metaDesc: FEDSA front-end conference 2021
socialImage: /static/images/feconf-logo.png
---

<p>Submit your proposal below.</p>

<form name="paper-submission" method="POST" action="/success/" netlify data-netlify="true" netlify-honeypot="bot-field" class="grid join-form">
  <p class="is-hidden">
    <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
  </p>
  <p><small>All fields are required</small></p>
  <p>
    <label for="name">Full name</label>
    <input class="text-input" type="text" name="name" id="name" autocomplete="name" placeholder="Your full name" title="Please enter your name" required>
  </p>
  <p>
    <label for="email">Email</label>
    <input class="text-input" type="email" name="email" id="email" autocomplete="email" placeholder="Your email address" title="The domain portion of the email address is invalid (the portion after the @)." pattern="^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*(\.\w{2,})+$" required>
  </p>
  <p>
    <label for="message">Abstract</label>
    <textarea class="text-input" name="message" id="message" placeholder="Write your abstract here" rows="7"></textarea>
  </p>
  <p>
    <button type="submit" name="submit" class="btn--primary">Submit</button>
  </p>  
</form>

