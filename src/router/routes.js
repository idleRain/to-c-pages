const routes = [
  {
    path: '/',
    redirect: '/page-a'
  },
  {
    name: 'page-a',
    path: '/page-a',
    component: () => import('@/views/PageA/index.vue')
  },
  {
    name: '404',
    path: '/404',
    component: () => import('@/views/404/index.vue')
  },
  {
    name: 'notFound',
    path: '/:path(.*)+',
    redirect: '/404'
  }
]

export default routes
