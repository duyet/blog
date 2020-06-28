---
template: post
title: "TL;DR - ES2020: Optional chaining"
date: '2020-06-28T00:00:00.000+07:00'
author: Van-Duyet Le
category: Web
tags:
- Web
- TLDR
thumbnail: http://1.bp.blogspot.com/-0uJZiq_h-Sg/XviyPAUa8GI/AAAAAAABehY/nJ0Zx-PRqDAr4rpQBV_uTNnr-TzU3zk2gCK4BGAYYCw/s1600/optional-chaining.png
slug: /2020/06/tldr-es2020-optional-chaining.html
draft: false
description: Long chains of property accesses in JavaScript can be error-prone, as any of them might evaluate to null or undefined (also known as "nullish" values). Some other languages offer an elegant solution to this problem with using a feature called "optional chaining".
fbCommentUrl: none
---

![](../../media/2020/optional-chaining/optional-chaining.png)


Long chains of property accesses in JavaScript can be error-prone, as any of them might evaluate to null or undefined (also known as "nullish" values). Some other languages offer an elegant solution to this problem with using a feature called "optional chaining".

Optional chaining syntax allows you to access deeply nested object properties without worrying if the property exists or not. If it exists, great! If not, undefined will be returned.




Before:
```js
const nameLength =
  (db
    ? (db.user
      ? (db.user.name
        ? db.user.name.length
        : undefined)
      : undefined)
    : undefined);
```

After:
```js
const nameLength = db?.user?.name?.length;
```

# References
 - https://github.com/tc39/proposal-optional-chaining
 - https://v8.dev/features/optional-chaining