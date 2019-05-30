import db from '../firebase/init'
import * as firebase from "firebase";
const state = {
    projects: [],
    lastVisible: null,
    noMoreWork: false,
}
const getters = {
    getProjects: state => {
        return state.projects;
      },
    getLastVisible: state => {
      return state.lastVisible;
    },
    noMoreWork: state => {
      return state.noMoreWork;
    }      
}
const mutations = {
  setProjects(state, payload) {
    payload.forEach(project => {
      state.projects.push(project)
  })
  },
  setLastVisible(state, payload) {
    state.lastVisible = payload 
  },
  setNoMoreWork(state, payload) {
    state.noMoreWork = payload
  }
}
const actions = {
  displayAll ({commit}) {
    db.collection("work").limit(3).get().then(snapshot => {
        var projects = [];
        var lastVisible = snapshot.docs[snapshot.docs.length-1];
        snapshot.forEach(doc => {
           projects.push(doc.data())
        });
      commit('setProjects', projects);
      commit('setLastVisible', lastVisible);
      });
    },

}

export default {
    state,
    mutations,
    actions,
    getters
}