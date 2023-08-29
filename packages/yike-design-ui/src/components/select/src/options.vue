<template>
  <div :class="bem()">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { OptionsProps } from './options'
import { createCssScope } from '../../utils/bem'

const bem = createCssScope('select-options')

defineOptions({
  name: 'YkSelectOptions',
})

withDefaults(defineProps<OptionsProps>(), {
  label: '',
  value: '',
  disabled: false,
})
</script>
