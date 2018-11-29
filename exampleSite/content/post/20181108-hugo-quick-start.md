---
draft: false
title: "个人建站-Hugo-快速开始"
author: "yidaofeicn"
date: 2018-11-08
Keywords: ["hugo","个人建站","教程","主题"]
categories: ["个人建站"]
tags: ["个人博客建站","Hugo"]
---


个人博客建站大致可以分为两类：

1. 动态博客
2. 静态博客

动态博客典型的代表就是：WordPress、Ghost 以及类似静态 FarBox
静态博客典型的代表就是：Jekyll、Hexo、Hugo

如果仅仅用于个人写作无任何定制化需求推荐使用 Farbox，[Why?-5分钟了解 Farbox](https://www.zhihu.com/question/21981094/answer/23750005)   

如果是用于个人写作且愿意部分定制化的推荐 Hugo，Why?-安装难度小、文档齐全、[生成速度最快](https://mrcpp.com/hexo-and-hugo-generate-10000-article-speed-comparisons/)    

如果是用于商业等网站构建，可以使用 WordPress，教程多、插件齐全、功能多  

<!--more-->

### 静态博客 VS 动态博客 
关于动态和静态的区别主要有以下几点:

1. 资源占用上，静态的相比动态占用服务器资源少，还可以托管在Github Pages上；
2. 发布更新操作上，由于静态博客没有管理后台，所以发布更新内容要比动态博客繁琐；
3. 访问速度上，由于静态博客没有数据库，所以访问速度更快；
4. 安全性上，静态博客相比动态博客免疫了很多Web攻击套路；

所以如果是个人使用如博客等，完全可以使用 **hugo+Github Pages+微博图床/flickr** 构建一个人博客，推荐几个博客给大家欣赏一下：

1. 极简风格：贤明的比特记忆：https://www.xianmin.org/  
2. 极简风格：shawpo：http://www.shawpo.me/
3. 颜色配置超好：ZHENG ZI'ou https://orianna-zzo.github.io/
4. 杂：Jimmy Song(宋净超)：https://jimmysong.io/

同时也推荐几个鄙人比较喜欢的 Jekyll 与 Hexo 网站，供大家比较

1. Jekyll 码志：https://mazhuang.org/about/ 
2. Hexo Next 主题：https://notes.iissnan.com/  ：应用最多的吧......
3. Hexo Next 主题极致美化：https://reuixiy.github.io/technology/computer/computer-aided-art/2017/06/09/hexo-next-optimization.html
4. Hexo :http://litten.me/
5. Jekyell 美：https://www.chairyfish.com/BeautifulJekyllTheme/

只能说 Hugo 漂亮的主题实在是有点少:smile: ——可能我没有遇到对的哪个！


### Hugo 基本操作
Hugo 安装、使用、发布非常简单，不做过多的介绍，本章节主要是记录基本的命令

#### Hugo 安装
Hugo 有两种安装方式：

1. 直接使用二进制文件安装
   到Hugo release下载对应系统的安装包，解压后放到$PATH目录下即可使用
2. 使用go get安装
   这种安装方式的前提是您的电脑上已经配置了Go开发环境，为了简单起见，建议直接下载编译好的发型版安装。
   `go get -u -v github.com/gohugoio/hugo`

#### Hugo 快速部署
相关命令如下：

```batch 
#创建一个网站
hugo new site quickstart  

#获取主题，可访问 https://themes.gohugo.io/
cd quickstart/themes
git clone https://github.com/xianmin/hugo-theme-jane.git 

#将 exampleSite 文件复制到 quickstart，以下命令为 windows 命令
xcopy exampleSite/*  xx/quickstart/ 

#启动 Hugo 
cd quickstart
hugo server
```

如输出：

```batch
Building sites …
                   | EN
+------------------+----+
  Pages            | 84
  Paginator pages  |  2
  Non-page files   |  8
  Static files     | 90
  Processed images |  0
  Aliases          | 27
  Sitemaps         |  1
  Cleaned          |  0

Total in 77 ms
Watching for changes in E:\03blog\yidaofeicn.github.io\{content,data,layouts,static,themes}
Watching for config changes in E:\03blog\yidaofeicn.github.io\config.toml
Serving pages from memory
Running in Fast Render Mode. For full rebuilds on change: hugo server --disableFastRender
Web Server is available at http://localhost:1313/ (bind address 127.0.0.1)
Press Ctrl+C to stop
```

其他相关命令：

|命令|含义|
|:--|:--|
|`hugo new post/first.md`|在 content/post/ 下新建一个 first.md 文件|
|`hugo server --theme=hugo-jane-theme --buildDrafts`|使用 [hugo-jane-theme]主题包含草稿内容|
|`hugo new theme flybird`|新建一个[flybird]主题|
|`hugo undraft post/post-name.md`|将文章从草稿状态修改为可发布状态|
更多命令请使用 `hugo --help`

#### Hugo 快速发布
本次发布使用的是 GitHub gh-pages部分功能，所以请先注册 GitHub 账号，并建立一个名为："xxxx.github.io" 的仓库，如鄙人使用的是 **yidaofeicn.github.io**否则访问链接就不是 "yidaofeicn.github.io"

```batch
#生成静态文件
hugo 
#上传到 GitHub 仓库
cd public
git init 
git remote add origin https://github.com/yidaofeicn/yidaofeicn.github.io.git
git add .
git commit -m "first commit"
git push -u origin master 
```

### 关于 Hugo 配置

```yaml
# 归档目录
archetypeDir:               "archetypes"
# 域名，比如 http://spf13.com/
baseURL:                    ""
# 是否编译草稿
buildDrafts:                false
# 是否编译尚未达到发布日期的文章
buildFuture:                false
# 是否编译过期的文章
buildExpired:               false
# 是否使用相对路径，该选项不影响使用绝对路径的链接
relativeURLs:               false
canonifyURLs:               false
# 配置文件，默认值查找项目根目录下的 config.yaml、config.json 和 config.toml
config:                     "config.toml"
# 内容目录
contentDir:                 "content"
# 数据目录
dataDir:                    "data"
# 默认的扩展名
defaultExtension:           "html"
# 默认的布局模版
defaultLayout:              "post"
# 默认的内容语言
defaultContentLanguage:     "en"
# 是否将生成的默认语言文件存放在子目录中，比如对默认的 /en/，根目录会自动从 / 重定向到 /en/
defaultContentLanguageInSubdir: false
# 是否禁用实时重载功能
disableLiveReload:          false
# 是否禁用 RSS
disableRSS:                 false
# 是否禁用 Sitemap
disableSitemap:             false
# 是否使用 GitInfo
enableGitInfo:              false
# 是否生成 Robots
enableRobotsTXT:            false
# 是否禁用 404
disable404:                 false
# 是否不向主页注入生成器信息
disableHugoGeneratorInject: false
# 使用指定编辑器编辑新文章
editor:                     ""
# 是否允许使用 Emoji
# See www.emoji-cheat-sheet.com
enableEmoji:                false
# Show a placeholder instead of the default value or an empty string if a translation is missing
enableMissingTranslationPlaceholders: false
footnoteAnchorPrefix:       ""
footnoteReturnLinkContents: ""
# google analytics tracking id
googleAnalytics:            ""
languageCode:               ""
layoutDir:                  "layouts"
# 是否启用日志功能
log:                        false
# 日志文件位置
logFile:                    ""
# 元数据的扩展名："yaml", "toml", "json"
metaDataFormat:             "toml"
newContentEditor:           ""
# 是否禁用同步文件的权限信息
noChmod:                    false
# 是否禁用同步文件的修改事件
noTimes:                    false
# 每页的文章数量
paginate:                   10
# 分页页面的路径
paginatePath:               "page"
permalinks:
# Pluralize titles in lists using inflect
pluralizeListTitles:        true
# 是否允许在术语名称中使用特殊字符，比如 "Gérard Depardieu"
preserveTaxonomyNames:      false
# 部署目录
publishDir:                 "public"
# 是否允许对未指定语言的代码进行代码类型预测
pygmentsCodeFencesGuessSyntax: false
# 语法高亮主题名称
pygmentsStyle:              "monokai"
# true: use pygments-css or false: color-codes directly
pygmentsUseClasses:         false
# default sitemap configuration map
sitemap:
# 资源目录
source:                     ""
staticDir:                  "static"
# 是否追踪编译过程中的内存和时间使用信息
stepAnalysis:               false
# 主题目录
themesDir:                  "themes"
# 主题名称
theme:                      ""
title:                      ""
# 是否将 filename.html 替换为 /filename/
uglyURLs:                   false
# 是否禁用自动将 url/path 转换为小写字符
disablePathToLower:         false
# if true, auto-detect Chinese/Japanese/Korean Languages in the content. (.Summary and .WordCount can work properly in CJKLanguage)
hasCJKLanguage:             false
# 是否输出编译详情
verbose:                    false
# 是否启用日志记录编译详情
verboseLog:                 false
# 是否监视文件变动并重新编译资源
watch:                      true
# 指定编译时忽略的文件
ignoreFiles = ["\\.foo$", "\\.boo$"]
```

Hugo 使用 Blackfriday 作为 Markdown 语法的渲染引擎，与之相关的配置信息也可以写入 config.toml 文件中，比如：

```yaml
[blackfriday]
    angledQuotes: true
    fractions: false
    plainIDAnchors: true
    extensions: ["hardLineBreak"]
```

Blackfriday 的详细配置信息可以参考 https://gohugo.io/getting-started/configuration/#configure-blackfriday

### 关于 Hugo 文件架构
Hugo 文件架构如下

>
├── archetypes  
├── assets  
├── config.toml  
├── content  
├── data  
├── layouts  
├── static  
└── themes  


相关的用途如下：

|文件名|用途|Hugo 进一步说明|
|:--|:--|:--|
|archetypes |文章模版|[Archetypes](https://gohugo.io/content-management/archetypes/)|
|assets |Hugo 管道资源|[Hugo Pipes Overview](https://gohugo.io/hugo-pipes/)|
|config.toml    |配置文件，可用格式 “toml/yaml/json”|[Configure Hugo](https://gohugo.io/getting-started/configuration/#all-variables-yaml)|
|content        |内容页面||
|data           |数据|[data template](https://gohugo.io/templates/data-templates/)|
|Layouts        |模板存储位置||
|static         |JavaScript、CSS、Image等静态文件存储||
|themes         |Hugo 主题存储地址||

### 关于创建默认文件
使用 `hugo new wiki/20181108-hugo-simple-guild.md` 将会在 **content/wiki/** 文件下创建一个名为 "20181108-hugo-simple-guild.md" 的文件，打开会出现如下内容：

```json
---
draft: true

title: "20181108 Hugo Simple Guild"
author: ""
date: 2018-11-08
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
|1.0|init|2018-11-08|

```

以上内容是定义在 "archetypes\default.md"，可能存放的位置为 网站目录或者是主题文件夹，Hugo 会先加载网站目录后加载主题文件，此
顺序也是 Hugo 模板解析的顺序。


### 关于内容格式
>Both HTML and Markdown are supported content formats.
>Markdown is the main content format and comes in two flavours: The excellent Blackfriday project (name your files *.md or set markup = "markdown" in front matter) or its fork Mmark (name your files *.mmark or set markup = "mmark" in front matter), both very fast markdown engines written in Go.

以上是关于 Hugo 支持的内容格式的说明，推荐使用 Markdown 语法，关于 Markdwon 语法请参考 [markdown 简易教程](https://yidaofeicn.github.io/softwareGit/markdown/)

另外关于 [Hugo ShortCode](https://gohugo.io/content-management/shortcodes/) 鄙人建议不要过分使用与配置，毕竟 Markdown 本身就是为了“易读易写”提出的








### 参考资料
[1][使用Hugo和Github搭建静态博客之填坑](http://blog.mingguilu.com/2016/12/14/%E4%BD%BF%E7%94%A8Hugo%E5%92%8CGithub%E6%90%AD%E5%BB%BA%E9%9D%99%E6%80%81%E5%8D%9A%E5%AE%A2%E4%B9%8B%E5%A1%AB%E5%9D%91/ "github发布地址BseURL应该为：https 开头")：Hugo 发布无样式 Bug：  
[2][主题极简激情：苏洋博客](https://soulteary.com/2017/06/28/welcome-to-hugo.html "比较 WordPress、Hexo、Hugo")  
[3][主题Material Design ](https://imys.net/20150513/wordpress-to-hexo.html)   
 

### 版本信息

|Version|Action |Time |
|:--:|:--:|:--:|
|1.0|init|2018-11-08|
 

 