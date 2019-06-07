import db from '../firebase/init'
import * as firebase from "firebase";

const state = {
    blogInfo: [],
    singlePost: [{
        title:''
    }
    ],
    true: true,
    sort: 'asc',
    lastVisibleBlog: '',
    noMorePosts: false,
}
const getters = {
    blogInfo: state => {
     return state.blogInfo;
    },
    singlePost: state => {
        return state.singlePost;
    },
    getLastVisibleBlog: state => {
        return state.lastVisibleBlog;
    },
    noMorePosts: state => {
        return state.noMorePosts;
    }
}
const mutations = {
    setBlogInfo(state, payload) {
        payload.forEach(blog => {
         state.blogInfo.push(blog)
        })
      },
    setSinglePost(state, payload) {
        state.singlePost = payload
    },
    setTrue(state, payload){
        state.true = payload
    },
    setSort(state, payload){
        if(state.sort === 'asc'){
            return state.sort = 'desc'
        }else {
            return state.sort = 'asc'
        }
    },
    setLastVisibleBlog(state, payload) {
        state.lastVisibleBlog = payload 
    },
    setEmptyBlog(state) {
        state.blogInfo = []
    },
    setNoMorePosts(state, payload) {
        state.noMorePosts = payload
    }
}
const actions = {
    loadMore({state, commit}) {
        db.collection("blog")
          .orderBy('title', 'asc')
          .startAfter(state.lastVisibleBlog)
          .limit(1)
          .get()
          .then(snapshot => {
            var blogInfo = [];
            var lastVisibleBlog = snapshot.docs[snapshot.docs.length - 1];
            snapshot.forEach(doc => {
              blogInfo.push({...doc.data(), id:doc.id});
            })
            if(snapshot.docs.length === 0) {
               commit('setNoMorePosts', true)
            }
            commit("setBlogInfo", blogInfo);
            commit("setLastVisibleBlog", lastVisibleBlog);
          });
     },
 getSinglePost({ commit }, payload) {
     db.collection('blog')
     .where(firebase.firestore.FieldPath.documentId(), '==', payload).get()
     .then(snapshot => {
        var singlePost = []
      snapshot.forEach(doc => {
        singlePost.push({...doc.data(), id:doc.id})
      })
      commit('setSinglePost', singlePost)
   })
 },
 updatePost({ commit, dispatch },payload) {
    db.collection('blog')
    .doc(payload.id).set({
        title: payload.post.title,
        text: payload.post.text,
        url: payload.post.url,
        date: payload.post.date,
        category: payload.post.category,
        published: payload.post.published
     })
     .then(function() {
        dispatch('loadMore')
     })
    commit('setTrue', false)
},
 filterCategory({commit}, payload) {
    db.collection('blog')
    .where('category', '==', payload).get()
    .then(snapshot => {
        var blogInfo = [];
        snapshot.forEach(doc => {
          blogInfo.push({...doc.data(), id:doc.id});
        }) 
        commit("setEmptyBlog")
        commit("setBlogInfo", blogInfo);
      });
 }
}
export default {
    state,
    mutations,
    getters,
    actions
}