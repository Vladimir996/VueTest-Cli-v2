import db from '../firebase/init'
import * as firebase from "firebase";

const state = {
    singleUser: null,
    userPosts: [{
        title: '',
        text:'',
        url:''
    }]
}
const getters = {
    singleUser(state) {
        return state.singleUser;
    },
    userPosts(state) {
        return state.userPosts;
    },
}
const mutations = {
    setSingleUser(state, payload) {
        state.singleUser = payload
    },
    setUserPosts(state, payload) {
        state.userPosts = payload
    },
}
const actions = {
    // GET SINGLE USER 
    async getSingleUser({commit, dispatch}, payload) {
        if(payload) {
            var user = {};
            await db.collection('user').doc(payload).get().then(doc => {
                user = doc.data()
                user.id = doc.id
            })
            commit('setSingleUser', user)
            dispatch('getUserPost', payload)
        }
    },
    
    // GET USER POSTS
    getUserPost({ commit }, payload) {
        let post = [];
        db.collection('blog')
        .where('user_id', '==', payload).get()
        .then(snapshot => {
           var post = []
         snapshot.forEach(doc => {
            post.push({...doc.data(), id: doc.id})
         })
         commit('setUserPosts', post)
      })
    },
}
export default {
    state,
    mutations,
    getters,
    actions
}