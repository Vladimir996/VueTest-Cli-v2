<template>
  <div class="app">
    <app-header></app-header>
    <vue-progress-bar></vue-progress-bar>
    <router-view/>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";

export default {
  components: {
    "app-header": Header,
    AppFooter: Footer
  },
  mounted() {
    this.$Progress.finish();
  },
  created() {
    this.$Progress.start();
    this.$router.beforeEach((to, from, next) => {
      if (to.meta.progress !== undefined) {
        let meta = to.meta.progress;
        this.$Progress.parseMeta(meta);
      }
      this.$Progress.start();
      next();
    });
    this.$router.afterEach((to, from) => {
      this.$Progress.finish();
    });
  }
};
</script> 

<style>
.app {
  background-color: white;
  font-family: "Roboto", sans-serif;
}
.container {
  width: 970px;
  height: auto;
}
.header {
  margin: 0 auto;
  height: auto;
}
#logo {
  margin-top: 20px;
}
#line {
  display: block;
  height: 1px;
  margin: 30px auto auto auto;
  padding: 0;
  background-color: #dadada;
  margin-top: 30px;
}
.media-wide {
  display: inline;
  margin-left: 590px;
}
.media {
  display: inline;
  margin-left: -5px;
}
.link-list {
  list-style-type: none;
  padding-left: 0;
  margin-top: 30px;
  font-weight: 500;
  padding-bottom: 0;
  color: white;
}
.link-list a {
  text-decoration: none;
  text-decoration: none;
  color: #737373;
  font-size: 17px;
}
.link-list li {
  display: inline;
  margin-top: -10px;
  margin-right: 38px;
  margin-bottom: 15px;
  margin-left: -15px;
  text-decoration: none;
}
.navbar-toggler {
  margin-left: 160px;
}
#signin {
  /* margin-left: 150px; */
}
.regist a {
  text-decoration: none;
  color: #737373;
  font-size: 17px;
  margin-left: -200px;
  margin-right: 60px;
  cursor: pointer;
}
.regist li {
  display: inline;
  text-decoration: none;
  font-weight: 500;
}
#blog-green {
 width: 100%;
  height: 93px;
  background-color: #2ecc71;
  margin-bottom: 40px;
}
#blog-green p {
    font-size: 37px;
  font-weight: 500;
  color: white;
  margin-left: 480px;
  padding-top: 20px;
}
.line-blog {
  width: 960px;
  height: 2px;
  background-color: #2ecc71;
  margin: 10px auto auto auto;
}
</style>
