<template>
  <div>
    <div id="blog-green">
      <p>EDIT BLOG POST</p>
    </div>
    <div class="container-edit">
      <div class="new-post">
        <p>Title</p>
        <input class="ck-title" v-model="singlePost[0].title" type="text" placeholder="Title">
        <p>Photo URL</p>
        <input class="ck-url" v-model="singlePost[0].url" type="text" placeholder="URL images">
        <p>Date</p>
        <datepicker v-model="date" name="uniquename" class="date-picker"></datepicker>
         <p class="category">Category</p>
        <select class="selectpicker" data-style="btn-info" v-model="category">
          <option>NATURE</option>
          <option>ART</option>
          <option>HISTORY</option>
          <option>TECHNOLOGY</option>
        </select>
         <div class="form-check">
          <input class="form-check-input" type="checkbox" v-model="publish" value id="defaultCheck1">
          <label class="form-check-label" for="defaultCheck1">Publish</label>
        </div>
        <p class="text-edit">Text</p>
        <textarea name="ckeditor" id="ckeditor" v-model="singlePost[0].text"></textarea>
        <div class="all-btn">
        <div class="button-new">
          <button class="btn btn-success btn-back" @click="backPost()">BACK</button>
        </div>
        <div class="btn-new">
           <button class="btn btn-success" @click="editPost()">SAVE</button>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import db from "@/firebase/init";
import { store } from "@/store/store";
import Datepicker from "vuejs-datepicker";
import moment from "moment";
export default {
  components: {
    Datepicker
  },
  data() {
    return {
      title: null,
      text: null,
      url: null,
      date: Date.now(),
      category: "",
      publish: false
    };
  },
  beforeRouteEnter(to, from, next) {
    const id = to.params.id;
    store.dispatch("getSinglePost", id);
    setTimeout(() => {
      next();
    }, 400);
  },
  mounted() {
    CKEDITOR.replace("ckeditor")
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
    editPost() {
       var date1 = moment(this.date).utc().startOf('day').format();
       var date2 = (new Date(date1));
      const postText = CKEDITOR.instances.ckeditor.getData();
      this.$store
        .dispatch("updatePost", {
          id: this.$route.params.id,
          post: {
            title: this.singlePost[0].title,
            text: postText,
            url: this.singlePost[0].url,
            category: this.category,
            published: this.publish,
             date: date2,
          }
        })
        .then(this.$router.push("/blog"));
    },
     backPost() {
      this.$router.push("/blog");
    },
  }
};
</script>

<style scoped>
.container-edit {
  width: 970px;
  margin-left: 480px;
  height: auto;
}
.btn-success {
  margin-top: 30px;
  margin-bottom: 20px;
}
.ck-title {
  margin-bottom: 20px;
  width: 600px;
  height: 40px;
}
.ck-url {
  margin-bottom: 20px;
  width: 600px;
  height: 40px;
}
.new-post p {
  margin-bottom: -3px;
}
.text-edit {
  margin-top: 20px;
}
</style>