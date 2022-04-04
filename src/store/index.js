import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		firstSection: null
	},
	getters: {
	},
	mutations: {
		firstSectionSetter(state, element) {
			state.firstSection = element
		}
	}
})
