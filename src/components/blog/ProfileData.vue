<template>
  <div>
    <div id="blog-green">
      <p>PROFILE DATA</p>
    </div>
    <div class="container-data">
      <div class="new-post">
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
      imgUrl: '',
      biography: '',
      id: '',
    };
  },
  computed: {
    currentUser: {
      get() { 
          return this.$store.getters.currentUser;
        },
      set(newValue) {
         this.$store.commit('setCurrentUser', newValue)
        }
    }
  },

  methods: {
    profileInformation() {
      console.log(this.imgUrl)
      db.collection("user")
        .doc(this.currentUser.id).update({
          imgUrl: this.currentUser.imgUrl,
          biography: this.currentUser.biography,
        })
        .then(() => {
          this.$router.push({ path: "/profile/" + this.currentUser.id  });
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
