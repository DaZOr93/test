import Vue from 'vue';

import Vuex from 'vuex';
import axios from 'axios'

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		
		title: 'Home Page',
		counter: 55,
		users: []
	},
	getters: {
		title(state) {
			return state.title.toUpperCase() + '' + 'Data'
		},
		users(state) {
			return state.users
		}
	},
	actions: {
		getUsers(context){
			axios.get('https://jsonplaceholder.typicode.com/users')
			.then(res=>context.commit('fillUsers', res.data))
		}
	},
	mutations: {
		fillUsers(state, payload) {
			state.users = payload
		}
	}
})