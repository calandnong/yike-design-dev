import type { Component, App } from 'vue'

import { YkButton } from './components/button'
import YkButtonGroup from './components/button/BtGroup.vue'
import YkTheme from './components/theme/Theme.vue'
import YkIcon from './components/icon/Icon.vue'
import { YkAvatar, YkAvatarGroup } from './components/avatar'
import YkSpace from './components/space/Space.vue'
import { YkContainer } from './components/container'
import YkTable from './components/table/Table.vue'

const components: {
  [propName: string]: Component
} = {
  YkButton,
  YkButtonGroup,
  YkTheme,
  YkIcon,
  YkAvatar,
  YkAvatarGroup,
  YkSpace,
  YkContainer,
  YkTable
}

export {
  YkButton,
  YkButtonGroup,
  YkTheme,
  YkIcon,
  YkAvatar,
  YkAvatarGroup,
  YkSpace,
  YkContainer,
  YkTable
}

// 全局注册
export default {
  install: (app: App) => {
    for (const c in components) {
      app.component(c, components[c])
    }
  }
}

// 局部注册
// for (const c in components) {
//   const component = Object.assign(components[c], { install: {} })
//   component.install = (app: App) => {
//     app.component(c, component)
//   }
// }