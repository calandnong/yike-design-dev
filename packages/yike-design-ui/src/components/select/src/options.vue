<template>
  <div :class="bem()">
    <slot>
      <span>我是label{{ labelText }}</span>
    </slot>
  </div>
</template>

<script setup lang="ts">
import { OptionsProps } from './interface'
import { createCssScope } from '../../utils/bem'
import { computed } from 'vue'

const bem = createCssScope('select-options')

defineOptions({
  name: 'YkOptions',
})

const props = withDefaults(defineProps<OptionsProps>(), {
  label: '',
  value: '',
  disabled: false,
})

const labelText = computed(() => {
  return props.label ?? props.value
})
</script>
