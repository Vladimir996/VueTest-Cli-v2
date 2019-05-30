import firebase from 'firebase';
import 'firebase/auth';
import db from "@/firebase/init";
import router from "@/router";
const state = {
    currentUser: '',
}
const getters = {
    currentUser: state => {
        return state.currentUser;
    }
}
const mutations = {
    setCurrentUser(state, payload) {
        state.currentUser = payload
      }
}
const actions = {
    async createUser( {commit}, payload) {
       await firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password).then(cred => {
        db.collection("user").doc().set({
            username: payload.username,
            email: payload.email,
            id: cred.user.uid,
        })
        // .then(() => {
        //     // console.log(state.currentUser)
        //     router.push({path: '/work'})
        //     })
    })
    .catch(error =>  {
        commit('setFeedback', error.message)
        });
    },
    // LOGIN USER
    logIn({commit}, {email, password} ) {
        firebase.auth().signInWithEmailAndPassword(email, password)
        .catch(error =>  {
            commit('setFeedback', error.message)
        })
    },
    //LOGOUT USER
    logout({commit}){
        firebase.auth().signOut().then(() => {
            commit('setCurrentUser', null);
        })
    
    },
    // SET CURRENT USER
    async getCurrentUser({commit}, payload) {
        if(payload) {
            await db.collection('user').where('id', '==', payload.uid).get().then(snapshot => {
                let user = {};
                snapshot.docs.forEach(doc => {
                    user = doc.data()
                    user.id = doc.id
                })
                commit('setCurrentUser', user);
            })
        }
    },
}
export default {
    state,
    mutations,
    getters,
    actions
}