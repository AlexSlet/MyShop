import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Cart from './components/cart';
import Main from './components/main';
import E404 from './components/404';
import Content from './components/content';
import ModelX from './components/Model-X';
import ModelS from './components/Model-S';
import Model3 from './components/Model-3';

import {store} from './store';

const routes = [
	{
		path: '/',
		name: 'main',
		component: Main
	},
	{
		path: '/cart',
		component: Cart
	},
	{
		path: '/Model-X',
		component: ModelX
	},
	{
		path: '/Model-S',
		component: ModelS
	},
	{
		path: '/Model-3',
		component: Model3
	},
	{
		path: '*',
		component: E404
	}
];

export const router = new VueRouter({
	routes,
	mode: 'history'
});