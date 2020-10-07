import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      alias: '/customer',
      name: 'customer',
      component: () => import('../../modules/customer/components/customer-list/CustomerList.vue'),
    },
    {
      path: '/customer/:id',
      name: 'customer-details',
      component: () => import('../../modules/customer/components/customer/Customer.vue'),
    },
    {
      path: '/add',
      name: 'add',
      component: () => import('../../modules/customer/components/add-customer/AddCustomer.vue'),
    },
  ],
});
