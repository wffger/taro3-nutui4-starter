export default defineAppConfig({
  pages: [
    'pages/0intro/index',
    'pages/1plaza/index',
    'pages/2link/index',
    'pages/3my/index',
    'pages/4other/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    // custom: true,
    color: '#000000',
    selectedColor: '#DC143C',
    backgroundColor: '#ffffff',
    list: [
      {
        pagePath: 'pages/0intro/index',
        text: '推荐'
      },
      {
        pagePath: 'pages/1plaza/index',
        text: '广场'
      },
      {
        pagePath: 'pages/2link/index',
        text: '连接'
      },
      {
        pagePath: 'pages/3my/index',
        text: '我的'
      }
    ]
  }
})
