<script setup lang="ts">
const props = defineProps<{
  modelValue?: boolean,
}>()

</script>

<template>
  <div p-20px>
    <p>{{ $route.params.group }} - {{ $route.params.id }}</p>
  </div>
  
</template>
