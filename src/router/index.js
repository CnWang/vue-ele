import Vue from 'vue'
import Router from 'vue-router'

import goods from '../components/goods/goods.vue'
import ratings from '../components/ratings/ratings.vue'
import sellers from '../components/seller/seller.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/goods'

    },
    {
      path: '/goods',
      component: goods
    },
    {
      path: '/ratings',
      component: ratings
    },
    {
      path: '/sellers',
      component: sellers
    }
  ],
  linkActiveClass: 'active'
})
