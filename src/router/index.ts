import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import axios from 'axios';
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Title1.vue'),
  },
  {
    path: '/title1',
    name: 'title1',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Title1.vue'),
  },
  {
    path: '/title2',
    name: 'title2',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Title2.vue'),
  },
  {
    path: '/Signup',
    name: 'Signup',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Signup.vue'),
    //独享守卫
    beforeEnter: (to: any, from: any, next: any) => {
      console.log('路由独享守卫beforeEnter');
      let role = localStorage.getItem('role') || '';
      console.log('role:', role);
      if (role != 'admin') {
        next('/NotFound');
      } else {
        next();
      }
    },
  },
  {
    path: '/NotFound',
    name: 'NotFound',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/NotFound.vue'),
  },
  {
    path: '/title4',
    name: 'title4',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Title4.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
router.beforeEach((to, from, next) => {
  //判断是否有权限
  if (!localStorage.getItem('role') && to.path == '/Signup') {
    axios({
      method: 'POST',
      url: 'https://your-api.com/user/role',
      responseType: 'blob',
      headers: { Authorization: 'Bearer uyuuu' },
    })
      .then((res) => {
        localStorage.setItem('role', res.data.data.role);
        next();
        console.log(res);
      })
      .catch((e) => {
        console.log('ex', e);
        localStorage.setItem('role', '123'); //admin   可调试
        next();
      });
  } else {
    next();
  }
});
export default router;
