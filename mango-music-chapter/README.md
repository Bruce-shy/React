1. 仿一个 音乐类的项目
2. 上线的业务 思路 架构 技能点

- react 组件由 component 实例和 css 文件 styl 组成
    create- react-app css/ less sty1
    不一定要用官方的create-react-app, 下次自己的项目， 我就可以从这个目录开始 项目模板
    类文件大写， 一个文件夹一个组件， 便于模块化和维护。
- 单页应用? Single Page Application SPA
    只有一个页面的应用
    提升网站的用户体验，当我们点击路由时，不会重新刷新整个页面，而是根据路由的配置，把相应的组件显示出来。
- HashRouter http://localhost:3000/#/
- BrowserRouter http://localhost:3000/
- 根据界面，分析出不同的头尾， 中间内容根据Route 匹配
- Loading 组件 在整个应用中是什么地位？
    containers 
    components 路由级别组件
    Loading 服务于任何listAPI 列表组件 通用组件

    1. 数据请求阶段， 显示loading，
    2. 数据来了后， 隐藏他，
    父组件 要给loading 传参