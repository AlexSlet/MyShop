import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);


export const store = new Vuex.Store({
	state: {
		cars: [
			{
					name: 'Model-X',
					price: '205,000 USD',
					descript: 'Model X is the safest SUV ever. Built from the ground up as an electric vehicle, the body, chassis, restraints and battery technology provide the lowest probability of occupant injury.'
			},
			{
					name: 'Model-S',
					price: '80,000 USD',
					descript: "Model S is designed for safety from the ground up and is the most exhilarating saloon on the road. With unparalleled performance delivered through Tesla's unique, all-electric powertrain, Model S accelerates from 0 to 100 kph in as little as 2.7 seconds. Model S comes with Autopilot capabilities designed to make your highway driving not only safer, but stress free."
			},
			{
					name: 'Model-3',
					price: '35,000 USD',
					descript: "Model S is our flagship, premium sedan with more range, acceleration, displays and customization options. It’s designed for safety, with unlimited Supercharging for the duration of ownership when referred by an owner.Model 3 is a smaller, simpler, more affordable electric car. Although it is our newest vehicle, Model 3 is not “Version 3” or the most advanced Tesla. It is designed to be the safest car in its class."
			}
		],
		links: [
			{
				url: 'Model-X',
				text: 'Model-X'
			},
			{
				url: '/Model-S',
				text: 'Model-S'
			},
			{
				url: '/Model-3',
				text: 'Model-3'
			},
			{
				url: '/cart',
				text: 'Корзина'
			}
		],
		cartArr: []
	},
	getters: {
		getModelX(state){
			return state.cars[0];
		},
		getModelS(state){
			return state.cars[1];
		},
		getModel3(state){
			return state.cars[2];
		},
		getLinks(state){
			return state.links;
		},
		getCart(state){
			return state.cartArr;
		}
	},
	mutations: {
		add(state, obj){
			if(state.cartArr.indexOf(obj) === -1){
				state.cartArr.push(obj);
			}
		},
		remove(state, index){
				state.cartArr.splice(index, 1);
		}
	},
	actions: {
		add(state, obj){
			store.commit('add', obj);
		},
		remove(state, index){
			store.commit('remove', index);
		}
	},
	strict: process.env.NODE_ENV !== 'production'
});