<template>
  <div >
    <div class="page-title">
      <div class="container">
        <h3 v-if="aboutInfo">{{ aboutInfo[0].hederText }}</h3>
      </div>
    </div>
    <div class="container main-about" >
      <img  class="float-left"  :src="aboutInfo[0].photoAbout">
      <p>{{ aboutInfo[0].paragraph }}</p>
    </div>
    <div class="mission-statement container">
      <div>
      <h4>{{ aboutInfo[0].missionTitle }}</h4>
      <p>{{ aboutInfo[0].missionText }}</p>
      </div>
      <div class="fun-facts">
        <h4>{{ aboutInfo[0].funTitle }}</h4>
        <p>{{ aboutInfo[0].funText }}</p>
      </div>
    </div>
    <div class="services container">
      <h4>{{ aboutInfo[0].services }}</h4>
    </div>
    <div class="panel">
      <div class="container panel-center">
        <div @click="currentTab = 0" :class="{ activeTab: currentTab === 0 }">
          <img :src="aboutInfo[0].webPanelurl" class="photos">
          <h4 id="websites">{{ aboutInfo[0].webPaneltitle }}</h4>
        </div>
        <div @click="currentTab = 1" :class="{ activeTab: currentTab === 1 }">
          <img :src="aboutInfo[0].photoPanelurl" class="photos">
          <h4 id="photography">{{ aboutInfo[0].photoPaneltitle }}</h4>
        </div>
        <div @click="currentTab = 2" :class="{ activeTab: currentTab === 2 }">
          <img :src="aboutInfo[0].seoPanelurl" class="photos">
          <h4 id="seo">{{ aboutInfo[0].seoPaneltitle }}</h4>
        </div>
        <div @click="currentTab = 3" :class="{ activeTab: currentTab === 3 }">
          <img :src="aboutInfo[0].appPanelurl" class="photos">
          <h4 id="applications">{{ aboutInfo[0].appPaneltitle }}</h4>
        </div>
      </div>
      <div class="about-services">
        <p>{{ tabs[currentTab].description }}</p>
      </div>
    </div>
  </div>
</template>
<script>
import db from '@/firebase/init'

export default {
  data() {
    return {
      currentTab: 1,
      tabs: [
        {
          description:
            "Vel omnis nulla at, nam doming deleniti ei. Pri ne uctior nec an, eu vix augue vulputate consectetuer. Duis pertinax salutandi an has. Vivendo facilisi constituam ea vim."
        },
        {
          description:
            "Et pro posse exerci. Alterum suscipit ad mea, id tota decore contentiones nam. Ne sea iriure albucius percipitur, cu clita utamur has. Eos an tibique partiendo."
        },
        {
          description:
            "Sit id mentitum iudicabit consectetuer, modus nonumes Choro saepe laboramus ad sea, facer graeci ei sed, et eam malis nullam altera."
        },
        {
          description:
            "Cum errem necessitatibus ex, at decore  hasVoluptua intellegat sententiae te his. Eum ad agam augue scriptorem, ex causae dissentias nam."
        }
      ]
    };
  },
  computed: {
    aboutInfo() {
      return this.$store.getters.aboutInfo;
    }
  },
    created() {
      db.collection('about').get()
      .then(snapshot => {
        const aboutInfo = []
          snapshot.forEach(doc => {
              aboutInfo.push(doc.data())
            })
          this.$store.commit('setAboutInfo', aboutInfo)
      })
}
};
</script>
<style>
.main-about {
  overflow: hidden;
  margin-top: 20px;
}
.main-about p {
  color: #8a8888;
  font-size: 14px;
  margin-left: 410px;
}
.page-title {
  background-color: #2ecc71;
}
.page-title h3 {
  color: white;
  padding: 30px 0px;
}
.photo-about {
 
  display: flex;
}
.mission-statement {
  display:grid;
  grid-template-columns: 1fr 1fr;
  color: #8a8888;
  margin-top: 19px;
  font-size: 14px;
  clear: left;
}
.mission-statement h4 {
  font-size: 19px;
  font-weight: 500;
}
.fun-facts h4 {
  font-size: 19px;
  font-weight: 500;
  margin-left: 15px;
}
.fun-facts p {
  margin-left: 15px;
}
.services h4 {
  margin-bottom: 25px;
  font-size: 19px;
  font-weight: 500;
  text-decoration: 0 none;
    color: #8a8888;
}
.panel {
  text-align: center;
  height: 200px;
  margin-bottom: 100px;
  background-color: #efefef;
}
.panel-center {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  cursor: pointer;
}
.panel h4 {
  color: #423e3e;
  margin-top: 20px;
}
.photos {
  margin-top: 47px;
}
#websites {
  margin-top: 30px;
  font-size: 21px;
}
#photography {
  margin-top: 45px;
  font-size: 21px;
}
#seo {
  margin-top: 40px;
  font-size: 21px;
}
#applications {
  margin-top: 45px;
  font-size: 21px;
}
.about-services {
  width: 500px;
  height: 120px;
  margin-top: 25px;
  margin-left: 650px;
}
.activeTab {
  height: 200px;
  background-color: #dadada;
  color: #423e3d;
}
</style>