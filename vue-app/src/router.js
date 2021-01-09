import { createRouter, createHistory } from 'vue-router';

const router = createRouter({
  history: createHistory(),
  routes: [
    { path: '/', component: null },
    { path: '/stock-prices', component: null },
    { path: '/currency-exchange', component: null },
    { path: '/:notFoud(.*)', componet: null }
  ]
});

export default router;
