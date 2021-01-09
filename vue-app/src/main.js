import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';

import Home from './pages/Home.vue';
import StockPrices from './pages/StockPrices.vue';
import CurrencyRates from './pages/CurrencyRates.vue';
import NotFound from './pages/NotFound.vue';

let router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/stock-prices', component: StockPrices },
    { path: '/currency-exchange', component: CurrencyRates },
    { path: '/:notFoud(.*)', componet: NotFound }
  ]
});

const app = createApp(App);
app.use(router);
app.mount('#app');
