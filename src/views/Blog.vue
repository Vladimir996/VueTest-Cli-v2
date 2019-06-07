<template>
  <div>
    <!-- <div id="blog-green">
        <p>BLOG</p>
    </div> -->
    <Banner :bannerText="bannerText"/>
    <div class="container-blog">
    <div class="filter-blog">
      <a
        @click.prevent="selectedCategory ='all'"
        :class="{ activeClasss: selectedCategory == 'all' }"
      >All /</a>
      <a
        @click.prevent="selectedCategory ='nature'"
        :class="{ activeClasss: selectedCategory == 'nature' }"
      >NATURE /</a>
      <a
        @click.prevent="selectedCategory = 'art'"
        :class="{ activeClasss: selectedCategory == 'art' }"
      >ART /</a>
      <a
        @click.prevent="selectedCategory = 'history'"
        :class="{ activeClasss: selectedCategory == 'history' }"
      >HISTORY /</a>
      <a
        @click.prevent="selectedCategory = 'technology'"
        :class="{ activeClasss: selectedCategory == 'technology' }"
      >TECHNOLOGY</a>
      <div class="button-image">
        <router-link
        class="btn-post"
        v-if="currentUser"
        tag="button"
        @click="newPost()"
        to="/blog/newpost"
        exact
      >ADD NEW POST</router-link>
      </div>
    </div>
      <div v-if="blogInfo">
        <button @click="sort"><img class="sort-btn" src="https://img.icons8.com/color/48/000000/sorting-arrows.png"></button>
        <div v-for="(post, index) in blogInfo" :key="index" class="z-hovr">
          <button
            type="button"
            class="close"
            v-if="currentUser"
            aria-label="Close"
            data-toggle="modal"
            data-target="#deleteBlog"
            @click="deletePost(post.id, post.title)"
          >
            <span aria-hidden="true">&times;</span>
          </button>
          <div class="post-list">
            <router-link class="title-btn" :to="{ path: 'blog/singlepost/' + post.id}">
              <h3>{{ post.title }}</h3>
            </router-link>
            <p class="category-blog">{{ post.category }}</p>
            <div class="post-blog">
              <router-link class="img-blog" :to="{ path: 'blog/singlepost/' + post.id}">
             <img :src="post.url" class="img-blog" :to="{ path: 'blog/singlepost/' + post.id}">
            </router-link>
              <p v-html="post.text.substring(0,120)+'...'"></p>
              <!-- <p> {{ post.text | truncate(100) }} </p> -->
            </div>
            <div class="date-published">
            <div class="formatDate">
            <time :datetime="post.date">{{ post.date.toDate() | formatDate }}</time>
            </div>
            <div class="published-blog">
               <!-- <p v-if="post.published == true">Published</p> -->
                 <p  v-if="post.published == false">Unpublished</p>
            </div>
            </div>
            <div class="container">
              <div class="btnn row d-flex justify-content-end">
                <router-link
                  class="edit-btn col-1"
                  v-if="currentUser"
                  tag="button"
                  :to="{ path: 'blog/editpost/' + post.id}"
                  exact
                >EDIT</router-link>
              </div>
            </div>
            <div class="line-blog"></div>
          </div>
        </div>
      </div>
      <p id="no-result" v-if="blogInfo.length == 0">No result.</p>
      <button id="load-btn" v-if="!noMorePosts" @click="loadMore()">Load more</button>
      <Prompt :title="blogTitle" :id="id"></Prompt>
    </div>
  </div>
</template>
<script>
import db from "@/firebase/init";
import { setTimeout } from "timers";
import Prompt from "../components/shared/Prompt.vue";
import Banner from "../components/shared/Banner";
import moment from "moment";
export default {
  components: {
    Prompt,
    Banner
  },
  data() {
    return {
      blogTitle: "",
      id: "",
      selectedCategory: "all",
      bannerText: "BLOG",
    };
  },
  filters: {
    formatDate(date) {
    return moment(date).format("DD/MM/YYYY");
    }
  },
  computed: {
    blogInfo() {
      return this.$store.getters.blogInfo;
    },
    lastVisibleBlog() {
       return this.$store.getters.getLastVisibleBlog;
    },
    user() {
       return this.$store.getters.getUser !== null && this.$store.getters.getUser !== undefined;
    },
    currentUser() {
      return this.$store.getters.currentUser;
    },
    noMorePosts() {
     return this.$store.getters.noMorePosts;
    },
  },
  watch: {
    selectedCategory() {
      if(this.selectedCategory === 'all') { 
        return 
      } else {
        this.$store.dispatch('filterCategory', this.selectedCategory);
      }
    }
  },
  created() {
    this.$store.dispatch('loadMore');
  },
  beforeDestroy() {
    this.$store.commit('setEmtpyBlog');

    this.$store.commit('setLastVisibleBlog', '');
   },
  methods: {
    deletePost(id, title) {
      this.id = id;
      this.blogTitle = title;
    },
    formatDate2(date) {
      return moment(date).format("DD/MM/YYYY");
    },
    sort(){
      this.$store.commit('setSort')
      this.$store.dispatch('loadMore')
    },
    loadMore() {
     this.$store.dispatch('loadMore');
    }
  }
}
</script>

<style>
.container-blog {
   width: 970px;
  margin-left: 480px;
  height: auto;
}
.btn-post {
  width: 180px;
  height: 40px;
  background-color: #2ecc71;
  color: white;
  font-size: 21px;
  font-weight: 600;
  border: none;
}
.img-blog {
  width: 350px;
  height: 250px;
  margin-top: 10px;
  margin-bottom: 20px;
}
.post-list h3 {
  font-size: 26px;
  margin-top: 10px;
  width: 950px;
}
.post-list p {
  margin-left: 15px;
  width: 565px;
  height: 250px;
  /* margin-top: 15px; */
  /* overflow-y: scroll; 
  overflow-x: hidden; */
  /* overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical; */
}
.post-blog {
  display: inline;
  display: flex;
}
#load-btn {
  margin-left: 400px;
  width: 180px;
  height: 45px;
  background-color: #2ecc71;
  color: white;
  font-size: 23px;
  font-weight: 600;
  border: none;
  margin-top: 20px;
  margin-bottom: 20px;
  border-radius: 7%;
}
.edit-btn {
  background-color: #2ecc71;
  color: white;
  border: none;
  font-weight: 500;
  margin-right: 7px;
}
.single-btn {
  background-color: #2ecc71;
  color: white;
  border: none;
  font-weight: 900;
  font-size: 12px;
  margin-right: 5px;
}
.close {
  margin-right: 10px;
}
.close:hover {
  color: red;
}
.title-btn {
  text-decoration: none;
  color: black;
}
.title-btn:hover {
  text-decoration: none;
  color: #2ecc71;
}
.formatDate time {
  height: 18px;
  margin-left: -2px; 
  margin-bottom: -5px;
}
.sort-btn {
  width: 20px;
  padding: 0;
  border: none;
  cursor: pointer;
}
.sort-btn button {
   color: red;
}
#line-blog {
  width: 100%;
}
.button-image {
  margin-left: 405px;
  cursor: pointer;
  padding-left: 20px;
}
.filter-blog {
  display: flex;
  list-style-type: none;
  margin-top: 50px;
  margin-bottom: 20px;
  text-decoration: none;
  color: #a5a4a4;
  font-weight: 500;
  font-size: 18px;
}
.activeClasss {
  color: #2ecc71 !important;
}
.filter-blog a:hover {
  color: #2ecc71 !important;
  cursor: pointer;
}
.category-blog {
  margin-bottom: -240px;
  color: #2ecc71;
  font-weight: 700;
}
.date-published {
  display: flex;
}
.published-blog {
  margin-bottom: -270px;
  color: #fa0000;
  font-weight: 700;
}
</style>