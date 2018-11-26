---
draft: true

title: "{{ replace .Name "-" " " | title }}"
author: ""
date: {{ dateFormat "2006-01-02" .Date}}
type: "post"  //主题会过滤 post
Keywords: [""]
categories: []
tags: []
Topics: []
description: [] 
toc: true 默认开启，可false关闭 
comment: true   默认开启，可false关闭 
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
 

 