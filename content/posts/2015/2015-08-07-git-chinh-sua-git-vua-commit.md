---
template: post
title: Git - Chỉnh sửa git vừa commit
date: '2015-08-07T22:14:00.000+07:00'
author: Van-Duyet Le
tags:
- Git
- git commit
modified_time: '2015-08-07T22:14:16.153+07:00'
blogger_id: tag:blogger.com,1999:blog-3454518094181460838.post-1552016978334911994
blogger_orig_url: https://blog.duyet.net/2015/08/git-chinh-sua-git-vua-commit.html
slug: /2015/08/git-chinh-sua-git-vua-commit.html
category: Git
description: Một khi git đã được commit, bạn nhận ra bạn commit thiếu file, muốn chỉnh sửa lại commit message
fbCommentUrl: none

---

Một khi git đã được commit, bạn nhận ra bạn commit thiếu file, muốn chỉnh sửa lại commit message. Cách thêm option `--amend` sau sẽ giúp được bạn.

Option `--amend` của git commit cho phép bạn ghi đè lại commit mới nhất.

```
lvduit@lvduit:~/project/x/(master)$ git commit --amend
```

Lúc này git sẽ cho phép bạn viết lại commit message. Cách này hay dùng khi muốn sửa commit message. 
Nếu bạn chỉ muốn add thêm file mà không muốn sửa commit message thì có thể dùng option `--no-edit`

```
# Đây là commit sai / thiếu
lvduit@lvduit:~$ git add helper.js
lvduit@lvduit:~$ git commit -m 'Add Helper module'

# Nhận ra là add thiếu file và muốn thêm vào commit bên trên
lvduit@lvduit:~$ git add model.js
lvduit@lvduit:~$ git commit --amend --no-edit

```
