// export default defineNuxtRouteMiddleware((to, from) => {
//     const auth = useAuthStore()
  
//     if (auth.isLoggedIn) {
//       to.meta.layout = 'registered'
//     } else {
//       to.meta.layout = 'default'
//     }
//   })
export default defineNuxtRouteMiddleware((to, from) => {
  const auth = useAuthStore()

  // لو الصفحة فيها layout معين، سيبه زي ما هو
  if (to.meta.layout) return

  // لو مفيش، ساعتها اختار بناءً على الحالة
  if (auth.isLoggedIn) {
    to.meta.layout = 'registered'
  } else {
    to.meta.layout = 'default'
  }
})
