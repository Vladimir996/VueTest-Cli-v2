<template>
   <div>
       <div id="blog-green">
           <p>PROFILE</p> 
        </div>
       <div class="container-profile">
        <div class="new-postt">
             <div><button class="btn btn-successs" @click="editProfile()">EDIT PROFILE</button></div> 
                 <h3  class="title-post" >{{ currentUser.username }}</h3>
                 <div id="line-blog"></div>
                <img class="url-post text-center" :src="currentUser.imgUrl">
                <p class="text-post text-center" v-html="currentUser.biography"></p>
                {{userPosts}}
        </div> 
   </div>
   </div>
</template>

<script>
import db from '@/firebase/init'
import { store } from '@/store/store'
export default {
     data(){
       return{
       }
   },
    computed:{
      currentUser(){
         return this.$store.getters.currentUser;
       },
       singleUser() {
			return this.$store.getters['singleUser'];
        },
        userPosts() {
			return this.$store.getters['userPosts'];
        },
   },
   created() {
},
  methods: {
editProfile() {
    this.$router.push('/profiledata')
  }
  }
}
</script>

<style>
.container-profile {
     width: 970px;
  margin-left: 480px;
  height: auto;
}
.title-post {
    width: 850px;
    margin-top: -60px;
}
.url-post {
    margin: 20px auto;
    width: 250px;
    height: 250px;
    border-radius: 100%;
    border-color: #28a745;
}
.text-post {
    margin: 0 auto;
    margin-bottom: 30px;
    width: 750px;
    text-align: left !important;
}
.btn-successs{
    margin-left: 830px;
    margin-top: -20px;
    margin-bottom: 20px;
    background-color: #28a745;
    color: white;
}
</style>