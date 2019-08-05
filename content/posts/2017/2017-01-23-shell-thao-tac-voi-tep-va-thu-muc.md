---
template: post
title: Shell - Mọi thao tác với tệp và thư mục trên Bash
date: '2017-01-23T11:38:00.000+07:00'
author: Van-Duyet Le
tags:
- Linux
- Shell bash
- Ubuntu
- CMD
modified_time: '2017-01-23T11:38:35.234+07:00'
thumbnail: https://1.bp.blogspot.com/-LFMgOUBzTRc/WIWIaGmpQzI/AAAAAAAAieU/kvAZPXb218k53BpTdGwnVJQbL4KyhjtRgCLcB/s1600/Screenshot%2Bfrom%2B2017-01-23%2B11-36-34.png
blogger_id: tag:blogger.com,1999:blog-3454518094181460838.post-8780458314288554113
blogger_orig_url: https://blog.duyet.net/2017/01/shell-thao-tac-voi-tep-va-thu-muc.html
slug: /2017/01/shell-thao-tac-voi-tep-va-thu-muc.html
category: Linux
description: Shell bash trên Linux nếu như biết khai thác thì nó sẽ là một công cụ rất mạnh, trong bài này mình sẽ liệt kê các thao tác với tệp và thư mục (copy, move, rename, zip, ...). Like a hacker :))
---

Shell bash trên Linux nếu như biết khai thác thì nó sẽ là một công cụ rất mạnh, trong bài này mình sẽ liệt kê các thao tác với tệp và thư mục (copy, move, rename, zip, ...). Like a hacker :))

![](https://1.bp.blogspot.com/-LFMgOUBzTRc/WIWIaGmpQzI/AAAAAAAAieU/kvAZPXb218k53BpTdGwnVJQbL4KyhjtRgCLcB/s1600/Screenshot%2Bfrom%2B2017-01-23%2B11-36-34.png)

## copy a file ##

Copy `readme.txt` vào thư mục `documents`

```
cp readme.txt documents/
```

## [https://github.com/you-dont-need/You-Dont-Need-GUI#duplicate-a-file](https://github.com/you-dont-need/You-Dont-Need-GUI#duplicate-a-file)duplicate a file ##

```
cp readme.txt readme.bak.txt
```

## [https://github.com/you-dont-need/You-Dont-Need-GUI#copy-a-folder](https://github.com/you-dont-need/You-Dont-Need-GUI#copy-a-folder)[https://draft.blogger.com/null](https://draft.blogger.com/null)copy a folder ##

Copy thư mục `myMusic` vào thư mục `myMedia` 

```
cp -a myMusic myMedia/
# or
cp -a myMusic/ myMedia/myMusic/

```

## [https://github.com/you-dont-need/You-Dont-Need-GUI#duplicate-a-folder](https://github.com/you-dont-need/You-Dont-Need-GUI#duplicate-a-folder)[https://draft.blogger.com/null](https://draft.blogger.com/null)duplicate a folder ##
Chú ý dấu /

```
cp -a myMusic/ myMedia/
# or if `myMedia` folder doesn't exist
cp -a myMusic myMedia/

```

## [https://github.com/you-dont-need/You-Dont-Need-GUI#move-a-file](https://github.com/you-dont-need/You-Dont-Need-GUI#move-a-file)move a file ##
Di chuyển file readme.txt vào thư mục documents/

```
mv readme.txt documents/

```
Luôn sử dụng dấu / cuối thư mục, [for this reason](http://unix.stackexchange.com/a/50533).

## [https://github.com/you-dont-need/You-Dont-Need-GUI#rename-a-file](https://github.com/you-dont-need/You-Dont-Need-GUI#rename-a-file)[https://draft.blogger.com/null](https://draft.blogger.com/null)rename a file ##
Đổi tên bằng cách move nó

```
mv readme.txt README.md

```

## [https://github.com/you-dont-need/You-Dont-Need-GUI#move-a-folder](https://github.com/you-dont-need/You-Dont-Need-GUI#move-a-folder)[https://draft.blogger.com/null](https://draft.blogger.com/null)move a folder ##
Tương tự di chuyển file

```
mv myMedia myMusic/
# or
mv myMedia/ myMusic/myMedia

```

## [https://github.com/you-dont-need/You-Dont-Need-GUI#rename-a-folder](https://github.com/you-dont-need/You-Dont-Need-GUI#rename-a-folder)[https://draft.blogger.com/null](https://draft.blogger.com/null)rename a folder ##

```
mv myMedia/ myMusic/

```

## [https://github.com/you-dont-need/You-Dont-Need-GUI#create-a-new-file](https://github.com/you-dont-need/You-Dont-Need-GUI#create-a-new-file)[https://draft.blogger.com/null](https://draft.blogger.com/null)create a new file ##
Tạo file rỗng

```
touch 'new file'

```

or

```
> 'new file'

```

## [https://github.com/you-dont-need/You-Dont-Need-GUI#create-a-new-folder](https://github.com/you-dont-need/You-Dont-Need-GUI#create-a-new-folder)[https://draft.blogger.com/null](https://draft.blogger.com/null)create a new folder ##

```
mkdir 'untitled folder'

```

or

```
mkdir -p 'path/may/not/exist/untitled folder'

```

## [https://github.com/you-dont-need/You-Dont-Need-GUI#show-filefolder-size](https://github.com/you-dont-need/You-Dont-Need-GUI#show-filefolder-size)[https://draft.blogger.com/null](https://draft.blogger.com/null)show file/folder size ##

```
stat -x readme.md

```

or

```
du -sh readme.md

```

## [https://github.com/you-dont-need/You-Dont-Need-GUI#open-a-file-with-the-default-program](https://github.com/you-dont-need/You-Dont-Need-GUI#open-a-file-with-the-default-program)[https://draft.blogger.com/null](https://draft.blogger.com/null)open a file with the default program ##
Mở file trên GUI

```
open file       # on macOS
xdg-open file   # on Linux

```

## [https://github.com/you-dont-need/You-Dont-Need-GUI#zip-a-folder](https://github.com/you-dont-need/You-Dont-Need-GUI#zip-a-folder)[https://draft.blogger.com/null](https://draft.blogger.com/null)zip a folder ##
Nén zip 1 thư mục

```
zip -r archive_name.zip folder_to_compress

```

## [https://github.com/you-dont-need/You-Dont-Need-GUI#unzip-a-folder](https://github.com/you-dont-need/You-Dont-Need-GUI#unzip-a-folder)[https://draft.blogger.com/null](https://draft.blogger.com/null)unzip a folder ##
Giải nén file zip

```
unzip archive_name.zip

```

## [https://github.com/you-dont-need/You-Dont-Need-GUI#remove-a-file](https://github.com/you-dont-need/You-Dont-Need-GUI#remove-a-file)[https://draft.blogger.com/null](https://draft.blogger.com/null)remove a file ##
Xóa hoàn toàn, không thể khôi phục file

```
rm my_useless_file
```

## [https://github.com/you-dont-need/You-Dont-Need-GUI#remove-a-folder](https://github.com/you-dont-need/You-Dont-Need-GUI#remove-a-folder)[https://draft.blogger.com/null](https://draft.blogger.com/null)remove a folder ##

```
rm -r my_useless_folder
```

## [https://github.com/you-dont-need/You-Dont-Need-GUI#list-folder-contents](https://github.com/you-dont-need/You-Dont-Need-GUI#list-folder-contents)[https://draft.blogger.com/null](https://draft.blogger.com/null)list folder contents ##
Liệt kê nội dung thư mục

```
ls -la my_folder

```

## [https://github.com/you-dont-need/You-Dont-Need-GUI#tree-view-a-folder-and-its-subfolders](https://github.com/you-dont-need/You-Dont-Need-GUI#tree-view-a-folder-and-its-subfolders)[https://draft.blogger.com/null](https://draft.blogger.com/null)tree view a folder and its subfolders ##
hiển thị dưới dạng cây thư mục

```
tree                                                       # on Linux
find . -print | sed -e 's;[^/]*/;|____;g;s;____|; |;g'     # on macOS

```

![](https://4.bp.blogspot.com/-tK8h8jZr_bE/WIWEVOZOijI/AAAAAAAAieI/M-j88WoOPgwUof29-7baFsDsniPOoLXPgCLcB/s1600/Screenshot%2Bfrom%2B2017-01-23%2B11-01-08.png)

## [https://github.com/you-dont-need/You-Dont-Need-GUI#find-a-stale-file](https://github.com/you-dont-need/You-Dont-Need-GUI#find-a-stale-file)[https://draft.blogger.com/null](https://draft.blogger.com/null)find a stale file ##

Tìm tất cả files modified hơn 5 ngày trước.

```
find my_folder -mtime +5
```
