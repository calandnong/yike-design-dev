<template>
  <div :class="bem()">
    <yk-input :placeholder="'请选择'" />
    <div :class="bem('suffix')">
      <icon-down-outline />
    </div>
    <div :class="bem('options')">
      <slot name="options"></slot>
    </div>
  </div>
</template>
<script setup lang="ts">
import { SelectProps } from './select'
import { createCssScope } from '../../utils/bem'
import YkInput from '../../input/src/input.vue'
import IconDownOutline from '../../svg-icon/icon-down-outline'

const bem = createCssScope('select')

defineOptions({
  name: 'YkSelect',
})

withDefaults(defineProps<SelectProps>(), {
  id: '',
})
</script>
