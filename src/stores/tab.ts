import { defineStore } from 'pinia'

const useTab = defineStore({
  /** 区分不通状态的唯一标识 */
  id: 'tab',
  /** 状态 */
  state: () => ({
    _selected: 0,
  }),
  getters: {
    selected: (state) => state._selected,
    getSelected() {
      return this._selected
    }
  },
  actions: {
    increment() {
      this._selected++
    },
    add(i) {
      this._selected += i
    },
    setSelected(i) {
      this._selected = i
    }
  },
})
export { useTab }
