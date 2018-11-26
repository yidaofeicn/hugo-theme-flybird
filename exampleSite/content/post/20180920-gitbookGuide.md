---
draft: false

title: "20180920 Gitbook 教程"
date: 2018-09-20
lastmod: 
keywords: ["gitbook","个人博客建站"]
tags: ["个人博客建站"]
description: []
categories: ["软件技巧"]
toc : true

 

---

# 概述
GitBook 是一个提供 Markdown 书籍托管的网络平台， 支持通过 git 以及 GitHub 进行文档管理，使用它可以很简单地生
成、发布电子图书。 同时，GitBook 也是一个 Node.js 命令行工具，可以使用它搭建自己的 GitBook 站点。

除了命令行程序和 web 服务外，GitBook 官方还提供了 跨平台的编辑器，提供直接编辑、发布电子书的功能， 不过实际上
仅相当于自启动的 GitBook 控制台程序，并不推荐安装，尤其对于 *nix 系统而言。

GitBook 网站使用简单，这里就不再赘述了，GitBook 控制台提供强大的本地服务， 自启动的站点能够提供和网站完全一样
的编辑服务， 对于不方便登录其网站的用户来说非常方便。 GitBook 甚至提供 GitHub hook，在每一次 push 时自动更新
书籍内容。

本文章内容为 [Gitbook教程](https://yidaofeicn.github.io/softwareGit/gitbook) 简单版，如需要查看更多细节的请访问以上链接。

## 安装并使用 gitbook
首先确认实验环境是：windows 10 x64，基础开发环境配置有 JDK1.8.0、Maven3.5.4、GIT2.18

### nodejs 安装 
windows 平台安装包有两种方式：**msi** 与 **exe**，前者类似普通软件安装且网络教程多，不在赘述；后者网络教程较少，且相关的配置教程杂乱（不指明版本号、环境变量配置存在问题等），所以此处以 **exe** 版本说明

#### 下载并安装 Nodejs 
第一步：本次配置使用的是 **node-v6.12.3-win-x64.zip**版本，点击此[node-v6.12.3-win-x64.zip下载链接](https://nodejs.org/download/release/v6.12.3/)可以定位到相关的下载页面  
第二步：解压 “node-v6.12.3-win-x64.zip” 至于 “D:\Program Files”文件夹下，将文件名重命名为 “node-v6.12.3”，关于解压地点与命令按照可按照大家各自喜好配置，稍后将解压存放目录统一称为 “**%NODE_HOME%**”  
第三步：打开 CMD 窗口或 GitBash 窗口，

```batch
Microsoft Windows [版本 10.0.17134.254]
(c) 2018 Microsoft Corporation。保留所有权利。

C:\Users\aizhe>node -v
'node' 不是内部或外部命令，也不是可运行的程序
或批处理文件。
```

**需要配置相关的环境变量**

#### 配置 Node、NPM 环境变量
第一步：打开 Windows 环境变量设置界面  
第二步：**系统环境变量**中进行一下以下操作，操作完成后保存即可（注意是 **系统环境变量**，**系统环境变量**，**系统环境变量** :smile:）

|操作内容|变量名|值|
|:--|:--|:--|
|新建|NODE_HOME|**nodejsPath**|
|追加|Path|%NODE_HOME%|

第三步：新开一个 CMD 窗口或 Gitbash 窗口（窗口重新读取配置文件，应用前一步骤配置）

```batch
Microsoft Windows [版本 10.0.17134.254]
(c) 2018 Microsoft Corporation。保留所有权利。

C:\Users\aizhe>node -v
v6.12.3

C:\Users\aizhe>npm -v
6.4.1

C:\Users\aizhe>
```

#### 配置 NPM
NPM 作为一个 NodeJS 的模块管理，稍后我们安装软件基本都是通过此模块进行相关的管理，本部分不做具体展开，仅设置相关的源、全局模块、缓存存放路径

##### 第一步 设置相关源  
默认源在国外，速度很慢，可能会出现包无法安装的问题，一般推荐采用国内的淘宝源，命令如下：

```batch
npm config set registry https://registry.npm.taobao.org //配置
npm config get registry  //验证是否成功
```

相关扩展可以参考 [参考资料1](#ref1)、[参考资料2](#ref2)    

##### 第二步 设置全局模块存放路径  
全局模块默认存放在 “prefix=C:\Users\aizhe\AppData\Roaming\npm”，不利于系统运转以及后续包管理，所以我们修改相关的参数

1. 在 **nodejsPath** 下新建 “node_global”、“node_cache” 两个文件用于存储全局模块、缓存

2. 可以通过`npm config edit`直接在文本框中修改相关的数据，以下采用的是命令行修改相关参数

```batch
npm config set prefix  “nodejsPath\node_global”
npm config set cache   “nodejsPath\node_cache”
```
  
##### 第三步 配置相关环境变量
由于此处将全局模块存储文件修改，如不在系统变量中指明相关的存放地点，系统将 **应用原有的路径** 查找，会出现 `'gitbook' 不是内部或外部命令，也不是可运行的程序
或批处理文件。` 类似情况，所以需要在系统变量中设置相关的模块点：

|操作内容|变量名|值|
|:--|:--|:--|
|追加|Path|%NODE_HOME%\node_global|

PS：关于 **“NODE_PATH” =“%NODE_HOME%\node_global\node_modules”** 配置，经过反复的测试不需要配置


#### 第四步 确认成功
安装 gitbook 并确认输出正常即可确认成功

 
### 安装 gitbook
如安装有 Git，则使用 Git Bash，如无则使用 Windows 10 的 CMD 窗口

```batch
npm install -g gitbook-cli
gitbook -V
```
如输出
```batch
CLI version: 2.3.2
GitBook version: 3.2.3
```
则表明安装成功（注意 `gitbook -V` 中的V为大写）

### 使用 gitbook
#### web托管
```batch
cd d:
mkdir gitbookTest
cd gitbookTest
gitbook init
gitbook install ./
gitbook serve
```

进入 D:\\gitbookTest 可以看到 SUMMARY.md 与 README.md 文件，并浏览器访问`127.0.0.1：4000`可以看到基本的内容

#### 构建静态网站
```batch
cd d:
mkdir gitbookTest
cd gitbookTest
gitbook init
gitbook install ./
gitbook build
```
进入 D:\\gitbookTest\_book 可以看到 index.html 文件，点击即可查看书

PS：gitbook 3.0.1版本以上生成的 **静态网站侧边栏无法进行跳转**，所以如果大家需要生成静态网站最好使用3.0.1及以下版本，具体情况请大家查看[安装配置问题汇总](/installConfigQA.md)

### gitbook 目录结构
gitbook 标准目录结构为：

```
├── book.json
├── README.md
├── SUMMARY.md
├── chapter-1/
|   ├── README.md
|   └── something.md
└── chapter-2/
    ├── README.md
    └── something.md
```

## book 配置文件参数
[book 配置文件参数官方文档](https://gitbookio.gitbooks.io/documentation/content/format/configuration.html)  

|参数名称|含义|
|:--|:--|
|title              |标题|
|description        |书本描述|
|author             |作者信息|
|language           |使用的语言|
|isbn               |图书编号|
|gitbook            |指定gitbook版本|
|root               |指定存放 GitBook 文件的根目录|
|structure          |设置 Readme, Summary, Glossary等对应的文件|
|plugins            |插件|
|pluginsConfig      |插件配置|
|links              |在侧边栏添加链接|
|styles             |自定义样式|
|variables          |模板渲染参数|

以上所有常规的参数不一一介绍，主要是介绍其中配置比较多的参数点。


### language
Gitbook 使用的语言，具体的参数请参考： [List of ISO 639-1 codes](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes)
 
### gitbook
指定使用的 gitbook 版本，建议配置，因为版本特性不一样

```json
"gitbook" : "3.2.2",
"gitbook" : ">=3.0.0"
```

### links
在左侧导航栏添加链接信息，

```json
"links" : {
    "sidebar" : {
        "Home" : "https://www.jianshu.com/u/2883cc74fbdd"
    }
}
```

### styles
自定义页面样式， 默认情况下各 generator 对应的 css 文件

```json
"styles": {
    "website": "styles/website.css",
    "ebook": "styles/ebook.css",
    "pdf": "styles/pdf.css",
    "mobi": "styles/mobi.css",
    "epub": "styles/epub.css"
}
```

例如使`<h1> <h2>`标签有下边框， 可以在 website.css 中设置

```html
h1 , h2{
    border-bottom: 1px solid #EFEAEA;
}
```

### structure
指定 Readme、Summary、Glossary 和 Languages 对应的文件名，下面是这几个文件对应变量以及默认值：

|变量|含义和默认值|
|:--|:--|
|structure.readme               |Readme file name (defaults to README.md)|
|structure.summary              |Summary file name (defaults to SUMMARY.md)|
|structure.glossary             |Glossary file name (defaults to Glossary.md)|
|structure.languages            |Languages file name (defaults to LANGS.md)|
   
举例如下：

```json
"structure": {
        "readme": "introduction.md"
 },
```

###  plugins
配置使用的插件

```json
"plugins": [
    "disqus"
]
```

添加新插件之后需要运行`gitbook install ./`本地安装新的插件  
Gitbook 默认带有5个插件：

1. highlight
2. search
3. sharing
4. font-settings
5. livereload

如果要去除自带的插件， 可以在插件名称前面加-

```json
"plugins": [
    "-search"
]json
```

### pluginsConfig
配置插件的属性

```json
"pluginsConfig": {
    "fontsettings": {
        "theme": "sepia",
        "family": "serif",
         "size":  1
    }
}
```

## 推荐插件
[插件官网](https://plugins.gitbook.com)

记录一些实用的插件，一般情况下建议指定插件版本，指定版本方式为`disqus@0.1.0`（测试过程中 Disqus1.0.1 要求 gitbook 版本为4.0以上）。下面的插件在 GitBook 的 3.2.3 版本中可以正常工作，因为一些插件可能不会随着 GitBook 版本的升级而升级，即下面的插件
可能不适用高版本的 GitBook

### 插件列表

|变量|含义和默认值|
|:--|:--|
|[theme-comscore](#theme-comscore)  |主题theme-comscore|
|[disqus](#disqus)                  |disqus 评论      |
|[search-Plus](#search-plus)        |支持中文搜索      |
|[donate](#donate)                  |打赏插件          |
|[github](#github)                  |添加github图标   | 
|[sharing-plus](#sharing-plus)      |分享当前页面       |
|[rss](#rss)                        |添加 rss 订阅功能|
|[edit-link](#edit-link)            |链接到当前页源文件上     |
|[anchors](#anchors)                |添加 Github 风格的锚点   |
|[multipart](#multipart)            |目录分层次|
|[favicon](#favicon)                |更改网站的 favicon.ico   |
|[splitter](#splitter)              |使侧边栏的宽度可以自由调节      |
|[page-footer-ex](#page-footer-ex)            |为页面添加页脚               |
|[expandable-chapters-small](#expandable-chapters-small)    |使左侧的章节目录可以折叠      |
|[anchor-navigation-ex-toc](#anchor-navigation-ex-toc)       |添加Toc到侧边悬浮导航以及回到顶部按钮       |
|[ace-Plugin](#ace-Plugin)                      |支持用户动代码    |
|[codeblock-filename](#codeblock-filename)      |代码块名称|
|[prism](#prism)                                |使用 Prism.js 高亮代码         |
|[prism-themes](#prism-themes)                  |使用 Prism.js 高亮代码css样式  |
|[copy-code-button](#copy-code-button)          |为代码块添加复制按钮           |
|[kaTex](#kaTex)                                |支持数学公式                   |
|[mathjax](#kaTex)                              |支持数学公式                   |
|[mermaid-gb3](#mermaid-gb3)                    |支持渲染 Mermaid 图表          |
|[graph](#graph)              |使用 function-plot 绘制数学函数图           |
|[Chart](#chart)              |绘制图形                                   |
|[advanced-emoji](#advanced-emoji)      |表情，与GFM表情一致|

## 导出与发布
gitbook 一般展现的方式是PDF、静态网站，后者表现形式离线版( “_book目录”文件)、gitbook、githubPage  
本文主要介绍 PDF 导出、githubPage 

### gitbook 发布
首先 [gitbook旧版网站](https://legacy.gitbook.com/login) 已经不支持注册，而 [gitbook新版网站](https://www.gitbook.com/) 新特性（参考[参考资料1](#ref1)）、以及网站每次都是动态生成慢等直观感受 **个人不推荐使用**

如需要配置可以参考以下链接：  
[优质软件精选 - GitBook使用指南](https://www.kancloud.cn/xiaoyulive/gitbook/506142)

### PDF 导出
由于 GitBook 生成 mobi 格式电子书依赖 Calibre 的 ebook-convert，所以先安装 calibre

1. 本次选用的 3.31.0 版本，点击[calibre-ebook Download](https://download.calibre-ebook.com/3.31.0/)下载  
2. 系统环境变量中加入 **calibre-convert路径地址**
3. 安装完calibre之后，将calibre加入到系统环境变量中，执行 `ebook-convert --version` 命令之后显示3.x的版本即表示安装成功。
4. 执行 `gitbook pdf `即可导出PDF文件到当前目录
   

### GithubPage 静态网站发布
由于 gitbook 书籍可以通过 gitbook 本地构建出 site 格式，所以可以直接将构建好的书籍直接放到 GitHub Pages 中托管，之后，可以通过如下地址访问书籍：
`<username>.github.io/<project>`

例如本书例子可以通过：https://yidaofeicn.github.io/softwareGit/ 访问  

当访问 https://yidaofeicn.github.io/softwareGit/ 时，会访问 yidaofeicn/softwareGit 项目的 gh-pages 分支的内容，所以需要为项目创建一个 gh-pages 分支，并且将静态站点内容放入其中。也就是说，software 项目将有如下两个分支：

- master, 保存书籍的源码
- gh-pages, 保存书籍编译后的 HTML 文件

所以问题转化为如何将静态网站导入gh-pages分支 :smile:

#### 书籍编译构建

```batch
$ gitbook init
$ gitbook install 
$ gitbook build
```

#### Git Master 分支操作

```batch
$ git init
$ git add .
$ git commit -m "第一次提交"
$ git push -u origin master
```

#### 新建gh-pages 分支并上传静态网站
创建gh-pages分支

```batch
$ git branch gh-pages
$ git checout master
```

清理删除不需要的文件

```batch
$ git rm --cached -r .
$ git clean -df
$ rm -rf *~
```

配置.gitignore文件

```batch
$ echo "*~" > .gitignore
$ echo "_book" >> .gitignore
$ echo "node_modules" >> .gitignore
$ git add .gitignore
$ git commit -m "Ignore some files"
```

移动_book文件到当前文件并发布

```batch
$ cp -r _book/* .
$ git add .
$ git commit -m "Publish book"
$ git push -u origin gh-pages
```
 
现在，书籍的内容已经上传到 GitHub 上，所以通过访问 https://yidaofeicn.github.io/softwareGit/ 就可以阅读这本书了！

## book.json文件

```json
{
    "title": "编程专业软件简易使用教程",
    "description": "主要是记录一些关于编程专业软件的使用方法以及相关的推荐",
    "author": "yidaofeicn",
    "gitbook": "3.0.2",
     

    "plugins": [
        
        "theme-comscore",

        "-livereload",
        "disqus@0.1.0",
        "-lunr",
        "-search",
        "search-plus@0.0.11",
        "donate@1.0.2",

        "github@2.0.0",
        "-sharing",
        "sharing-plus@0.0.2",
        "rss@2.1.5",

        "edit-link@2.0.2",
        "anchors@0.7.1",
        "multipart@0.3.0",
        
        "favicon@0.0.2",
        "splitter@0.0.8", 
        "page-footer-ex@0.1.2",
        "expandable-chapters-small@0.1.7",
        "anchor-navigation-ex-toc@0.0.11",

        "ace@^0.3.2",
        "codeblock-filename@0.0.9", 
        "prism@2.4.0",
        "-highlight",
        "prism-themes@0.0.2",
        "copy-code-button@0.0.2",
        "advanced-emoji",
 
        "katex@1.1.4", 
        "mermaid-gb3@2.1.0",
        "graph@0.1.0",
        "chart@0.2.0"

        
    ],

    "pluginsConfig": {
     "disqus": {
            "shortName": "gitbookYDF"
        },
    "sharing": {
           "douban": true,
           "facebook": false,
           "google": false,
           "hatenaBookmark": false,
           "instapaper": false,
           "line": false,
           "linkedin": false,
           "messenger": false,
           "pocket": true,
           "qq": true,
           "qzone": true,
           "stumbleupon": false,
           "twitter": false,
           "viber": false,
           "vk": false,
           "weibo": true,
           "whatsapp": false,
           "all": [
               "douban", "pocket", "qzone",
               "weibo", "qq"
           ]
        },
     "rss": {
          "title": "编程专业软件简易使用教程",
          "description": "主要是记录一些关于编程专业软件的使用方法以及相关的推荐",
          "author": "yidaofeicn",
          "site_url": "xxxxxx.com",
          "feed_url": "xxxxxx.com",
          "image_url": "xxxxxx.png",
          "categories": [
            "git",
            "sublime",
            "gitbook"
          ]
        },
    "github": {
        "url": "https://github.com/yidaofeicn/softwareGit"
        },
    "donate": {
        "wechat": "img/wxpay.png",
        "alipay": "img/alipay.png",
        "title": "",
        "button": "赏",
        "alipayText": "支付宝打赏",
        "wechatText": "微信打赏"
    },
    

    "edit-link": {
        "base": "https://github.com/yidaofeicn/softwareGit/edit/BRANCH",
        "label": "编辑此页"
        },

    "favicon":{
        "shortcut": "assets/images/favicon.ico",
        "bookmark": "assets/images/favicon.ico",
        "appleTouch": "assets/images/apple-touch-icon.png",
        "appleTouchMore": {
            "120x120": "assets/images/apple-touch-icon-120x120.png",
            "180x180": "assets/images/apple-touch-icon-180x180.png"
            }
        }, 
    "page-footer-ex": {
            "copyright": "**由 yidaofeicn 通过[知识共享 署名-相同方式共享 4.0协议发布](https://creativecommons.org/licenses/by-nc-nd/4.0/deed.zh)**",
            "markdown":true,
            "update_label": "**文件修订时间：**",
            "update_format": "YYYY-MM-DD"
        }, 
    "page-toc-button": {
            "maxTocDepth": 2,
            "minTocSize": 2
        },
    "anchor-navigation-ex-toc": {
           "showLevel": true,
           "associatedWithSummary": true,
           "printLog": false,
           "multipleH1": false,
           "mode": "float",
           "showGoTop":true,
           "float": {
                "showLevelIcon": false,
                "level1Icon": "fa fa-hand-o-right",
                "level2Icon": "fa fa-hand-o-right",
                "level3Icon": "fa fa-hand-o-right"
                }
        },

    "prism": {
            "css": [
               "prism-themes/themes/prism-a11y-dark.css"
            ]
        },
    "chart": {
            "type": "c3"
        }
    }
}


```


## 版本信息
|日期|调整内容|
|:--|:--|
|2018年09月20日|初创|
