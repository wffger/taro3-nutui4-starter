<template>
  <div>
  <view >
    <text>我是推荐页！</text>
  </view>

  </div>
</template>
  
<script>
import { useDidShow, Taro } from '@tarojs/taro'

export default {
  options: {
    addGlobalClass: true,
  },
  name: 'intro',
  setup() {
    useDidShow(() => {
      console.log('onShow')
      const pageObj = Taro.getCurrentInstance().page
      const tabbar = Taro.getTabBar(pageObj)
    })

  }
}
</script>