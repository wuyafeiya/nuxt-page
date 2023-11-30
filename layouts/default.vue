<script setup lang="ts">
const nav = ref()
const update = (x: number) => {
  nav.value.style.width = x + 'px'
}
const navlist=ref([{name:'home1',path:'/parent/1'},{name:'home2',path:'/parent/2'}])
</script>
<template>
  <div flex>
    <div min-w-200px h-100vh ref="nav">
      <div v-for="item,index in navlist" :key="index" mt-20px >
        <NuxtLink :to="item.path">{{ item.name }}</NuxtLink>
      </div>
    </div>
    <Dragline @update="update"></Dragline>
    <div flex-1>
      <div bg-sky h-50px></div>
      <slot />
    </div>
  </div>
</template>
<style>
</style>

