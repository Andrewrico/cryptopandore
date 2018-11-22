import Vue from 'vue';
import Router from 'vue-router';
import Consola from '@/components/router-view/routes/Consola';
import News from '@/components/router-view/routes/News';
import Exchanges from '@/components/router-view/routes/Exchanges';
import Trackers from '@/components/router-view/routes/Trackers'
import Communities from '@/components/router-view/routes/Communities';
import People from '@/components/router-view/routes/People';
import Disclaimer from '@/components/router-view/menu/Disclaimer';
import Submmit from '@/components/router-view/menu/Submmit';
import Donate from '@/components/router-view/menu/Donate';
import ICO from '@/components/router-view/routes/ICO';


Vue.use(Router)

export default new Router({

  
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Consola',
      component: Consola
    },
    {
      path: '/News',
      name: 'News',
      component: News
    },
    {
      path: '/Exchanges',
      name: 'Exchanges',
      component: Exchanges
    },
    {
      path: '/Trackers',
      name: 'Trackers',
      component: Trackers
    },
    {
      path: '/Communities',
      name: 'Communities',
      component: Communities
    },
    {
      path: '/People',
      name: 'People',
      component: People
    },
    {
      path: '/Disclaimer',
      name: 'Disclaimer',
      component: Disclaimer
    },
    {
      path: '/Submmit',
      name: 'Submmit',
      component: Submmit
    },
    {
      path: '/Donate',
      name: 'Donate',
      component: Donate
    },
    {
      path: '/ICO',
      name: 'ICO',
      component: ICO
    }
  ]
})


