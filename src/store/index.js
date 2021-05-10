import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    logindetails: [],
    loggedinusers: ['ted', 'robin'],
    count1: 0,
    decount1: 0,
    count2: 0,
    decount2: 0,
    count3: 0,
    decount3: 0,
    total: 0,
  },
  mutations: {
    setlogindetails: (state, payload) => {
      state.logindetails = payload;
    },
    setcount1: (state, payload) => {
      window.console.log(payload);
      state.count1 += payload;
    },
    setdecount1: (state, payload) => {
      state.decount1 -= payload;
    },
    setcount2: (state, payload) => {
      window.console.log(payload);
      state.count2 += payload;
    },
    setdecount2: (state, payload) => {
      state.decount2 -= payload;
    },
    setcount3: (state, payload) => {
      window.console.log(payload);
      state.count3 += payload;
    },
    setdecount3: (state, payload) => {
      state.decount3 -= payload;
    },
    settotal: (state, payload) => {
      state.total += payload;
    },
  },
  actions: {
    setlogindetailsAction: (state, payload) => {
      window.console.log(payload);
      state.commit('setlogindetails', payload);
    },
    setcountAction1: (state, payload) => {
      state.commit('setcount1', payload);
    },
    setdecountAction1: (state, payload) => {
      state.commit('setdecount1', payload);
    },
    setcountAction2: (state, payload) => {
      state.commit('setcount2', payload);
    },
    setdecountAction2: (state, payload) => {
      state.commit('setdecount2', payload);
    },
    setcountAction3: (state, payload) => {
      state.commit('setcount3', payload);
    },
    setdecountAction3: (state, payload) => {
      state.commit('setdecount3', payload);
    },
    settotalAction: (state, payload) => {
      state.commit('settotal', payload);
    },
  },
  modules: {
  },
  getters: {
    listoflogindetails: (state) => state.logindetails,
    listofloggedinusers: (state) => state.loggedinusers,
    getcount1: (state) => state.count1,
    getdecount1: (state) => state.decount1,
    getcount2: (state) => state.count2,
    getdecount2: (state) => state.decount2,
    getcount3: (state) => state.count3,
    getdecount3: (state) => state.decount3,
    gettotal: (state) => state.total,
  },
});
