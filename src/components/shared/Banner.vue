<template>
    <div class="banner-color">
        <div class="container">
           <h3>{{ bannerText }}</h3>
           <!-- <div class="container-fluid d-flex align-items-center callout-top" :style="{ backgroundColor: bgColor }"> -->
           <!-- </div> -->
        </div>
   </div>
</template>

<script>
import db from '@/firebase/init'
import { store } from '@/store/store'
export default {
   name: "Banner",
   date(){
       return{
        //  backgroundColor:'',
        //  bgColor: '' 
       }
   },
     props: ['bannerText']
//    created() {
//        db.collection("admin").doc('Hcxjhf3ORzzfqTx2A3PZ').get()
//        then(snapshot => {
//            const adminInfo = []
//              snapshot.docs.forEach(doc=>{
//             this.bgColor = doc.data();
//        })
//    })
//  },
}
</script>

<style>
.banner-color {
  width: 100%;
  height: 100px;
  background-color: #2ecc71;
}
.banner-color h3 {
  width: 420px;
  height: 23px;
  color: white;
  padding-top: 30px;
  font-size: 28px;
  font-weight: 500;
}
</style>