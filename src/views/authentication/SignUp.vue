<template>
<div>
    <div id="lineUp">
      <p>SIGN UP</p>
    </div>
    <div class="singin-container">
  <form @submit.prevent="signup" class="form">
    <div class="form-group">
    <label for="exampleInputEmail1">Username</label>
    <input type="text" class="form-control"  aria-describedby="Text" placeholder="Username"  v-model="name">
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"  v-model="email">
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"  v-model="password">
  </div>
  <div class="btn-sign">
  <button type="button" class="btn btn-primary" @click="signUp">Sign up</button>
  </div>
</form>
  </div>
</div>
</template>

<script>
import db from '@/firebase/init'
import firebase from 'firebase';
import 'firebase/auth';
import { store } from '@/store/store'
export default {
    name: 'SignUp',
    data() {
        return {
            email: null,
            password: null,
            name: '',
        }
    },
     methods: {
        signUp() {
          this.$store.dispatch('createUser', {
               name: this.name,
               email: this.email,
               password: this.password,
           })
           this.$router.push({ path: '/' });
       },
},
// db.collection('user').get()
//       .then(snapshot => {
//         const userInfo = []
//           snapshot.forEach(doc => {
//               userInfo.push(doc.data())
//             })
//           this.$store.commit('setUserInfo', userInfo)
//       });
 computed: {
    getUser() {
      return this.$store.getters.user;
    },
    userInfo(){
         return this.$store.getters.userInfo;
    }
  },
 signUp() {
           db.collection('user').add({
               name: this.name,    
           }).then(() => {
                  this.$router.push({ path: '/profile' }) 
           })
  },
}
</script>

<style>
.singin-container {
    width: 100%;
    height: 320px;
}
.form {
    margin-left: 700px;
    width: 500px;
    height: 270px;
}

#lineUp {
  width: 100%;
  height: 93px;
  background-color: #2ecc71;
  margin-bottom: 40px;
}
#lineUp p {
  font-size: 37px;
  font-weight: 500;
  color: white;
  margin-left: 480px;
  padding-top: 20px;
}
.btn-sign button{
  margin-bottom: 30px;
}
</style>
