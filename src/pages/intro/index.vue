<template>
  <div>
    <view>
      <text>我是推荐页！</text>
    </view>

  </div>
</template>
  
<script>

export default {
  options: {
    addGlobalClass: true,
  },
  name: 'intro',
  onReady() {
    // 获取到 CustomWrapper 这个自定义组件对象，也就是所说的 scope
    const ctx = document.getElementById('demo').ctx
    if (typeof this.ctx.getTabBar === 'function' && this.ctx.getTabBar()) {
      this.ctx.getTabBar().$component.setState({
        tabIndex: 0
      })
    }
  },
  setup() {
  }
}
</script>