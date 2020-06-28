---
template: post
title: "TL;DR - ES2020: Nullish Coalescing"
date: '2020-06-28T00:00:00.000+07:00'
author: Van-Duyet Le
category: Web
tags:
- Web
- TLDR
thumbnail: http://4.bp.blogspot.com/-b54bg3pE-E0/XviwZRPIKBI/AAAAAAABehM/drqV5ujHAgQGUKj6QIwUvy4BN-fs7jGmwCK4BGAYYCw/s1600/nullish-js.png
slug: /2020/06/tldr-es2020-nullish-coalescing.html
draft: false
description: Nullish coalescing (??) adds the ability to truly check nullish values instead of falsey values.
fbCommentUrl: none
---

![](../../media/2020/nullish-coalescing/nullish-coalescing.png)


The [nullish coalescing proposal](https://github.com/tc39/proposal-nullish-coalescing/) (`??`) adds a new short-circuiting operator meant to handle default values.


The nullish coalescing operator (`??`) acts very similar to the `||` operator, except that we don’t use *"truthy"* when evaluating the operator. Instead we use the definition of *"nullish"*, meaning "is the value strictly equal to null or undefined". So imagine the expression `lhs ?? rhs`: if `lhs` is not nullish, it evaluates to `lhs`. Otherwise, it evaluates to rhs.

```js
false ?? true;   // => false
0 ?? 1;          // => 0
'' ?? 'default'; // => ''

null ?? [];      // => []
undefined ?? []; // => []
```


# References
 - https://github.com/tc39/proposal-nullish-coalescing/
 - https://v8.dev/features/nullish-coalescing