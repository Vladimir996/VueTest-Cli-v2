<template>
  <div>
       <div id="blog-green">
        <p>POST</p>
      </div>
    <div class="container-single">
      <div class="new-postt">
        <div class="button-single">
          <button class="btn btn-success btn-back" @click="backPost()">BACK</button>
        </div>
        <h3 class="titlee-post">{{ singlePost[0].title }}</h3>
        <div class="formatSingle">
            <time :datetime="singlePost[0].date">{{ singlePost[0].date.toDate() | formatDate }}</time>
        </div>
         <div class="published-single">
               <!-- <p v-if="singlePost[0].published == true">Published</p> -->
                 <p  v-if="singlePost[0].published == false">Unpublished</p>
            </div>
        <div class="line-blog"></div>
        <img class="urll-post" :src="singlePost[0].url">
        <p class="textt-post" v-html="singlePost[0].text"></p>
      </div>
    </div>
  </div>
</template>

<script>
import db from "@/firebase/init";
import { store } from "@/store/store";
import moment from "moment";
export default {
  data() {
    return {
      title: null,
      text: null,
      url: null,
      date: ""
    };
  },
  beforeRouteEnter(to, from, next) {
    const id = to.params.id;
    store.dispatch("getSinglePost", id);
    setTimeout(() => {
      next();
    }, 400);
  },
  filters: {
    formatDate(date) {
    return moment(date).format("DD/MM/YYYY");
    }
  },
  computed: {
    singlePost() {
      return this.$store.getters.singlePost;
    }
  },
  singlePostCreate() {
    this.$store.dispatch("getSinglePost");
  },
  methods: {
    backPost() {
      this.$router.push("/blog");
    },
    formatDate(date) {
      return moment(date).format("DD/MM/YYYY");
    }
  }
};
</script>

<style>
.container-single {
  width: 970px;
  margin-left: 480px;
  height: auto;
}
.titlee-post {
  margin-bottom: 20px;
  margin-top: -40px;
  width: 850px;
}
.urll-post {
  margin-bottom: 20px;
  margin-top: 15px;
  width: 430px;
  height: 250px;
}
.textt-post {
  width: 930px;
}
.button-single button{
   margin-left: 890px;
}
.new-postt {
  margin-left: 10px;
  margin-bottom: -6px;
}
.published-single {
  color: rgb(247, 38, 38);
  font-weight: 700;
}
</style>
