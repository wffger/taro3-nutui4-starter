<template>
  <div>
    <nut-tabs v-model="state.tab1value">
      <nut-tab-pane title="Tab 1"> Tab 1 </nut-tab-pane>
      <nut-tab-pane title="Tab 2"> Tab 2 </nut-tab-pane>
      <nut-tab-pane title="Tab 3"> Tab 3 </nut-tab-pane>
    </nut-tabs>
    <nut-tabbar v-model="active" bottom safe-area-inset-bottom placeholder @tab-switch="tabSwitch">
      <nut-tabbar-item v-for="(item, index) in tabs" :tab-title="item.title" :icon="item.icon"> </nut-tabbar-item>
    </nut-tabbar>
  </div>
</template>
  
<script lang="ts">
import Taro from '@tarojs/taro'
import { eventCenter, getCurrentInstance } from '@tarojs/taro'
import { ref, reactive, h } from 'vue';
import { Follow, Category, Link, My } from '@nutui/icons-vue-taro';
export default {
  mounted() {
    eventCenter.once(getCurrentInstance().router.onShow, () => {
      console.log('0inro onShow')
      // if (typeof this.getTabBar === 'function' &&
      //   this.getTabBar()) {
      //   this.getTabBar().setData({
      //     tabIndex: 1  // 这里就是当前页在数组中的下标
      //   })
      // }
    })
  },
  onLoad() {
      console.log('0intro onLoad')
      if (typeof this.getTabBar === 'function' &&
        this.getTabBar()) {
        this.getTabBar().setData({
          tabIndex: 0
        })
      }

  },
  components: { Follow, Category, Link, My },
  setup() {
    const state = reactive({
      tab1value: '0'
    });
    const active = ref(0);

    const tabs = ref([
      {
        title: '推荐',
        icon: h(Follow),
        name: 'intro',
        path: '/pages/0intro/index'
      },
      {
        title: '广场',
        icon: h(Category),
        name: 'plaza',
        path: '/pages/1plaza/index'
      },
      {
        title: '连接',
        icon: h(Link),
        name: 'link',
        path: '/pages/2link/index'
      },
      {
        title: '我的',
        icon: h(My),
        name: 'my',
        path: '/pages/3my/index'
      }
    ]);
    function tabSwitch(item, index) {
      console.log('active:', active.value)
      console.log('index:', index)
      Taro.switchTab({ url: tabs.value[index].path })
      active.value = index;
      console.log('active:', active.value)
      console.log('index:', index)
    }

    return {
      tabSwitch,
      tabs,
      active,
      state,
    };
  }
};
</script>
