---
title: Why I Replaced Disqus and You Should Too
date: "2019-04-01T12:00:00.000Z"
dateModified: "2019-06-14T12:00:00.000Z"
template: "post"
draft: false
slug: "/blog/replacing-disqus/"
img: "https://victorzhou.com/media/commento-post/migration.png"
category: "Web Development"
tags:
  - "Web Development"
  - "Performance"
  - "Best Practices"
description: How switching from Disqus to Commento reduced my page weight by 90%.
prev: "/blog/properly-size-images/"
next: "/blog/mailchimp-to-sendy/"
discussLinkTwitter: https://twitter.com/victorczhou/status/1112797222486401024
discussLinkHN: https://news.ycombinator.com/item?id=19555665
discussLinkReddit: https://www.reddit.com/r/programming/comments/b9022a/switching_off_of_disqus_reduced_my_page_weight_by/
---

![](./media-link/commento-post/migration-small.png)

When I started this blog, I used [Disqus](https://disqus.com/) for comments on posts. This was a natural choice: I'd seen sites use Disqus all over the internet, it was easy to setup, and they had a free tier. I happily integrated Disqus and moved on.

Here's the thing: I've always known that using Disqus came at the cost of some page bloat. I've [written about web performance](/blog/properly-size-images/) before and generally strive to make my pages fast, but I just assumed having Disqus was worth the bit of extra weight. My logic: <span class="emph-special">If Disqus were really so bloated, everyone would've migrated away from them by now. Surely Disqus prioritizes keeping their payload reasonably small, right? </span>

**I was wrong**. Last week, I finally did what I should've done at the beginning: benchmark it myself. Here are my results (benchmarked on [my Webpack post](/blog/why-you-should-use-webpack/)):

<img src="/media/commento-post/requests1.png" style="width: 600px;" />
<img src="/media/commento-post/size1.png" style="width: 600px;" />

**Adding Disqus increased my page weight by over 10x and my request count by over 6x**. That's ridiculous! I immediately started looking to replace Disqus - [web performance is important](https://developers.google.com/web/fundamentals/performance/why-performance-matters/).

## An Alternative: Commento

> Disclaimer: I am not being compensated for this post, nor am I affiliated with Commento in anyway. I'm simply a satisfied customer.

A while back, I saw a [Hacker News](https://news.ycombinator.com/item?id=19210697) post about a fast, privacy-focused alternative to Disqus called [Commento](https://commento.io/). Having learned my lesson, I benchmarked Commento before committing to it:

<img src="/media/commento-post/requests2.png" style="width: 600px;" />
<img src="/media/commento-post/size2.png" style="width: 600px;" />

What a difference. **Commento is _orders of magnitude_ lighter than Disqus**.

It gets even better. Here are more reasons I was sold on Commento:

- It's [open source](https://gitlab.com/commento) and can be self-hosted.
- It's [privacy focused](https://commento.io/privacy) - it doesn't sell user data and tries to collect as little as possible. This is especially nice given that my blog's audience is probably more privacy-conscious than the average internet user.
- You can [pay what you want](https://commento.io/pricing). Disqus's free tier is ad-supported, and its cheapest paid tier is $9/month. Commento is actually cheaper (if you want it to be)!
- It's [configurable](https://docs.commento.io/configuration/frontend/). If you scroll down to the comments of this post, you'll see that the styling of the Commento integration matches the styling of the rest of the site.
- It has an **Import from Disqus** tool that's easy to use. I was able to quickly migrate all of my old Disqus comments to Commento.

Commento works great for me, but I'm not trying to say it's the right solution for everyone - there are several good, _lightweight_ commenting platforms out there.

**Are you still using Disqus?** Did you know how much bloat it adds to your page? What's keeping you from switching?
