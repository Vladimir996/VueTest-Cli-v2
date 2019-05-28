import db from '@/firebase/init'

const state = {
    headerInfo: [{
        logoUrl: ''
    }],
    socialIcons: []
        // logoHeader: {
        //     url: 'https://i.imgur.com/JKlZTTJ.png'
        // }
}
const getters = {
    headerInfo: state => {
     return state.headerInfo;
    },
    socialIcons: state => {
        return state.socialIcons;
    },
}
const mutations = {
    setSocialIcons(state, payload) {
        state.socialIcons = payload
      },
      setHeaderInfo(state, payload) {
        state.headerInfo = payload
      }
}
const actions = {
    // getLogo ({commit}) {
    //     db.collection("logo")
    //   .get()
    //   .then(snapshot => {
    //     const headerInfo = "";
    //     snapshot.forEach(doc => {
    //       headerInfo = doc.data();
    //     });
    //     commit("setHeaderInfo", headerInfo);
    //   });
    // }
}

export default {
    state,
    mutations,
    getters,
    actions
}