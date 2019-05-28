<template>
  <div>
    <Slick class="slick-container" ref="slick" :options="slickOptions">
      <div>
        <!-- <img class="slick-img" src="../../assets/5.png"> -->
        <img class="slick-img" :src="homeInfo[0].caruselPhoto1">
      </div>
      <div>
        <img class="slick-img" :src="homeInfo[0].caruselPhoto2">
      </div>
      <div>
         <img class="slick-img" :src="homeInfo[0].caruselPhoto3">
      </div>
      <div>
        <img class="slick-img" :src="homeInfo[0].caruselPhoto4">
      </div>
      <div>
        <img class="slick-img" :src="homeInfo[0].caruselPhoto5">
      </div>
      <div>
        <img class="slick-img" :src="homeInfo[0].caruselPhoto6">
      </div>
      <div>
        <img class="slick-img" :src="homeInfo[0].caruselPhoto7">
      </div>
      <div>
        <img class="slick-img" :src="homeInfo[0].caruselPhoto8">
      </div>
      <div>
        <img class="slick-img" :src="homeInfo[0].caruselPhoto9">
      </div>
      <div>
        <img class="slick-img" :src="homeInfo[0].caruselPhoto5">
      </div>
    </Slick>
    <div class="carousel-text">
      <slick id="slick2" ref="slick" class="slick-paragraph" :options="slickOptions2">
        <div>
          <h4>{{ homeInfo[0].caruselTitle1 }}</h4>
         <p>{{ homeInfo[0].caruselText1 }}</p>
        </div>
        <div>
          <h4>{{ homeInfo[0].caruselTitle2 }}</h4>
          <p>{{ homeInfo[0].caruselText2 }}</p>
        </div>
        <div>
          <h4>{{ homeInfo[0].caruselTitle3 }}</h4>
          <p>{{ homeInfo[0].caruselText3 }}</p>
        </div>
        <div>
          <h4>{{ homeInfo[0].caruselTitle4 }}</h4>
         <p>{{ homeInfo[0].caruselText4 }}</p>
        </div>
        <div>
          <h4>{{ homeInfo[0].caruselTitle5 }}</h4>
        <p>{{ homeInfo[0].caruselText5 }}</p>
        </div>
        <div>
          <h4>{{ homeInfo[0].caruselTitle6 }}</h4>
          <p>{{ homeInfo[0].caruselText6 }}</p>
        </div>
        <div>
          <h4>{{ homeInfo[0].caruselTitle7 }}</h4>
        <p>{{ homeInfo[0].caruselText7 }}</p>
        </div>
        <div>
          <h4>{{ homeInfo[0].caruselTitle8 }}</h4>
           <p>{{ homeInfo[0].caruselText8 }}</p>
        </div>
        <div>
          <h4>{{ homeInfo[0].caruselTitle9 }}</h4>
           <p>{{ homeInfo[0].caruselText9 }}</p>
        </div>
        <div>
          <h4>{{ homeInfo[0].caruselTitle10 }}</h4>
          <p>{{ homeInfo[0].caruselText10 }}</p>
        </div>
      </slick>
    </div>
    <div class="ostali-samo-dugmici">
      <button @click="prev" class="prev-button">
        <p> < </p>
      </button>
      <button @click="next" class="next-button">
        <p>></p>
      </button>
    </div>
  </div>
</template>
<script>
import db from '@/firebase/init'
import Slick from "vue-slick";
export default {
  name: "Carusel",
  components: {
    Slick
  },
  data() {
    return {
      slickOptions: {
        centerMode: true,
        variableWidth: true,
         focusOnSelect: true,
        slidesToShow: 5,
        arrows: false,
        asNavFor: ".slick-paragraph"
      },
      slickOptions2: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        autoplay: false,
        autoplaySpeed: 2000,
        asNavFor: ".slick-container"
      }
    };
  },
  methods: {
    next() {
      this.$refs.slick.next();
    },
    prev() {
      this.$refs.slick.prev();
    },
    reInit() {
      this.$nextTick(() => {
        this.$refs.slick.reSlick();
      });
    }
  },
  computed: {
    homeInfo() {
      return this.$store.getters.homeInfo;
    }
  },
   created() {
      db.collection('home').get()
      .then(snapshot => {
        const homeInfo = []
          snapshot.forEach(doc => {
             homeInfo.push(doc.data())
            })
          this.$store.commit('sethomeInfo', homeInfo)
      })
}
};
</script>
<style>
.slick-container {
  width: 100%;
}
.prev-button {
  font-weight: bold;
  font-size: 90px;
  border: none;
  color: darkgrey;
  background-color: white;
  cursor: pointer;
}
.prev-button:focus {
  outline: none;
}
.prev-button:hover {
  color: #28a745;
}
.prev-button p {
  margin-top: -38px;
  margin-left: -5px;
}
.next-button {
  margin-left: 606px;
  font-weight: bold;
  font-weight: 900;
  font-size: 90px;
  border: none;
  color: darkgrey;
  background-color: white;
  cursor: pointer;
}
.next-button:focus {
  outline: none;
}
.next-button:hover {
  color: #28a745;
}
.next-button p {
  margin-top: -38px;
  margin-left: -5px;
}
.slick-container .slick-slide {
  margin: 0 10px;
}
.carousel-text {
  width: 600px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  color: #8f8d8d;
}
.ostali-samo-dugmici {
  margin-left: 600px;
  margin-top: -70px;
}
</style>