/*
PostCSS 的配置文件
PostCSS 是基于 Node.js 运行的一个处理 CSS 的工具
 */
// PostCSS 配置文件需要导出一个对象
module.exports = {
/*  //配置需要使用的相关插件
  plugins: {
    //自动添加浏览器厂商声明前缀
    autoprefixer: {
      // browsers 用来配置要兼容到的系统（浏览器）环境
      browsers: ['Android >= 4.0', 'iOS >= 8'],
    },*/
    // 把 px 转为 rem
    'postcss-pxtorem': {
      /*
      转换的根元素基准值
      正常情况下按照你的设计稿来
      vant 组件库是基于375宽写的
      移动端页面一般都是以iPhone6/7/8为原型设计的
       */
      rootValue: 37.5,
      // 需要转换的 CSS 属性， * 就是所有属性
      propList: ['*']
    }
  }

