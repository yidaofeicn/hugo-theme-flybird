---
draft: true

title: "{{ replace .Name "-" " " | title }}"
date: {{ dateFormat "2006-01-02" .Date}}
type: "post"  //主题会过滤 post
Keywords: [""]
categories: []
tags: []

//以下为默认设置居多，可直接删除
Topics: []
description: [] 
toc:   默认开启，可false关闭 
comment:     默认开启，可false关闭 
author: ""
CopyrightStatement: "" //文章版权说明，一般默认为原创
---

**Markdown**  提示内容

<!--more-->

---

## 文章标题



### 参考资料


### 版本信息

|Version|Action |Time |
|:--:|:--:|:--:|
|1.0|init|{{ dateFormat "2006-01-02" .Date}}|
 

 