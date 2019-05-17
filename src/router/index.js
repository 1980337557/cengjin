import Vue from 'vue'
import Router from 'vue-router'
import theTotalHome from '@/pages/theTotalHome'
import homeIndex from '@/pages/theTotalpage/homeIndex'
import foundIndex from '@/pages/theTotalpage/foundIndex'
import membersIndex from '@/pages/theTotalpage/membersIndex'
import myIndex from '@/pages/theTotalpage/myIndex'

import resetcss from '@/assets/css/reset.css'
import flexible from '@/assets/js/flexible.js'

import axios from 'axios'
import VueAxios from 'vue-axios'
 
Vue.use(VueAxios, axios)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'theTotalHome',
      component: theTotalHome,
			children:[
				{
					path:"/",
					name: 'homeIndex',
					component: homeIndex
				},
				{
					path:"/homeIndex",
					name: 'homeIndex',
					component: homeIndex
				},
				{
					path:"/foundIndex",
					name: 'foundIndex',
					component: foundIndex
				},
				{
					path:"/membersIndex",
					name: 'membersIndex',
					component: membersIndex
				},
				{
					path:"/myIndex",
					name: 'myIndex',
					component: myIndex
				}
			]
    }
  ]
})
