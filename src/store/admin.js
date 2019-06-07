import db from '../firebase/init'
import * as firebase from "firebase";
const state = {
    adminInfo: {
      logo:'',
      bannerText:''
    } 
}
const getters = {
    adminInfo: state => {
     return state.adminInfo;
    },
}
const mutations = {
    setAdminInfo(state, payload) {
        state.adminInfo = payload
      }
}
const actions = {
      adminLogo({commit}){
        db.collection('admin').get()
        .then(snapshot => {
          const adminInfo = []
            snapshot.forEach(doc => {
                adminInfo.push(doc.data())
              })
            commit('setAdminInfo', adminInfo)
        })
  },
  updateLogo({commit}, payload) {
      console.log(payload)
    db.collection('admin')
    .doc('RPSq60tHCZgjnv32smoV').set({
        logo: payload
     })
  },
//   changeBgColor({commit}, payload) {
//     console.log(payload)
//   db.collection('admin')
//   .doc('Hcxjhf3ORzzfqTx2A3PZ').set({
//       bgColor: payload
//    })
// },
}

export default {
    state,
    getters,
    mutations,
    actions
}