---
presentation:
  width: 800
  height: 1000
---

<!-- slide -->
### React的第一个尝试

- 数据持久化方案
  1. redux @rematch/core
  2. PWA的尝试
- 代码管理方案
  1. eslint
  2. prettier
  3. PropTypes类型判定
- 项目分析方案
  1. 文件分析-webpackmonitor
  2. 性能测评-Lighthouse
- 持续集成，持续部署
  1. travis
  2. codecov

<!-- slide -->
### 数据持久化方案

1. 犹豫官方推出的redux仅仅是一个方案，reducer和Saga都采用纯函数处理，需要嵌套switch语句，从今年出来的React Hooks来看，react打算让开发者在纯函数的道路上走到黑了，实际项目中使用起来很麻烦，所以redux第三方插件很多，这里采用@rematch/core,数据同步缓存@rematch/persist

<!-- slide -->
### PWA的尝试

* Progressive Web Apps（以下简称 PWA）以及构成 PWA 的一系列关键技术的出现，终于让我们看到了彻底解决这两个平台级别问题的曙光：能够显著提高应用加载速度、甚至让 web 应用可以在离线环境使用的 Service Worker 与 Cache Storage；用于描述 web 应用元数据（metadata）、让 web 应用能够像原生应用一样被添加到主屏、全屏执行的 Web App Manifest；以及进一步提高 web 应用与操作系统集成能力，让 web 应用能在未被激活时发起推送通知的 Push API 与 Notification API 等等。

<!-- slide -->
* Notification API 相信大家并不陌生，它负责所有与通知本身相关的机制，比如通知的权限管理、向操作系统发起通知、通知的类型与音效，以及提供通知被点击或关闭时的回调等等。

* Push API 的出现则让推送服务具备了向 web 应用推送消息的能力，它定义了 web 应用如何向推送服务发起订阅、如何响应推送消息，以及 web 应用、应用服务器与推送服务之间的鉴权与加密机制；由于 Push API 并不依赖 web 应用与浏览器 UI 存活，所以即使是在 web 应用与浏览器未被用户打开的时候，也可以通过后台进程接受推送消息并调用 Notification API 向用户发出通知。

<!-- slide -->
### PWA使用
* 在react官方脚手架created-react-app中构建的项目自带了serviceWorker,默认关闭，这也体现react团队对于前端新技术的尝试和提炼（真香！）
* Service Worker的高级Api暂未探索

<!-- slide -->
### 实例


<!-- slide -->
### 代码管理方案
1. eslint+prettier
  * [eslint](https://github.com/eslint/eslint)就不多说了，这里采用目前比较流行同也是也是比较严格的airbnb风格，关闭了一些令人发指的检查
  [prettier](https://github.com/prettier/prettier)检查并自动格式化代码
2. propTypes
  * 使用 [propTypes](https://reactjs.org/docs/typechecking-with-proptypes.html) 属性进行传入 prop 的校验。可以校验 prop 的类型和是否必需，非必需的 prop 还必需填写 defaultProps 默认值。

<!-- slide -->
### PropTypes类型判定
  * 本来尝试ts的，后面懒就没尝试了，等下期，但在eslint的严格检查下，还是用上了 [propTypes](https://reactjs.org/docs/typechecking-with-proptypes.html) 属性进行传入 prop 的校验。可以校验 prop 的类型和是否必需，非必需的 prop 还必需填写 defaultProps


<!-- slide -->
### one more thing --- 开源项目中的装逼指南
  
  * [travis](https://travis-ci.org)是一个托管的，分布式持续集成工具，主要用来构建和自动测试项目。当你push一段代码至github的时候，Travis会按照你预先配置的测试文件进行自动测试，并返回pass或fail的结果。还可以自动部署到服务器上

  * [codecov](https://codecov.io)是一个测试结果分析工具，travis负责执行测试，Codecov负责分析测试结果，最简单的用法就是衡量测试代码覆盖度，当然更高端的用法还有待继续学习。依赖于travis，Codecov非常简单就能上手。
