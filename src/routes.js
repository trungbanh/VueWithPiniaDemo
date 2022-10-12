import HomePage from './pages/HomePage.vue'
import DetailsPage from './pages/PostDetailPage.vue'
import AuthorPage from './pages/AuthorPage.vue'
import AuthorDetailPage from './pages/AuthorDetailPage.vue'
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: HomePage,
    name: 'home',
  },
  {
    path: '/post/:id',
    component: DetailsPage,
    name: 'post'
  },
  {
    path: '/author',
    component: AuthorPage,
    name: 'author'
  },
  {
    path: '/author/:id',
    component: AuthorDetailPage,
    name: 'author-detail'
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router;