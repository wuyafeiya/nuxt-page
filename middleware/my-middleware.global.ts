export default defineNuxtRouteMiddleware((to, from) => {
  if (to.path === '/') {
    console.log('2')
    return navigateTo('/parent')
  }
})
