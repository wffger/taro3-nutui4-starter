<template>
  <div>
    <nut-tabbar v-model="active" bottom safe-area-inset-bottom placeholder @tab-switch="tabSwitch">
      <nut-tabbar-item v-for="(item, index) in tabs" :tab-title="item.title" :icon="item.icon"> </nut-tabbar-item>
    </nut-tabbar>
  </div>
</template>
<script lang="ts">
import Taro from '@tarojs/taro'
import { ref, h } from 'vue';
import { Follow, Category, Link, My } from '@nutui/icons-vue-taro';
import { useTab } from '@/stores'
export default {
  options: {
    addGlobalClass: true,
  },
  components: { Follow, Category, Link, My },
  setup() {
    const tab = useTab()
    const active = ref(tab.getSelected)
    const tabs = ref([
      {
        title: '推荐',
        icon: h(Follow),
        name: 'intro',
        path: '/pages/intro/index'
      },
      {
        title: '广场',
        icon: h(Category),
        name: 'plaza',
        path: '/pages/plaza/index'
      },
      {
        title: '连接',
        icon: h(Link),
        name: 'link',
        path: '/pages/link/index'
      },
      {
        title: '我的',
        icon: h(My),
        name: 'my',
        path: '/pages/my/index'
      }
    ]);
    function tabSwitch(item, index) {
      setSelected(active.value)
      Taro.switchTab({ url: tabs.value[index].path })
    }
    function setSelected(index) {
      tab.setSelected(index)
      console.log(setSelected.name)
      console.log(setSelected.name, " active: ", active.value)
      console.log(setSelected.name, " tab._selected: ", tab.getSelected)
    }
    return {
      active,
      tabSwitch,
      tabs,
    };
  }
};
</script>
