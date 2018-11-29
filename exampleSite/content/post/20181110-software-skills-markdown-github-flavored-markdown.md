---
draft: false
type: "post" 

title: "Markdown 语言教程——GFM"
author: "@yidaofeicn"
date: 2018-11-10
Keywords: ["GFM","markdown"]
categories: ["软件技巧"]
tags: ["辅助语言"]

---

## Markdown简易教程
Markdown 是一种可以使用普通文本编辑器编写的标记语言，通过简单的标记语法实现「易读易写」。

### markdown 与 html 
Markdown 的语法有个主要的目的：用来作为一种网络内容的写作语言   

Markdown 不是要来取代 HTML，甚至也没有要和他相似，他的语法种类不多，只和 HTML 的一部分有关系，他的重点不是
要创造一种更容易写作 HTML 的语法，我认为 HTML 已经很容易写了，Markdown的重点在于，他能让文件更加容易阅读，
编写。  

**HTML 是一种发布的格式，Markdown 是一种编写的格式**，因此，Markdown 的格式语法只涵盖文字可以涵盖的范围。
不在Markdown 涵盖范围之外的标签，都可以直接在文件中用 HTML 撰写，不需要额外标注这是 HTML 或是 Markdown 
只要直接加标签就可以了。 

只有区块元素如`<div></div>`等标签，必须在前后加空行，以利于内容区隔。而且这些元素的开始结束标签，不可以用 Tab 或空白来缩排。Markdown 的生产器有智慧型判断，可以避免在区块前后加上没必要的 `<p>` 标签。  

举例来所，在 Markdown 文件加上一段 HTML 表格：
 
```html
This is a regular paragraph.

<table>
    <tr>
        <td>Foo</td>
    </tr>
</table>

This is another regular paragraph.
```

请注意，Markdown 语法在 HTML 区块标签中将不会被进行处理——例如你无法在 HTML 区块内使用 Markdown 形式的 `**情调**` 。
HTML的区段标签如 `<span>`、`<cite>`、`<del>` 則不受限制，可以在 Markdown 的段落、清单或是标题内任意使用。

依照個个人习惯，甚至可以不用 Markdown格式，而采用 HTML 标签來格式化。举例说明：如果比较喜欢 HTML 的 `<a>` 或 `<img>` 标签，可以直接使用这些标签，而不用 Markdown 提供的链接或是图像标签语法。
HTML区段标签和区块标签不同，在区段标签的范围內，Markdown的语法是有效的。

PS：以上内容全部 COPY 于[原生 markdown 基础语法-繁体版](https://markdown.tw/)概述部分，感觉说的很透！

<!--more-->

### Markdown 语法版本问题
Markdown 语法最早由 John Gruber 于2004年创立。为了衍生版本 markdoon 区别，这里将其称为原生 Markdown。  

自2004年后创始人John Gruber 就没有更新过 Markdown，而原生 Markdown 很多功能都不具备（如表格、脚注、内嵌 HTML 
等等)，所以在原生 Markdown 基础之上衍生出不同的版本，称之为衍生版。

这些衍生版本要么基于工具如 wiz 笔记;要么基于网站如 GitHub ，在语法上基本兼容，但在一些语法和渲染效果上有改动。
所以一定要注意你使用的是 **哪种语法 **，否则会引发 **部分内容效果千差万别** 的情况，比如最明显的换行问题

其中由于 github 在程序猿界中的影响力，`GFW（GitHub Flavored Markdown）`应用最为广泛！所以本文主要介绍的
 Markdown 语法为 `GFW语法`

****** 

## Markdown 编辑器清单
本人只用过 Cmd markdown 与 sublime text2+markdown-editing，两者主要的特点是：

1. cmd markdown 网页版、跨平台、可同步、所见即所得，但是最大的问题是 **换行语法与GFM完全不同**
2. sublime text2+markdown-editing 最好最轻的 IDE、跨平台、定制度高、书写体验极高、无法同步，与 **GFM语法一致**

以上两个最终是采用后者，主要的考虑是

1. 本身有一定的代码开发要求，cmd markdown就是纯粹的m markdown 编辑器，不想多装软件
2. sublime 本身的性能极高（快捷键就是一大神器 :smile: ）
3. 今后所有的输出以 Gitbook+GithubPage 整理后输出，markdown 语法必须与`GFM语法`一致

以下是网络上关于 Markdown 编辑器的一些推荐文章整理而得，请大家自己选择！

|名称|应用平台|特点|
|:--|:--|:--|
|[简书](https://www.jianshu.com/p/q81RER)             |网络     |极简（基础MD语法）、论坛类型        |
|[wiz笔记](http://www.wiz.cn/feature-markdown.html)   |跨平台   |文件名要求、基础插件足、样式少难看    |
|[Cmd Markdown](https://www.zybuluo.com/mdeditor)     |跨平台   |基础插件足、样式好看、所见即所得     |
|[小书匠编辑器](http://markdown.xiaoshujiang.com/)     |跨平台   |加载慢、插件最足、代码通用性低       |
|[FarBox](http://help.farbox.com/read/basic-writting) |跨平台   |自建博客论坛、基础插件足            |
|[ReText](https://pkgs.org/download/retext)           |跨平台   |极简（基础MD语法）、自我配置        |
|[MWeb](http://zh.mweb.im/)                            |Mac     |无评测无体验|
|[Ulysses](http://www.ulyssesapp.com/)                 |Mac     |无评测无体验|
|[Mou](http://25.io/mou/)                              |Mac     |一度很火|
|[MacDown](http://macdown.uranusjr.com/)               |Mac     |开源且免费|
|[Miu](http://www.appinn.com/miu-markdown-editor/)     |windows |Mou模仿者，精品|
|[MarkPad](http://code52.org/DownmarkerWPF/)           |windows |无评测无体验|
|[markdownpad](http://markdownpad.com/)                |windows |无评测无体验|

PS:

1. 与 sublime 类似的有 Atom，轻量 IDE，需要自己配置相关的插件
2. 与 wiz 笔记类似的马克飞象、有道云笔记等

如需要具体了解可以参考文章[Markdown 编辑器推荐](https://github.com/wizardforcel/markdown-simple-world/blob/master/1.md)，建议大家选择时期遵循以下原则：

1. 编写语法基本与GFM一致
2. 插件与特性如果是有关于内容编辑方向的，比如说加入视频不建议使用——通用性太低太底（编辑器一定会自定义相关语法，此语法解析依赖于编辑器） 

******

## GFM 语法不同之处
GitHub 全站支持 “GitHub 风格的 Markdown 语法”（简称 GFM），你可以用它来书写 issue、pull request（以下简称 “PR”）
和各种评论。它和  **标准 Markdown 语法（SM）**相比，存在一些值得注意的差异，并且增加了一些额外功能。 

如果你对 Markdown 还不是很熟悉，可以先看一眼 [Markdown 基础语法-简体版](https://github.com/riku/Markdown-Syntax-CN/blob/master/syntax.md)。
如果你想了解在书写 issue、评论和 PR 描述时有哪些技巧（比如任务清单这样的高级功能），你应该读一下 [GFM技巧(issue 评论 RP) ](https://github.com/baixing/FE-Blog/issues/5)

### 忽略单词中的多个下划线
Markdown 会把所有成对的下划线`（_）`转换为斜体，但 GFM 不会处理单词内的那些下划线，比如这些：  

```markdown
wow_great_stuff  
do_this_and_do_that_and_another_thing.   

```

这样一来，那些采用下划线作为分隔符的代码或名字就可以正确渲染了。如果你确实要把单词中的某一部分设置为斜体，可以
使用星号`（*）`。

### 增加链接自动识别
GFM 会自动为标准的 URL 加上链接，因此，如果你只想链接到一个 URL（而不想设置链接文字），那你直接输入这个 URL 就可以了，它将被自动转换为一个链接。（译注：Email 地址也适用于此特性。）

```markdown
http://example.com
```

将被渲染为：  http://example.com

### 增加删除线
GFM 增加了删除线语法，补上了标准 Markdown 在这方面的不足。  

```markdown
~~Mistaken text.~~
```

将被渲染为：  ~~Mistaken text.~~

### 增加围栏式代码块
标准 Markdown 会把每行前面空四格的文本块转换为代码块；GFM 同时还支持围栏式代码块。只要把你的代码块包裹在三个 ``` ` ``` 之
间就行了（如下所示），你再也不需要通过无休止的缩进来标记代码块了。

请注意，虽然围栏式代码块语法并不需要在头部插入空行（缩进式代码块语法是需要的），但我们仍然建议你 **留出空行**，因为这样可以令 Markdown 源码的可读性更好。

      
        Here's an example:

        ```javascript
        function test() {
            console.log("notice the blank line before this function?");
        }
        ```
     
        Here's an example:

请留意，**列表中的代码块需要缩进 8 个空格**，才会被正确地渲染。

### 增加语法高亮
关于代码块的技巧还不止于此，你还可以为代码块指定语法着色效果。在围栏式代码块中，你可以指定一个可选的语言标识符，
然后我们就可以为它启用语法着色了。比如说，这样可以为一段 Ruby 代码着色：
    
```ruby
require 'redcarpet'
markdown = Redcarpet.new("Hello World!")
puts markdown.to_html
```

我们使用 [Linguist](https://github.com/github/linguist) 来进行语言识别和语法着色。你可以在语言 
[YAML 文件](https://github.com/github/linguist/blob/master/lib/linguist/languages.yml) 中查证哪些语言标识符是有效的。


### 增加表格
把一系列文本精心组织起来，我们甚至可以得到一个表格。我们需要把表头的那一行用一串横杠 `（-）`隔出来，然后把每一列
用竖杠`（|）`隔开：  

```markdown  
First Header  | Second Header
------------- | -------------
Content Cell  | Content Cell
Content Cell  | Content Cell
```

出于美观的考虑，你也可以在表格的两端都加上竖杠：

```markdown  
| First Header  | Second Header |
| ------------- | ------------- |
| Content Cell  | Content Cell  |
| Content Cell  | Content Cell  |
```

请注意，用于分隔列的竖杠并不需要跟表头严格对齐：

```markdown  
| Name | Description          |
| ------------- | ----------- |
| Help      | Display the help window.|
| Close     | Closes a window     |
```

同时，你也可以在单元格内使用那些行内 Markdown 语法，比如加链接、加粗、加斜体或加删除线等等：

```markdown  
| Name | Description          |
| ------------- | ----------- |
| Help      | ~~Display the~~ help window.|
| Close     | _Closes_ a window     |
```

最后别忘了，给表头下的各段横线加上冒号`（:）`，还可以指定各列文本的对齐方式：  
 
```markdown     
| Left-Aligned  | Center Aligned  | Right Aligned |
| :------------ |:---------------:| -----:|
| col 3 is      | some wordy text | $1600 |
| col 2 is      | centered        |   $12 |
| zebra stripes | are neat        |    $1 |
```

在横线最左侧加冒号表示该列一律左对齐；在横线最右侧加冒号表示该列一律右对齐；在横线两端加冒号表示该列一律居中
对齐。

### 增加任务清单
列表可以被转换为任务清单，只需要为列表项的开头加上 `[ ]` 或 `[x]` 即可（分别表示未完成和已完成）。 

```markdwon
- [x] 支持 @提到某人、#引用、[链接]()、**格式化** 和 <del>HTML 标签</del> 等语法
- [x] 需要使用列表语法来激活（无序或有序列表均可）
- [x] 这是一个已完成项目
- [ ] 这是一个未完成项目
```


- [x] 支持 @提到某人、#引用、[链接]()、**格式化** 和 <del>HTML 标签</del> 等语法
- [x] 需要使用列表语法来激活（无序或有序列表均可）
- [x] 这是一个已完成项目
- [ ] 这是一个未完成项目

任务清单还可以嵌套，以便更好地组织任务：

```markdwon
- [ ] 一个大工程
      + [ ] 第一项子任务 #1234
      + [ ] 接下来的子任务 #4321
      + [ ] 最后一项子任务 cc @mention
- [ ] 一项单独的任务
```


- [ ] 一个大工程
      + [ ] 第一项子任务 #1234
      + [ ] 接下来的子任务 #4321
      + [ ] 最后一项子任务 cc @mention
- [ ] 一项单独的任务

### 增加表情
GFM 语法支持添加 emoji 表情，输入不同的符号码（两个冒号包围的字符）可以显示出不同的表情。
比如`:smile:`，可以显示 :smile:。

具体每一个表情的符号码，可以查询GitHub的官方网页[http://www.emoji-cheat-sheet.com](http://www.emoji-cheat-sheet.com)。

### 增加diff
版本控制的系统中都少不了diff的功能，即展示一个文件内容的增加与删除。
GFM中可以显示的展示diff效果。使用绿色表示新增，红色表示删除。

其语法与代码高亮类似，只是在三个反引号后面写diff，
并且其内容中，以 `+ `开头表示新增，`- `开头表示删除。

代码如下：

    ```diff
    + 鸟宿池边树，僧敲月下门
    - 鸟宿池边树，僧推月下门
    ```

呈现的效果如下：

```diff
+ 鸟宿池边树，僧敲月下门
- 鸟宿池边树，僧推月下门
```


### 增加HTML
在 README、issue 和 PR 中，你还可以使用有限的一些 HTML 语法。
关于可用的标签和属性有哪些，你可以在 [github/markup](https://github.com/github/markup) 这个项目中找到一份完整的清单。

******

## GFM语法解析
![](https://raw.githubusercontent.com/yidaofeicn/softwareGit/master/img/markdown/markdownStruct.png)

Markdown将语法分成区块元素和行内元素：

1. 区块元素：段落、标题、区块引用、列表、表格、区块代码、分隔线：用来定义内容，提供框架
2. 行内元素：链接、强调（粗体和斜体、删除线）、行内代码、图片、表情：提供实质内容

### 区块元素
#### 段落与文本
>一个 Markdown 段落是由一个或多个连续的文本行组成，它的前后要有一个以上的空行（空行的定义是显示上看起来像是空的，
便会被视为空行。比方说，若某一行只包含空格和制表符，则该行也会被视为空行）。普通段落不该用空格或制表符来缩进。  
“由一个或多个连续的文本行组成”这句话其实暗示了 Markdown 允许段落内的强迫换行（插入换行符），这个特性和其他大部
分的 text-to-HTML 格式不一样（包括 Movable Type 的「Convert Line Breaks」选项），其它的格式会把每个换行符都转
成 `<br /> `标签。

一个文本行指 **连续两个换行之间的内容**，并非指最终显示所看到的行。简单说，手动换行才叫一行，自动换行形成的不叫
一行。
段落由一个或多个连续文本行组成，两个段落间 **由空行分开**

知道这些就可以用来 **调整文档的疏密**。段落间的间距比较宽，如果希望文档密一点，多使用强制换行，如果希望文档优雅整齐
一点，可以多用段落。

#### 标题
Markdown 支持两种标题的语法，`类[Setext]`和`类[atx]`形式：

1. `类 Setext形式`：是用底线的形式，利用 `=` 和 `-`，只能支持2级别标题
2. `类 Atx 形式`：在行首插入 1 到 6 个 `#` ，支持6级别标题

#### 区块引用
Markdown 标记区块引用是使用类似 email 中用 `>` 的引用方式。在需要用到引用的地方加上`>` 即可  

每行都加`>`:  

```markdown
> This is a blockquote with two paragraphs. Lorem ipsum dolor sit amet,
> consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus.
> Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.
> 
> Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse
> id sem consectetuer libero luctus adipiscing.
```

嵌套使用，并嵌入其他 Markdown 语法：

```markdwon
> ## 这是一个标题。
> 
> 1.   这是第一行列表项。
> 2.   这是第二行列表项。
> 
>> 给出一些例子代码：
> 
>     return shell_exec("echo $input | $markdown_script");
```


#### 列表
原生 Markdown 支持有序列表和无序列表

##### 无序列表
无序列表使用星号、加号或是减号作为列表标记：

```markdwon
*   Red
*   Green
*   Blue

+   Red
+   Green
+   Blue

-   Red
-   Green
-   Blue
```

##### 有序列表
有序列表则使用数字接着一个英文句点：

```markdwon
1.  Bird
2.  McHale
3.  Parish
```

列表的使用需要注意以下事项：

1. 列表项目标记后接空格
2. 有序列表作为列表标记的数字不影响最后输出结果
3. 列表项目里的文本行可以用最多3个空格进行缩进对齐，但是不影响最后输出
4. 如果两个列表项目间被空行分开，那么这两个列表项目会识别为段落，间隔变大
5. 可以嵌套列表（文档没描述，实际可行、段落、区块引用，方法为每行行首使用4个空格或1个制表符（Tab进行缩进）
6. 嵌套的段落可以只在首行使用4个空格或1个制表符（Tab缩进）
7. 如果不希望数字-英文句号-空格被识别为列表，可以再英文句号前加入反斜杆\。


##### 任务清单
原生 Markdown 无表格功能，此为 GFM 语法扩展，具体请看 `《GFM 语法不同之处-增加任务清单》`

#### 表格
原生 Markdown 无表格功能，此为 GFM 语法扩展，具体请看 `《GFM 语法不同之处-增加表格》`

#### 区块代码
和程序相关的写作或是标签语言原始码通常会有已经排版好的代码区块，通常这些区块我们并不希望它以一般段落文件的方式
去排版，而是照原来的样子显示，Markdown 会用 `<pre>` 和 `<code>`标签来把代码区块包起来。

原生 Markdown 语法是缩进 4 个空格或是 1 个制表符，GFM 语法则改为使用 *围栏式代码块*。段落间的间距比较宽，如果希望文档密一点，多使用强制换行，如果希望文档优雅整齐

原生 Markdown 语法：

    public class HelloWorld {
        public static void main(String[] args){
            System.out.println("Hello World!");
        }
    }

另外还有语法高亮，具体请参考[《GFM 语法不同之处-增加围栏式代码块、增加语法高亮](gfm-difference.md)

建议 **使用围栏式代码块**，围栏式代码比缩进式代码有太多优势：

1. 围栏式代码有明确的开始和结束标识，而缩进式采用的Tab不是明确的开始标识；
2. 围栏式代码可以定义代码种类并高亮语法，而缩进式不能；
3. 缩进式代码与嵌套列表的共用一个Tab作为语法，容易出现错误；
4. 为知的缩进式代码已经出现错误了；
5. 缩进一时爽，修改难上天。

#### 分隔线
你可以在一行中用三个以上的星号、减号、底线来建立一个分隔线，行内不能有其他东西。你也可以在星号或是减号中间插入
空格。下面每种写法都可以建立分隔线：

```markdwon
* * *

***

*****

- - -

---------------------------------------
```

**建议使用三个星号书写分割线**，因为这样最安全、也最方便。原因有以下2个：

1. 下划线需要切换英文才能输入，不够星号来得方便直接；
2. 减号与次阶Setext标题共用同一个语法，不够安全；


******

### 行内元素
#### 链接
Markdown 支持两种形式的链接语法： *行内式*和 *参考式*两种形式。

不管是哪一种，链接文字都是用 [方括号] 来标记。

##### 行内式
行内式链接：只要在方块括号后面紧接着圆括号并插入网址链接即可，可在网络地址后用 **双引号** 将 title 文字包起来。

```markdwon
//绝对路径
以上内容全部 COPY 于[原生 markdown 基础语法-繁体版](https://markdown.tw/)概述部分，感觉说的很透！
//相对路径-主要用于引用服务器本机资源
具体请看[《GFM 语法不同之处-增加表格》](gfmDiff.md)
```
 
##### 参考式
参考式链接：是在链接文字的括号后面再接上另一个方括号，而在第二个方括号里面要填入用以辨识链接的标记：

```markdwon
请访问[知乎][zhihu]网站，与我沟通相关的情况
```

接着，在文件的任意处，你可以把这个标记的链接内容定义出来：

```markdwon
[zhihu]: http://www.zhihu.com  "中国论坛"
```

##### 直链
原生 Markdown 支持以比较简短的自动链接形式来处理网址和电子邮件信箱，只要是用尖括号包起来， Markdown 就会自动
把它转成链接。一般网址的链接文字就和链接地址一样，例如：

```markdwon
    <http://example.com/>
```

GFM 语法在这上面更进一步——除去尖括号！

```markdwon
    http://example.com/
```

关于以上链接的使用方法，建议是如果链接的 **复用性不高**则使用 **行内式**，因为参考式命名麻烦后续修改多一步骤，
反之则使用 **参考式**，另外关于直连推荐使用 GFM 语法！

#### 强调（粗体和斜体、删除线）
Markdown 使用星号（`*`）和底线（`_`）作为标记强调字词的符号，被 `*` 或 `_` 包围的字词会被转成用 `<em>` 标签
    包围，用两个 `*` 或 `_` 包起来的话，则会被转成 `<strong>`，例如：

```markdwon
*single asterisks*
_single underscores_
**double asterisks**
__double underscores__

```
会转成：

```html
<em>single asterisks</em>
<em>single underscores</em>
<strong>double asterisks</strong>
<strong>double underscores</strong>
```

你可以随便用你喜欢的样式，唯一的限制是，你用什么符号开启标签，就要用什么符号结束。

GFM语法 在行内文字样式上增加一种样式“删除线”，具体介绍请看[《GFM 语法不同之处-增加删除线](gfm-difference.md)

#### 行内代码
如果要标记一小段行内代码，你可以用反引号把它包起来（`` ` ``），例如：

```markdwon
    Use the `printf()` function.
```

会产生：

```html
    <p>Use the <code>printf()</code> function.</p>
```

#### 图片
Markdown 使用一种和链接很相似的语法来标记图片，同样也允许两种样式： *行内式*和 *参考式*

##### 行内式
行内式的图片语法看起来像是：

```markdwon
    !![](https://raw.githubusercontent.com/yidaofeicn/softwareGit/master/img/markdown/markdownStruct.png)

    ![](../img/markdown/markdownStruct.png)
```

直观的讲就是“行内式链接”之前加上一个 **！**

#### 参考式
参考式的图片语法则长得像这样：

```markdwon
![markdownStruct.png][id]
```

**id** 是图片参考的名称，图片参考的定义方式则和连结参考一样：

```markdwon
[markdownStruct]: https://raw.githubusercontent.com/yidaofeicn/softwareGit/master/img/markdown/markdownStruct.png  "markdown 语法结构"
```

#### 表情
原生 Markdown 无表情功能，此为 GFM 语法扩展，具体请看[《GFM 语法不同之处-增加表情》](gfm-difference.md)

#### 转义
Markdown 可以利用反斜杠来插入一些在语法中有其它意义的符号，例如：如果你想要用星号加在文字旁边的方式来做出强调
效果（但不用 `<em>` 标签），你可以在星号的前面加上反斜杠：

    \*literal asterisks\*

Markdown 支持以下这些符号前面加上反斜杠来帮助插入普通的符号：

|符号|含义|
|:--|:--|
|\      | 反斜线       |
|`      | 反引号       |
|*      | 星号        |
|_      | 底线        |
|{}     |花括号        |
|[]     |方括号        |
|()     |括弧     |
|##      | 井字号       |
|+      | 加号        |
|-      | 减号        |
|.      | 英文句点  |
|!      | 惊叹号       |

******

##   markdown小技巧
###   标题锚点
####   规则项
**本段规则项转载[Github 中 Markdown 锚点链接如何写](https://my.oschina.net/antsky/blog/1475173) ，如有侵权请告知会及时处理**  

规则1：任意 1-6 个 ###   标注的标题都会被添加上同名的锚点链接

```
    [标题1](#标题1) 
    [标题2](#标题2) 
    [标题3](#标题3) 

    ###   标题1
    ###   标题2
    ####   标题3
```

规则2：锚点跳转的标识名称，可使用任意字符，大写字母要转换成小写  

```
    [Github标题1](#github标题1)

    ####   Github标题1
```

规则3：多单词锚点的空格用 - 代替

```
    [Github 标题2 Test](#github-标题2-test)

    ####   Github 标题2 Test
```

规则4：多级序号需要去除 .

```
    [2.3. Github 标题](#23-github-标题)

    ####   2.3. Github 标题
```

规则5：非英文的锚点字符，在单击跳转时，在浏览器的 url 中会按照规则进行 encode 和 decode

####   内部实现原理
**本段规则项转载[GFM 与 Redcarpet 的不同点](https://mazhuang.org/2015/12/05/diff-between-gfm-and-redcarpet/#%E6%8D%A2%E8%A1%8C)，如有侵权请告知会及时处理**  

GFM 的 TOC 链接处理实现[Toc_filter](https://github.com/jch/html-pipeline/blob/master/lib/html/pipeline/toc_filter.rb)  

使用 Ruby 的正则表达式 `/[^\p{Word}\- ]/u` 过滤掉所有中英文标点符号、特殊符号等，将空格替换为 -。  

如果相同的链接 id 已经存在了，那在链接 id 后面添加 `-{num}`，比如标题 `hello,world` 生成链接 `#helloworld`，而标题 `hello!world` 生成链接 `#helloworld-1`。

###   换行
首先了解以下什么是 **续行为段功能**：

>为什么续行为段功能很重要?
续行为段，换一种说法就是忽略非空白行后面的换行符。这个功能很重要。如果没有这个功能，则一段文字就是一个很长很长
很长的行，这对基于文本行比较的自动化工具（比如 diff）来说，无疑是一个致命的打击。对于可以显示行号的编辑器来讲，
行号也会很跳跃，让人看着不舒服。不过最重要的，就是用户永远也不知道那个换行究竟是它自己加上去的，还是因为电脑屏
幕不够宽而自动换的行。  
所以无论是 Markdown 还是 LaTeX，都允许作者在源代码中任意换行，只要多行文字中没有空白行分割，就会把这些行合并
成一个段落。在 Markdown 中如果要换行，则需在上一个行的末尾增加至少两个空格，而 LaTeX 也允许用户使用\\手动换行

有部分的网络资料提到 GFM语法 **支持回车换行**，但是在实际使用过程中发现还是得使用 **两个空格或空一行方式** 才能换
行，最后查找资料发现最原始的说法是：

>链接：https://roachhd.gitbooks.io/master-markdown/content/flavours/github/writing-on-github.html  
Issues, comments, and pull request descriptions are written using GitHub Flavored Markdown along with some additional features to make writing content on GitHub easy.
Markup  
Newlines  
The biggest difference with writing on GitHub is the way we handle linebreaks. With Markdown, you can
hard wrap paragraphs of text to have them combine into a single paragraph. We find this causes a 
huge number of unintentional formatting errors. In comments, GitHub treats newlines in paragraph-like
content as real line breaks, which is usually what you intended.

所以结论是此类换行方式（回车换行）仅限于 “Issues, comments, and pull request descriptions”


## 参考资料
[1][原生 markdown 基础语法-繁体版](https://markdown.tw/)  
[2][原生 Markdown 基础语法-简体版](https://github.com/riku/Markdown-Syntax-CN/blob/master/syntax.md)   
[3][GFM 语法不同之处](https://github.com/baixing/FE-Blog/issues/6)：与原生 Markdown 区别主要文章   
[4][GFM 语法不同之处-英文版](https://roachhd.gitbooks.io/master-markdown/content/flavours/github/README.html)  
[5][GGFM 语法不同之处 Flavored Markdown)与标准Markdown的语法区别](https://www.cnblogs.com/36bian/p/7568015.html)：与 原生 Markdown 区别文章，条理性强  
[6][GitHub 上的书写方式](https://github.com/baixing/FE-Blog/issues/5)：评论区特点讲解较多   
[7][GitHub 上的书写方式-英文版](https://roachhd.gitbooks.io/master-markdown/content/flavours/github/writing-on-github.html)：原稿表达更加准确  
[8][Github Flavored Markdown 语法介绍 ](https://github.com/guodongxiaren/README)  
[9][好用的 Markdown 编辑器一览-月光博客](http://www.williamlong.info/archives/4319.html)  
[10][不同的 Markdown 语法](https://sspai.com/post/37270)：比较 Markdown 语法的异同,了解历史  
[11][少为人知的Markdown基础知识](https://sspai.com/post/37273)  
[12][不同的Markdown语法](https://sspai.com/post/37270)  
 
## 版本信息

|Version|Action |Time |
|:--:|:--:|:--:|
|1.0|init|2018-11-10|
 

 