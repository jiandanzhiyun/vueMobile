# vueMobile
移动端前端框架 /可用于pc端+element ui (public/index.html)下删除移动适配js即可

基于 Vue + Ant+axios 移动前端框架。


## 安装步骤


npm install         // 安装项目依赖，等待安装完成之后，安装失败可用 cnpm 或 yarn

// 开启服务器npm run serve，浏览器访问 http://localhost:3201


// 执行构建命令，生成的dist文件夹放在服务器下即可访问
npm run build
## 服务请求说明
为了方便合作开发,服务请求统一管理 所有服务请求都在api/index.js下进行 可根据需要新建

## 日期格式的封装
utils/date.js
## 引用方式
import { formatDate } from "utils/date.js";

formatDate(e, "yyyy-MM-dd");
## 不定期更新 为了自己开发方便而已 ^_^
## 求 star ^_^^_^^_^^_^^_^
## base.css 
 //写了一部分常用的基础样式
 ## 关于VueX
 //VueX是适用于在Vue项目开发时使用的状态管理工具
 //如果在一个项目开发中频繁的使用组件传参的方式来同步data中的值，一旦项目变得很庞大，管理和维护这些值将是相当棘手的工作。为此，Vue为这些被多个组件频繁使用的值提供了一个统一管理的工具——VueX。
 //在具有VueX的Vue项目中，我们只需要把这些值定义在VueX中，即可在整个Vue项目的组件中使用
                             
                          
 
