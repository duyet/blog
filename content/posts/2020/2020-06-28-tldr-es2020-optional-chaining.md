---
template: post
title: "TL;DR - ES2020: Optional chaining"
date: '2020-06-28T00:00:00.000+07:00'
author: Van-Duyet Le
category: Web
tags:
- Web
- TLDR
thumbnail: https://2.bp.blogspot.com/-ntckEWZo28E/Xvi42BQDLMI/AAAAAAABehk/OoJ9GByskEEGpcDlLZuwn0tMjTmqMikWQCK4BGAYYCw/s1600/Screen%2BShot%2B2020-06-28%2Bat%2B22.35.12.png
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