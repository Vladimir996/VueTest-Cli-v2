<template>
  <div>
    <div id="blog-green">
      <p>PROFILE DATA</p>
    </div>
    <div class="container-data">
      <div class="new-post">
        <p>First name:</p>
        <input class="first-name" v-model="currentUser.username" type="text" placeholder="Firste name">
        <br>
        <p>Profil photo:</p>
        <input
          class="img-profile"
          v-model="currentUser.imgUrl"
          type="text"
          placeholder="Profil photo(URL)">
        <p>Biography:</p>
        <textarea class="biography" v-model="currentUser.biography"></textarea>
        <div>
          <button class="btn btn-success" @click="profileInformation()">SAVE</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import db from "@/firebase/init";
export default {
  data() {
    return {
      name: '',
      imgUrl: '',
      biography: '',
      id: '',
    };
  },
  computed: {
    currentUser() {
      return this.$store.getters.currentUser;
    }
  },
  methods: {
    profileInformation() {
      db.collection("profile")
        .add({
          // id: this.$route.params.id,
          // user_id: this.currentUser.id,
          username: this.username,
          imgUrl: this.imgUrl,
          biography: this.biography,
        })
        .then(() => {
          this.$router.push({ path: "/profile" });
        });
    },
  }
};
</script>

<style scoped>
.container-data {
  height: auto;
  width: 970px;
  margin-left: 480px;
}
#cke_ckeditor {
  width: 1000px;
}
.btn-success {
  margin-top: 30px;
  margin-bottom: 20px;
}
.first-name {
  margin-bottom: 20px;
  width: 100%;
  height: 40px;
  border: 3px solid darkgrey;
}
.img-profile {
  margin-bottom: 20px;
  border: 3px solid darkgrey;
  width: 100%;
  height: 40px;
}
.new-post p {
  margin-bottom: -3px;
}
.biography {
  width: 100%;
  height: 200px;
  border: 3px solid darkgrey;
}
</style>
