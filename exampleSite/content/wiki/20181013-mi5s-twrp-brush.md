---
draft: false

title: "小米5S TWRP 刷机教程"
date: 2018-10-13
Keywords: ["小米 5S","twrp 刷机"]
tags: [""]
description: []
categories: ["软件技巧"]
articleCover: "/image/beauty.jpg"
toc: true
---



以下所有的操作全部是基于 Mi5S

### TWRP 刷入第三方 ROM
此方法主要是用于如 MIUI 俄罗斯、魔趣等第三方 ROM  

【注意】：Mi5S 等官方有 Bootloader 锁的机型请先向官方申请解锁，未解锁的手机是无法透过 Fastboot 对手机刷入 Recovery 的  
解锁请参考文章：http://www.miui.com/unlock/

以下为正式操作部分：  
Step 1：下载相关的操作软件：     
ADB：https://dl.google.com/android/repository/platform-tools-latest-windows.zip  
TWRP：https://twrp.me/xiaomi/xiaomimi5s.html  

如为其他机型可以在[设备列表](https://twrp.me/Devices/)中搜索选择对应的型号下载即可  

Step 2：将手机用 USB 线连接电脑，并按住 `“音量-”+“电源键”` 进入  `Fastboot 模式`（一只米兔在修理 Android 机器人）  
Step 3：解压 `platform-tools` 文件，并通过命令行操作窗口进入此文件夹  
Step 4：执行相关的命令  

```batch
fastboot devices
//出现如xxxxxxxx fastboot
fastboot flash recovery *映像檔路徑*  
//如fastboot flash recovery C:\twrp-3.0.2-0-aries.img
//出现Finished,total time...表示成功
>fastboot reboot
```

Step 5： 
关机后长按 `电源键及“音量+”` 即可进入 TWRP  
如实在不行则重新操作一遍，最后命令改为 `fastboot boot *映像檔路徑* ` 即可  

此处官方解释为：  

>Note many devices will replace your custom recovery automatically during first boot. To prevent this, use Google to find the proper key combo to enter recovery. After typing fastboot reboot, hold the key combo and boot to TWRP. Once TWRP is booted, TWRP will patch the stock ROM to prevent the stock ROM from replacing TWRP. If you don't follow this step, you will have to repeat the install.

Step 6：  
双清，将相关的镜像文件 COPY 至手机存储，安装时选择此镜像等待即可  

参考链接：  
[小米5splus刷入TWRP recovery以及MIUI去广告](https://www.jianshu.com/p/c348d419023b)   
[TWRP for Xiaomi Mi 5s](https://twrp.me/xiaomi/xiaomimi5s.html)



### MIUI 其他版本
俄罗斯版本：与国内版本同步，内嵌应用只有小米视频、小米音乐、浏览器等其他官方的一些应用，Google 只有 Google Play  
官方网站地址：https://miui.su  
百度分流：https://pan.baidu.com/s/1Ir8rjUWIaCC1hQ1lefrFQw   
【注意】俄罗斯版本必须翻墙，且直接用浏览器下载速度较快，以上链接仅适 Mi5S  


国际版本：相比较俄罗斯版本最大的问题就是多了 Google 全家桶  
官方网站地址：http://en.miui.com  

英国版本：与俄罗斯类似  
官方网站地址：https://miuipolska.pl  


### 版本信息
|日期|调整内容|
|:--|:--|
|2018年10月13日|初创|
 