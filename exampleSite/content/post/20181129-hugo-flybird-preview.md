---
draft: false

title: "Hugo 主题 flybird 预览 "
date: 2018-11-28
Keywords: ["开源","Hugo","主题"]
categories: ["个人建站"]
tags: ["个人建站","开源软件"] 
---

这篇文章集中说明本人博客主题所支持的 Markdown 语法和 Hugo Shortcodes 插件，你也可以在这里预览到他们的样子。

另外针对初次接触 Hugo 以及 Markdown 的用户请访问以下链接：

1. [中文排版指南](https://yidaofei.com/post/20181106-chinese-copywriting-guidelines/)
2. [Markdown 语言教程——GFM](https://yidaofei.com/post/20181110-software-skills-markdown-github-flavored-markdown/)
3. [GFM 表情列表](https://yidaofei.com/post/20181128-software-skills-markdown-github-emoji/)
4. [个人建站 - Hugo - 快速开始](https://yidaofei.com/post/20181108-hugo-quick-start/)


<!--more-->

##  标题

# H1
## H2
### H3
#### H4
##### H5
###### H6

##  段落

使用单引号 `*` 或者单下划线 `_` 标记 *斜体强调* 或者 _斜体强调_

使用两个引号 `**` 或者两个下划线 `__` 标记 **加粗强调** 或者 __加粗强调__

引号和下划线可叠加使用 → **只是加粗 _斜体并加粗_**

使用两个波浪线 `~~` 标记 ~~已删除文字~~

插入文字暂无 `Markdown` 标记，直接使用 `HTML` 标签 `<ins>` 标记 <ins>插入文字</ins>

行内代码使用反引号标记 → `print("hello world")`

上标 X<sup>2</sup> / 下标 X<sub>2</sub>

按键 <kbd>Ctrl</kbd>

外链 [chekun's blog](https://chekun.me)

页面内段落 [图片](#section-07)

*注意：你可以通过 `{#section-id}` 方式自定义段落锚点*

参考资料 <sup>[[1]](#ref01)</sup><sup>[[2]](#ref02)</sup>
 
##  列表

以下的无序、有序和任务列表均支持二级嵌套，不建议使用二级以上嵌套。

### 1 无序列表

* 无序列表
  - 嵌套的无序列表
  - 嵌套的无序列表
* 无序列表
  1. 嵌套的有序列表
  2. 嵌套的有序列表
* 无序列表

### 2 有序列表

1. 有序列表
  1. 嵌套的有序列表
  2. 嵌套的有序列表
2. 有序列表
  - 嵌套的无序列表
  - 嵌套的无序列表
3. 有序列表

### 3 定义列表

CSS
: 层叠样式表

### 4 任务列表

- [ ] Cmd Markdown 开发
  - [ ] 改进 Cmd 渲染算法，使用局部渲染技术提高渲染效率
  - [ ] 支持以 PDF 格式导出文稿
  - [x] 新增Todo列表功能 [语法参考](https://github.com/blog/1375-task-lists-in-gfm-issues-pulls-comments)
  - [x] 改进 LaTex 功能
  - [x] 修复 LaTex 公式渲染问题
  - [x] 新增 LaTex 公式编号功能 [语法参考](http://docs.mathjax.org/en/latest/tex.html#tex-eq-numbers)
- [ ] 七月旅行准备
  - [ ] 准备邮轮上需要携带的物品
  - [ ] 浏览日本免税店的物品
  - [x] 购买蓝宝石公主号七月一日的船票

##  引用

> 野火烧不尽，春风吹又生。
>
> <cite>-- 白居易《赋得古原草送别》</cite>

##  代码

以本站的一段 `JavaScript` 代码做演示。

```javascript
// Initialize video.js player
if (document.getElementById('my-player') !== null) {
  /* eslint-disable no-undef */
  videojs('#my-player', {
    aspectRatio: '16:9',
    fluid: true,
  });
}
```

##  分割线

---

 
##  图片 {#section-07}

![Piwigo 图库](https://piwigo.yidaofei.com/galleries/201809/piwigo-photo-gallery.png)
 
##  表格

使用 `Markdown` 画的表格，如下表👇

| Tables        | Are           | Cool  |
| :------------ |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

使用 `HTML` 画的表格，如下表👇

*注意：下表叠加应用了 `is-centered` `is-striped` `is-bordered` `is-narrow` 四种表格样式。*

<table class="is-centered is-striped is-bordered is-narrow">
  <tr>
    <th rowspan="2">值班人员</th>
    <th>星期一</th>
    <th>星期二</th>
    <th>星期三</th>
  </tr>
  <tr>
    <td>李强</td>
    <td>张明</td>
    <td>王平</td>
  </tr>
</table>

## JSFiddle

引入 [JSFiddle](https://jsfiddle.net/) 网站的代码范例，在主题目录 `layouts/shortcodes` 文件夹下的 `jsfiddle.html` 对该标签进行定义。

源代码：`{{% jsfiddle "laozhu/L479wueo" "html,css,result" %}}`

呈现：

{{% jsfiddle "laozhu/L479wueo" "html,css,result" %}}

## Codepen

引入 [Code Pen](https://codepen.io/) 网站的代码演示，在主题目录 `layouts/shortcodes` 文件夹下的 `codepen.html` 对该标签进行定义。


源代码：`{{% codepen "RoaWdE" "🐍 Snake Rush" "laozhu" "Ritchie Zhu" "600" %}}`

呈现：

{{% codepen "RoaWdE" "🐍 Snake Rush" "laozhu" "Ritchie Zhu" "600" %}}


## 声享 PPT

引入 [声享](https://ppt.baomitu.com/) PPT 演示文稿，在主题目录 `layouts/shortcodes` 文件夹下的 `shengxiang.html` 对该标签进行定义。


源代码：`{{% shengxiang "a8a49a00" %}}`

呈现：

{{% shengxiang "a8a49a00" %}}


## 音乐
采用原生的 HTML 标签，追加属性`data-cover`、`data-name`、`data-artist` ，结合相关的插件 APlayer 展现如下：


使用源代码：

```html
<video controls="" autoplay="" name="media">
    <source src="https://music.163.com/song/media/outer/url?id=399341112.mp3" 
    data-cover="http://p1.music.126.net/zlG4B8SuUTlHc2OXCEuvIg==/3306231465818039.jpg?param=130y130"
    data-name="The Last of the Mohicans - 街头艺人演奏版"    
    data-artist="Alexandro Querevalú"
    type="audio/mpeg">
</video>
```

呈现：

<video controls="" autoplay="" name="media">
    <source src="https://music.163.com/song/media/outer/url?id=399341112.mp3" 
    data-cover="http://p1.music.126.net/zlG4B8SuUTlHc2OXCEuvIg==/3306231465818039.jpg?param=130y130"
    data-name="The Last of the Mohicans - 街头艺人演奏版"    
    data-artist="Alexandro Querevalú"
    type="audio/mpeg">
</video>

## 视频
### 通用方式
视频统一采用上传到指定网站，然后引用其分享代码，不做本地加载（太过麻烦，且如果使用 Github 搭建博客......）！

源代码：
```html 
<iframe height=498 width=510 src='https://player.youku.com/embed/XMzMwODI4ODY4OA==' frameborder=0 'allowfullscreen'></iframe>
```

呈现：

<iframe height=498 width=510 src='https://player.youku.com/embed/XMzMwODI4ODY4OA==' frameborder=0 'allowfullscreen'></iframe>

### shortcodes 方式
Copy 自 hugo-nuo 主题：使用 [video.js](http://videojs.com/) 播放视频文件，你还可以自己定义视频的封面，在主题目录 `layouts/shortcodes` 文件夹下的 `video.html` 对该标签进行定义。

{{% video  
  "/media/post/20181129-hugo-flybird-preview/videojs.mp4"
  "/media/posts/20181129-hugo-flybird-preview/videojs.webm"
  "/media/posts/20181129-hugo-flybird-preview/videojs.ogv" %}}




## 参考资料

1. <a id="ref01">[Markdown Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)</a>
2. <a id="ref02">[Markdown 语法手册](https://www.zybuluo.com/EncyKe/note/120103)</a>


<!--以下为隐藏的链接-->
[zhihu]:http:zhihu.com

