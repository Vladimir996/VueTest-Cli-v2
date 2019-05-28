<template>
    <div>
             <div class="question">
                  <div class="container">
                        <h3 v-if="contactInfo">{{ contactInfo[0].contactTitle }}</h3>
                  </div>
             </div>
             <div class="maps">
             <iframe :src="contactInfo[0].map"></iframe>
             </div>
             <div class="container">
               <div class="container-contact">
               <ContactForm/>
                    <div class="heder-info">
                            <h4>CONTACT INFO</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur elit. Cras <br> tortor neque,ante in,
                                bibendum ornare orci.</p>
                            <b>email:</b>
                            <span id="display-info">info@display.com</span>
                            <br>
                            <b>phone:</b><span>1.306.222.4545</span><br><br>
                            <p>
                                222 2nd Ave South
                                <br>
                                Saskabush, SK S7M 1T6
                            </p>
                            <div id="store-house">
                            <h4>STORE HOURS</h4>
                           </div>
                           <br><br>
                                    <p class="store-paragraf">Monday - Thursday</p>
                                    <p class="store-paragraf">Friday
                                    <p class="store-paragraf">Saturday
                                    <p class="store-paragraf">Sunday & Holiday</p>
                            <div id="am-pm"> 
                                    <p>8am - 5pm</p>
                                    <p>8am - 6pm</p>
                                    <p>9am - 5pm</p>
                                    <p>Closed</p>
                            </div>
                            </div>

                </div>
      </div>
</div> 
</template>
<script>
import db from '@/firebase/init'
import ContactForm from "../components/contact/ContactForm.vue";
export default {
 components: {
    ContactForm
  },
  computed: {
     contactInfo() {
     return this.$store.getters.contactInfo;
   }
  },
    created() {
      db.collection('contact').get()
      .then(snapshot => {
        const contactInfo = []
          snapshot.forEach(doc => {
              contactInfo.push(doc.data())
            })
          this.$store.commit('setContactInfo', contactInfo)
      })
}
}
</script>
<style>
.container-contact{
  display: flex;
  margin-top: 30px;
}
.question {
    background-color: #2ecc71;
    width: 100%;
    height: 100px;
  }
  .question h3{
    width: 461px;
    height: 26px;
    color: white;
    padding-top: 30px;
    font-weight: 500;
    font-size: 28px;
  }
  .heder-info {
    margin-top: -20px;
    margin-left: 130px;
  }
  .maps iframe {
    width: 100%;
    height:485px;
  }
  .heder-info h4{
    width: 181px;
    height: 18px;
    color: #8a8888;
    padding-top: 21px;
    font-size: 19px;
    font-weight: 500;
    margin-bottom: 57px;
  }
  .heder-info p{
    width: 338px;
    height: 142;
    color: #8a8888;
    font-size: 15px;
  }
  .heder-info b{
    color: #8a8888;
    font-size: 15px;
  }
  .heder-info span{
    color: #8a8888;
    font-size: 15px;
  }
  #display-info {
    color: #2ecc71;
  }
  #store-house {
    width: 170px;
    height: 18px;
    color: #8a8888;
    font-size: 19px;
    font-weight: 500;
    margin-top: -10px;
  }
  #am-pm {
    width: 80px;
    height: 50px;
    margin-top: -150px;
    margin-left: 220px;
    color: #8a8888;
  }
</style>