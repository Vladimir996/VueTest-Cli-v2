<template>
   <div>
       <div id="blog-green">
           <p>ADMIN</p> 
        </div>
       <div class="container-admin">
        <p>Logo URL:</p>
        <div class="btn-admin">
        <input class="ck-url" v-model="adminInfo[0].logo" type="text" placeholder="URL">
        <div>
            <button class="btn btn-success" @click="addAdmin">Update Logo</button>
        </div>
        </div>
         <div class="logo-admin">
        <img :src="adminInfo[0].logo">
        </div>
        <!-- <input type="text" list="colors" placeholder="Enter HTML color codes" v-model.lazy="bgColor"
            @submit.prevent="changeBgColor">
               <datalist id="colors">
                   <option v-for="(color, index) in colors" :key="index" :value="color"></option>
               </datalist>
           <button @click="changeBgColor">Submit changes</button> -->
   </div>
   </div>
</template>

<script>
import db from '@/firebase/init'
import { store } from '@/store/store'
export default {
     data(){
       return{
        logo: null,
         isActive:false,
        //  bgColor:'',
        //  colors: [ "red", "blue", "green" ]
       }
   },
    computed:{
    currentUser(){
         return this.$store.getters.currentUser;
    },
    adminInfo() {
      return this.$store.getters.adminInfo;
    }
},
  created() {
    this.$store.dispatch('adminLogo');
  },
  // changeBgColor() {
  //     this.$store.dispatch("changeBgColor", this.bgColor)
  // },
  methods: {
    addAdmin() {
      this.$store.dispatch("updateLogo", {
            logo: this.adminInfo[0].logo
        })
        .then(this.$router.push("/blog"));
    },
  }
}
</script>

<style>
.container-admin{
  width: 970px;
  margin-left: 480px;
  height: 600px;
  border: 5px solid darkgrey;
}
.container-admin p {
    margin-left: 90px;
    font-weight: 700;
    color: rgb(3, 199, 45);
}
.logo-admin img{
    margin-left: 90px;
    width: 250px;
    height: 170px;
    border: 3px solid rgb(253, 10, 10);
}
.btn-admin input {
    margin-left: 90px;
    border: 3px solid darkgrey;
}
.btn-admin {
    display: flex;
}
.btn-admin button {
    margin-left: 60px;
}
.red{
      background-color:red;
}
</style>