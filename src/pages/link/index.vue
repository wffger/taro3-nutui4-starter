<template>
  <div>
    <view>
      <text>我是link页！</text>
    </view>

  </div>
</template>

<script>
import { useDidShow, Taro } from '@tarojs/taro'
export default {
  options: {
    addGlobalClass: true,
  },
  name: 'Index',
  onShow() {
    // 获取到 CustomWrapper 这个自定义组件对象，也就是所说的 scope
    const ctx = document.getElementById('demo').ctx
    if (typeof this.ctx.getTabBar === 'function' && this.ctx.getTabBar()) {
      this.ctx.getTabBar().$component.setState({
        tabIndex: 2
      })
    }
  },
  setup() {
  }
}
</script>
