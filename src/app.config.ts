export default defineAppConfig({
  pages: [
    'pages/intro/index',
    'pages/plaza/index',
    'pages/link/index',
    'pages/my/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    custom: true,
    color: '#000000',
    selectedColor: '#DC143C',
    backgroundColor: '#ffffff',
    list: [
      {
        pagePath: 'pages/intro/index',
        text: '推荐'
      },
      {
        pagePath: 'pages/plaza/index',
        text: '广场'
      },
      {
        pagePath: 'pages/link/index',
        text: '消息'
      },
      {
        pagePath: 'pages/my/index',
        text: '我的'
      }
    ]
  }
})
