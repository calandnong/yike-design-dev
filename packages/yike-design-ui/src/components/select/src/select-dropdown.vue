<template>
  <div :class="bem()">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { SelectDropdownProps } from './interface'
import { createCssScope } from '../../utils/bem'

const bem = createCssScope('select-dropdown')

defineOptions({
  name: 'YkSelectDropdown',
})

withDefaults(defineProps<SelectDropdownProps>(), {
  name: '',
})
</script>
