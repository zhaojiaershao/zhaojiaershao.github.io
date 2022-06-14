(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{595:function(o,t,n){"use strict";n.r(t);var e=n(11),s=Object(e.a)({},(function(){var o=this,t=o.$createElement,n=o._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":o.$parent.slotKey}},[n("h1",{attrs:{id:"mongodb-基础使用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#mongodb-基础使用"}},[o._v("#")]),o._v(" mongodb 基础使用")]),o._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"title"},[o._v("导读")]),n("p",[o._v("MongoDB 是一个基于分布式文件存储的数据库。由 C++ 语言编写。 旨在为 WEB\n应用提供可扩展的高性能数据存储解决方案。 MongoDB\n是一个介于关系数据库和非关系数据库之间的产品，是非关系数据库当中功能最丰富，最像关系数据库的。")])]),n("h2",{attrs:{id:"安装"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[o._v("#")]),o._v(" 安装")]),o._v(" "),n("ol",[n("li",[o._v("我们使用社区免费版即可，"),n("a",{attrs:{href:"https://www.mongodb.com/try/download/community",target:"_blank",rel:"noopener noreferrer"}},[o._v("下载地址"),n("OutboundLink")],1),o._v("选择 sersion 版本，默认就好，os 选择我们的操作系统，我这里选择 window")]),o._v(" "),n("li",[o._v("双击安装程序，一路 next，"),n("strong",[o._v("需要注意的时左下角有一个 install mongoDB compass 把它勾掉")]),o._v("，这个是官方给出的一个图像化操作数据库软件，下载非常的慢，暂时不要。")]),o._v(" "),n("li",[o._v("安装好后，在浏览器输入 127.0.0.1:27017 看到一行英文说明安装成功")]),o._v(" "),n("li",[o._v("手动将 mongoDB 添加到"),n("strong",[o._v("环境变量")]),o._v("，方便我们开发和使用")])]),o._v(" "),n("h2",{attrs:{id:"基础使用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#基础使用"}},[o._v("#")]),o._v(" 基础使用")]),o._v(" "),n("ul",[n("li",[n("p",[o._v("环境变量添加好以后关闭所有之前的 cmd 窗口，然后重新开启一个 cmd 输入 mongo，就进入了我们的数据库，之所以重新打开 cmd，是因为 cmd 有缓存，"),n("strong",[o._v("它不会跟随系统去实时更新环境变量")]),o._v("。")])]),o._v(" "),n("li",[n("p",[o._v("简单解释一下：mongodb 这个名称，在下面开启服务和关闭服务都会用到，哪儿来的？是我们安装 mongodb 软件的时候，它有个一安装选择目录界面里自带的，实际上我们可以修改成别的名字，这个名字就是它服务的名字")])]),o._v(" "),n("li",[n("p",[o._v("mongo 命令启动的是 mongo.exe 这是客户端，用来操作数据库的")])]),o._v(" "),n("li",[n("p",[o._v("mongod.exe 这个是数据库的服务端")])])]),o._v(" "),n("h2",{attrs:{id:"cmd-命令"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#cmd-命令"}},[o._v("#")]),o._v(" cmd 命令")]),o._v(" "),n("ol",[n("li",[o._v("cmd 命令输入 mongo 回车 它启动的就是 mongo.exe")]),o._v(" "),n("li",[o._v("db：该命令是查看当前所在的数据库，默认第一个都是 test")]),o._v(" "),n("li",[o._v("show dbs：该命令是查看所有数据库")]),o._v(" "),n("li",[o._v("use.dbname：选择数据库，就算没有该数据库页可以")]),o._v(" "),n("li",[o._v('db.users.insert({name:"赵瑞波",age:"21"})：在数据库里插入一个文档，文档组成的 users 叫数据集合，如果不存在这个集合，当插入数据是会自动生成')]),o._v(" "),n("li",[o._v("db.users.find()：查询该集合里所有的文档数据")]),o._v(" "),n("li",[o._v("show collections 或 show tables：查看该数据库里的多少集合")]),o._v(" "),n("li",[o._v("【数据库 db】> 【集合 users】> 【文档数据】")]),o._v(" "),n("li",[o._v("删除文档：db.users.remove({'name':\"赵瑞波\"}) 查询条件")]),o._v(" "),n("li",[o._v("删除集合：db.users.drop()返回 true 就是删除成功，show tables 查看集合")]),o._v(" "),n("li",[o._v("删除数据库：db.dorpDatabase()此时，输入 show dbs 发现我们得 dbname 数据库不见了")]),o._v(" "),n("li",[o._v("退出数据库：ctrl+c 或者 输入 exit")]),o._v(" "),n("li",[o._v("更多 mongo 客户端命令操作可以去"),n("a",{attrs:{href:"https://www.runoob.com/mongodb/mongodb-dropdatabase.html",target:"_blank",rel:"noopener noreferrer"}},[o._v("菜鸟教程"),n("OutboundLink")],1)])]),o._v(" "),n("h2",{attrs:{id:"开启-mongodb"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#开启-mongodb"}},[o._v("#")]),o._v(" 开启 mongodb")]),o._v(" "),n("ol",[n("li",[o._v("window + x 选择 window powerShell (管理员)，输入 net start mongodb 2.必须是管理员模式的命令窗口才可以，否则会报错。\n如果在管理员模式下启动，报错为：\nError: couldn't connect to server…… connection attempt failed: SocketException: Error connecting to\n需要使用 mongod 重新服务。\ncmd 中：mongod --dbpath D:\\MongoDB\\Server\\3.2\\data 然后在 net start mongodb")])]),o._v(" "),n("h2",{attrs:{id:"关闭-mongodb"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#关闭-mongodb"}},[o._v("#")]),o._v(" 关闭 mongodb")]),o._v(" "),n("p",[o._v("net stop mongodb")])])}),[],!1,null,null,null);t.default=s.exports}}]);