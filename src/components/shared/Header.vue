<template>
  <header>
    <div class="header container">    
       <!-- <img id="logo" :src="headerInfo[0].logoUrl"> -->
       <img v-if="adminInfo" id="logo" :src="adminInfo[0].logo">
      <div class="media-wide">
        <a v-for="(socialIcon, index) in socialIcons" :key="index" :href="socialIcon.url">
          <img :src="socialIcon.imgUrl">
        </a>
      </div>
      <nav class="navbar navbar-expand-lg navbar-light container hide">
 <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav link-list">
      <li class="nav-item active">
        <router-link to="/" exact>HOME</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/about" exact>ABOUT</router-link>
      </li>
      <li class="nav-item">
       <router-link to="/work" exact>WORK</router-link>
      </li>
      <li class="nav-item">
       <router-link to="/contact" exact>CONTACT</router-link>
      </li>
       <li class="nav-item">
       <router-link to="/blog" exact>BLOG</router-link>
      </li>
       <li class="nav-item">
       <router-link to="/admin" exact>ADMIN</router-link>
      </li>
      <li class="nav-item">
       <router-link to="/login" exact>LOG IN</router-link>
      </li>
      <li class="nav-item">
       <router-link to="/signup" exact>SIGN UP</router-link>
      </li>
    </ul>
    <div class="media">
        <a v-for="(socialIcon, index) in socialIcons" :key="index" :href="socialIcon.url">
          <img :src="socialIcon.imgUrl">
        </a>
      </div>

  </div>
</nav>
      <div id="line"></div>
<nav class="navbar navbar-expand-lg navbar-light container sakrij">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav link-list">
      <li class="nav-item active">
        <router-link to="/" exact>HOME</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/about" exact>ABOUT</router-link>
      </li>
      <li class="nav-item">
       <router-link to="/work" exact>WORK</router-link>
      </li>
      <li class="nav-item">
       <router-link to="/contact" exact>CONTACT</router-link>
      </li>
      <li class="nav-item">
       <router-link to="/blog" exact>BLOG</router-link>
      </li>
      <li class="nav-item">
       <router-link v-if="currentUser" to="/admin" exact>ADMIN</router-link>
      </li>
    </ul>
    </div>
    <div>
    <ul class="regist">
       <li class="nav-item">
      <img v-if="currentUser" class="user-photo" :src="currentUser.imgUrl">
      </li>
      <li class="nav-item">
       <span v-if="currentUser" class="name-profile" @click="userProfile">{{ currentUser.username }}</span>
      </li>
       <li v-if="!currentUser" class="nav-item">
       <router-link class="login-profile" to="/login" exact>LOG IN</router-link>
      </li>
      <li v-if="!currentUser" class="nav-item">
       <router-link class="sign-profile" to="/signup" exact>SIGN UP</router-link>
      </li>
      <li v-if="currentUser" class="nav-item">
        <a @click="logout" :class="{ logout: user }" >LOGOUT</a>
      </li>
    </ul>
    </div>
</nav>
    </div>
  </header>
</template>
<script>
import db from '@/firebase/init'
import firebase from 'firebase';
import 'firebase/auth';
export default {
  data() {
    return {
      homePhoto: '',
      logo: null
    };
  },
  computed: {
    user() {
       return this.$store.getters.getUser !== null && this.$store.getters.getUser !== undefined;
    },
    headerInfo() {
      return this.$store.getters.headerInfo;
    },
    socialIcons() {
      return this.$store.getters.socialIcons;
    }, 
    userInfo(){
         return this.$store.getters.userInfo;
       },
    currentUser() {
         return this.$store.getters.currentUser;
       },
    adminInfo() {
      return this.$store.getters.adminInfo;
    }
  },
  created() {
    db.collection("social-links").onSnapshot(snapshot => {
      const socialIcons = [];
      snapshot.docs.forEach(doc => {
        socialIcons.push(doc.data());
      });
      this.$store.commit("setSocialIcons", socialIcons);
    });
    db.collection("admin")
      .get()
      .then(snapshot => {
        const adminInfo = [];
        snapshot.forEach(doc => {
          adminInfo.push(doc.data());
        });
        this.$store.commit("setAdminInfo", adminInfo);
      });
       db.collection('user').get()
      .then(snapshot => {
        const userInfo = []
          snapshot.forEach(doc => {
              userInfo.push(doc.data())
            })
          // this.$store.commit('setUserInfo', userInfo)
      });
  },
  methods: {
     logout() {
       this.$store.dispatch('logout')
       .then(() => {
         this.$router.push({path: '/login'})
       })
     },
     userProfile() {
         let id = this.currentUser.id;
			this.$router.push('/profile/' + id);
        },
  }
};
</script>

<style scoped>
  .hide {
  display: none;
}
  @media(max-width: 690px) {
  .sakrij {
    display: none;
  }
  .hide {
    display: inline;
  }
}
  @media(max-width: 490px) {
  .media-wide {
    display: none;
  }
   .media-wide img {
    margin-left: 100px;
  }  
}
.nav-item a {
   color: #737373;
   font-size: 17px;
}
.nav-item :hover {
  color: #2ecc71;
}
.router-link-active {
 color: #2ecc71 !important;
}
.user-photo {
  width:50px;
  height: 50px;
  margin-bottom: -20px;
  margin-left: 215px;
  /* border-radius: 10px 100px / 120px; */
  border-radius: 100%;
  cursor: pointer;
}
.login-profile {
  margin-left: -10px;
}
.nav-item span {
  margin-left: 20px;
  margin-right: 220px;
  cursor: pointer;
}
</style>