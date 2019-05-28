<template>
<div>
  <div id="lineIn">
    <p>LOG IN</p> 
  </div>
    <div class="singIncontainer">
  <form class="form">
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"  v-model="email">
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" v-model="password">
  </div>
  <button type="button" class="btn btn-primary" @click="logIn()" >Log in</button>
</form>
  </div>
</div>
</template>
<script>
import db from '@/firebase/init';
import firebase from 'firebase';
import 'firebase/auth';
export default {
data() {
   return {
     email: null,
     password: null
   };
 },
   methods: {
       logIn() {
           this.$store.dispatch('logIn', {
               email: this.email,
               password: this.password
           });
           this.$router.push({ path: '/' });
       }
   }
}
</script>

<style>
.singIncontainer {
    width: 100%;
    height: auto;
}
.form {
    margin-left: 700px;
    width: 500px;
    height: 270px;
}
#lineIn {
  width: 100%;
  height: 93px;
  background-color: #2ecc71;
  margin-bottom: 40px;
}
#lineIn p {
  font-size: 37px;
  font-weight: 500;
  color: white;
  margin-left: 480px;
  padding-top: 20px;
}
</style>
