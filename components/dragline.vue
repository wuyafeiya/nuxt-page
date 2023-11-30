<script setup lang="ts">
import { useMouse } from '@vueuse/core'
const props = defineProps<{
  width?: number
}>()
const emit = defineEmits(['update'])
const status = ref(false)
console.log(useMouse)
const { x } = useMouse()
const mousedown = () => {
  status.value = true
  document.addEventListener('mousemove', mousemove)
  document.addEventListener('mouseup', mouseup)
}
const mousemove = (event: MouseEvent) => {
  if (status.value) {
    emit('update', x.value)
  }
}
const mouseup = () => {
  status.value = false
  document.removeEventListener('mousemove', mousemove)
  document.removeEventListener('mouseup', mouseup)
}
</script>
<template>
  <div hover-border-dashed  border-1 border-#333 border-solid  hover-cursor-col-resize @mousedown="mousedown"></div>
</template>
