import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import actions from './actions.js'
import mutations from './mutations.js'
import state from './state.js'
import getters from './getters.js'
const store = new Vuex.Store({
	actions,mutations,state,getters
})
export default store