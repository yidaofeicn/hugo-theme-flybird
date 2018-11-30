---
draft: true

title: "{{ replace .Name "-" " " | title }}"
date: {{ dateFormat "2006-01-02" .Date}}
type: "post"        #分页过滤 post
Keywords: [""]  
categories: []
tags: []

#以下为默认设置居多，可直接删除
toc:                #默认开启，可false关闭 
tocStartLevel: 2    #toc导航开始层次，最小为1
tocEndLevel: 4      #toc导航结束层次，最大为6
comment:        #默认开启，可false关闭 
author: ""
CopyrightStatement: ""  #文章版权说明，一般默认为原创

#内容与---空一行以便与 wiz 笔记markdown渲染兼容
---

**Markdown**  提示内容

<!--more-->


### 参考资料


### 版本信息

|Version|Action |Time |
|:--:|:--:|:--:|
|1.0|init|{{ dateFormat "2006-01-02" .Date}}|
 

 