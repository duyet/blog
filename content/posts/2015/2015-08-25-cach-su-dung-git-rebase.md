---
template: post
title: Git - Cách sử dụng git rebase, cách gộp nhiều commit bằng rebase
date: '2015-08-25T23:28:00.001+07:00'
author: Van-Duyet Le
tags:
- Git
- Thủ thuật Git
modified_time: '2015-08-25T23:28:08.793+07:00'
blogger_id: tag:blogger.com,1999:blog-3454518094181460838.post-1357161151212518621
blogger_orig_url: https://blog.duyet.net/2015/08/cach-su-dung-git-rebase.html
slug: /2015/08/cach-su-dung-git-rebase.html
category: Git
description: 'Trong dự án, code của bạn luôn có sự thay đổi, sau khi push 1 đống commit lên github. Một ngày kia ông Leader kêu lại: "Ê mày, sửa chỗ này, sửa chỗ kia, code không đúng chuẩn rồi, bla bla ...". Thế là phải hồi hì hục cải tiến code, coding style cho "chuẩn".'
---

Trong dự án, code của bạn luôn có sự thay đổi, sau khi push 1 đống commit lên github. Một ngày kia ông Leader kêu lại: "Ê mày, sửa chỗ này, sửa chỗ kia, code không đúng chuẩn rồi, bla bla ...". Thế là phải hồi hì hục cải tiến code, coding style cho "chuẩn".
Sau khi chỉnh sửa phần này code của bạn lại được commit lên Github. Khi đó trên github của bạn sẽ có nhiêu commit trên 1 requets vì vậy bạn phải gộp  các commit này thành 1 commit trước khi nó được merge. Vậy làm thế nào để gộp nhiều commit thành 1 commit?

Cách giải quết đưa ra là "rebase" các commit này.

Đầu tiên bạn xem các commit bằng git log:

```
$ git log --oneline
```

Kết quả:

```
22cd1f4 Make grunt task clear @$
778e7be Edit jst grunt's config
4b0db4a Update grunt task, jst per line
6349fc3 Update model, need to do is user can delete there own comments
0aa5434 Fix Sumo code duplicate
134a970 Merge branch 'feedback-member'
3a8544a Facebook login, draft version
....
```

Nếu bạn muốn gộp 2 commit 22cd1f4 và 778e7be thành một. Ta có lệnh

```
$ git rebase -i HEAD~2
```

```
pick 778e7be Edit jst grunt's config
pick 22cd1f4 Make grunt task clear @$

# Rebase 4b0db4a..22cd1f4 onto 4b0db4a
#
# Commands:
#  p, pick = use commit
#  r, reword = use commit, but edit the commit message
#  e, edit = use commit, but stop for amending
#  s, squash = use commit, but meld into previous commit
#  f, fixup = like "squash", but discard this commit's log message
#  x, exec = run command (the rest of the line) using shell
#
# These lines can be re-ordered; they are executed from top to bottom.
#
# If you remove a line here THAT COMMIT WILL BE LOST.
#
# However, if you remove everything, the rebase will be aborted.
#
# Note that empty commits are commented out

```

Dòng thứ 2, bạn thay từ pick thành f để xóa commit đó. Lưu lại và push trở lên server. Nhớ thêm -f để git ghi đè lên các commit cũ trên server

```
$ git push origin user-system -f
```
