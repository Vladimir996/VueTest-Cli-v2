import firebase from 'firebase'
import firestore from 'firebase/firestore'

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyB5w_85AKCWIh-vNjc1Thb2VOFt_RyIACE",
    authDomain: "testproject-vue.firebaseapp.com",
    databaseURL: "https://testproject-vue.firebaseio.com",
    projectId: "testproject-vue",
    storageBucket: "testproject-vue.appspot.com",
    messagingSenderId: "826751167976"
  };
const firebaseApp = firebase.initializeApp(config);
 
export default firebaseApp.firestore() 
