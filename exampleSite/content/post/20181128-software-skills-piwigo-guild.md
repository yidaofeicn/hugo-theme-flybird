---
draft: false

title: "自建图床 Piwigo 建议教程"
date: 2018-11-28
Keywords: ["开源","图床","自建"]
categories: ["软件技巧"]
tags: ["个人建站","开源软件"] 
---


Piwigo是一个开源项目，允许您在网络上创建自己的照片库并上传照片并创建新相册。 该平台包含一些内置的强大功能，如相册，
标签，水印，地理位置，日历，系统通知，访问控制级别，主题和统计信息。

**Piwigo 相比 chevereto 等图床而言**的特点在于以下两点：

1. 相册与 FTP 上传的文件系统同步架构
2. 图片上传后外链的文件名不变

以上两个特点相信很多自建站的站长能够理解有多重要！

![](https://piwigo.yidaofei.com/galleries/201809/piwigo-photo-gallery.png)



<!--more-->



### LAMP 基础环境搭建
Piwigo 使用的基础要求是：

1. 一个具有注册域名的专用VPS
2. 最小安装的CentOS 7服务器
3. 安装在CentOS 7中的LAMP

前两个要求请大家自行选择 VPS 完成，推荐 bandwagon 或 vultr，本章节主要解决最后一个需求搭建 LAMP 环境 ，如你已经搭建好 LAMP 环境则可直接跳
到 Piwigo 具体使用章节。

首先解释以下：LAMP 具体是指 Linux、Apache服务器，MySQL（或MariaDB） 和PHP（或Perl或Python）组合成的一个 WEB应用平台，

关于 LAMP 搭建有两种方式：手工方式和宝塔面板方式，前者请具体访问[Piwigo 自建图库](https://yidaofeicn.github.io/gitbook-software/piwigo/)，本文主要以
[宝塔面板](http://www.bt.cn/)为主说明


安装宝塔界面的命令请访问此网址：https://www.bt.cn/bbs/thread-19376-1-1.html 

本人使用的 CentOS 7

```batch
#安装宝塔面板
yum install -y wget && wget -O install.sh http://download.bt.cn/install/install_6.0.sh && bash install.sh
```

安装完成后访问： http://VPS_IP:8888 ，安装对应的 LAMP 并配置 Piwigo 需要的数据库与 FPT 

### 安装 Piwigo
#### 预备动作
下载解压 Piwigo

```batch
# wget http://piwigo.org/download/dlcounter.php?code=latest -O piwigo.zip
# ls 
# unzip piwigo.zip 
```
 
将 piwigo 源文件发送到 /www/wwwroot/ 文件并赋予相关权限即可

```batch
# cp -rf piwigo /www/wwwroot/
# chown -R 777 /www/wwwroot/piwigo
```

#### 执行安装程序
浏览器地址栏输入 http://VPS_IP/ ，出现如下图

![](https://piwigo.yidaofei.com/galleries/201809/piwigo-installation-configuration.png)

输入前面建立的数据库配置以及管理员账户、后台操作界面语言；安装完成后，点击访问图库按钮以重定向到 Piwigo 管理面板。

### FTP 上传图片及获取外链
1. FTP 将图片上传到 Piwigo/galleries，注意图片名称必须为由字符 a-z、A-Z、0-9、"-"、"_" 或 "/" 组成。但不能是纯数字或以数字开头后面紧跟"-"
2. 后台操作界面->工具-同步
3. 点开图片，注意规格选择“原始尺寸”，右键“复制图片地址”即可获得外链



### Piwigo 技巧
1. 主题推荐使用 “Bootstrap Default ” 美观大方
2. 上传图片建议使用 FTP 方式上传—— **保留文件目录组织方式与原始文件名**（名字必须为由字符 a-z、A-Z、0-9、"-"、"_" 或 "/" 组成。但不能是纯数字或以数字开头后面紧跟"-"）
3. 如图片链接出现的文件名与 **FTP 上传** 原始文件名不一致，请查看使用的 **是否是原始大小** 

### 参考资料
[1][Piwigo - 创建您自己的照片库网站](https://www.howtoing.com/install-piwigo-photo-gallery-in-centos)
 

### 版本信息

|Version|Action |Time |
|:--:|:--:|:--:|
|1.0|init|2018-11-28|
 

 