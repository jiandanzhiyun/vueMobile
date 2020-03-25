# vueMobile
移动端前端框架 /可用于pc端+element ui (public/index.html)下删除移动适配js即可

基于 Vue + Ant+axios 移动前端框架。


## 安装步骤


npm install         // 安装项目依赖，等待安装完成之后，安装失败可用 cnpm 或 yarn

// 开启服务器，浏览器访问 http://localhost:3201
npm run serve

// 执行构建命令，生成的dist文件夹放在服务器下即可访问
npm run build
##服务请求说明
为了方便合作开发,服务请求统一管理 所有服务请求都在api/index.js下进行 可根据需要新建

## 日期格式的封装
utils/date.js
## 引用方式
import { formatDate } from "utils/date.js";

formatDate(e, "yyyy-MM-dd");
