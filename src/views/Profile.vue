<template>
   <div>
       <div id="blog-green">
           <p>PROFILE</p> 
        </div>
       <div class="container-profile">
        <div v-if="currentUser" class="new-postt">
             <div><button class="btn btn-successs" @click="editProfile()">EDIT PROFILE</button></div> 
                 <h3  class="title-post" >{{ currentUser.username }}</h3>
                 <div class="line-blog"></div>
                <img class="url-post text-center" :src="currentUser.imgUrl">
                <h3 class="biography-profile">Biography</h3>
                <p class="text-post text-center" v-html="currentUser.biography"></p>
                <div class="line-blog"></div>
                <div v-if="userPosts">
                <!-- <router-link class="title-btn" :to="{ path: 'blog/singlepost/' + userPosts[0].id}"> -->
                <!-- <h3>{{ userPosts[0].title }}</h3> -->
                </router-link>
            <div class="post-blog">
               <!-- <router-link class="img-blog" :to="{ path: 'blog/singlepost/' +  userPosts[0].id}"> -->
                 <!-- <img :src="userPosts[0].url" class="img-blog" :to="{ path: 'blog/singlepost/' +  userPosts[0].id}"> -->
               </router-link>
                <p v-html="userPosts[0].text.substring(0,700)+'...'"> </p>
            </div>
            </div>
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
.biography-profile {
  margin-left: 415px;
  color: #28a745;
}
</style>