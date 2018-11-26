---
draft: false

title: "搭建 shadowsocks 翻墙教程"
date: 2018-10-13
Keywords: ["shadowsocks 翻墙","科学上网"]
tags: ["科学上网"]
description: []
categories: ["软件技巧"]
toc: true
---



### 第一步 购买 VPS
如果纯粹作为翻墙使用建议购买 bandwagon  
具体的入口可以可以参考[搬瓦工 VPS](http://banwagong.cn/) ,选择最便宜的年 $ 19.99 方案（ KVM 架构）即可  

### 第二步 搭建 shadowsocks 服务器端
#### 进入 VPS 管理页面
MyService->服务器实例->kiwivm Control Panel  
![](http://149.28.41.198:8001/galleries/201809/bandwagon-kiwivm-control-panel.jpg )

#### 下载 Xshell
[Xshell-360](http://baoku.360.cn/soft/show/appid/101306) 

#### 终端安装 shadowsocks 服务器
Step 1：配置 xshell 登陆 IP 等   
Step 2：登陆默认管理员 root，初始密码可以通过 KiwiVM 中的 Root password modification 获取  
Step 3：安装 shadowsocks 服务器  

```batch
#ubuntu
apt-get install python-pip
apt-get install python-m2crypto
pip install shadowsocks

#centos
yum install epel-release
yum install python-pip
yum install python-setuptools m2crypto supervisor
pip install shadowsocks
```

Step 4：建立配置文件 shadowsocks.json
命令：`vi /etc/shadowsocks.json` 
输入以下内容 

```json
{
    "server":"45.32.15.178", //你VPS的IP地址
    "port_password":{
        "8388":"mima1", //端口号：密码
        "8389":"mima2" //端口号：密码
    },
    "timeout":600, //重连时间
    "method":"aes-256-cfb" //加密方式
}
```

#### 启动与终止 shadowsocks 服务器
命令行启动关闭重启

```batch
ssserver -c /etc/shadowsocks.json -d start 后台启动
ssserver -c /etc/shadowsocks.json -d stop 后台停止
ssserver -c /etc/shadowsocks.json -d restart 后台重新启动
```

### 第三步 Windows 等终端使用
下载对应的应用  
[shadowsocks client for windows](https://github.com/shadowsocks/shadowsocks-windows/releases/download/4.0.8/Shadowsocks-4.0.8.zip)    
[shadowsocks client for mac](https://github.com/shadowsocks/ShadowsocksX-NG/releases/download/v1.7.1/ShadowsocksX-NG.1.7.1.zip)    
[shadowsocks client for android](https://play.google.com/store/apps/details?id=com.github.shadowsocks)   
[shadowsocks client for ios](https://itunes.apple.com/cn/app/firstwingy/id1316416848?mt=8)  

然后将 IP 地址与端口密码输入进去即可

### 版本信息
|日期|调整内容|
|:--|:--|
|2018年10月13日|初创|
 