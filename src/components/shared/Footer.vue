<template>
<div class="footer">
             <div class="footer-block">
                    <h4>{{ footerInfo.footerText.title }}</h4>
                    <router-link to="/about" exact><button type="button" name="" class="footer-btn">CLICK HERE TO FIND OUT</button></router-link>
          </div>
            <div class="text-center">
                  <h6>{{ footerInfo.footerText.text }}</h6>
                            <div class="footer-links">
                                <ul>
                                 <li>
                                     <router-link to="/" exact>HOME /</router-link>
                                 </li>
                                 <li>
                                     <router-link to="/about" exact>ABOUT /</router-link>
                                 </li>
                                 <li>
                                     <router-link to="/work" exact>WORK /</router-link>
                                 </li>
                                 <li>
                                    <router-link to="/contact" exact>CONTACT</router-link>
                                 </li>
                                </ul>
                            </div>
             </div> 
             </div>
</template>
<script>
export default {
    computed: {
      footerInfo() {
     return this.$store.getters.footerInfo;
   }
  } 
}
</script>

<style>
.footer{
    width: 100%;
    height: 135px;
}
.footer-block {
    background-color: #322f2f;
    width: 100%;
    height: 140px;
    display: flex;
  }
  .footer-btn {
    width: 220px;
    height: 40px;
    color: white;
    background-color: rgb(45, 204, 114);
    border: none;
    cursor: pointer;
    margin-left: 280px;
    margin-top: 53px;
    font-weight: 700;
  }
  .footer-block h4 {
    color: white;
    margin-left: 472px;
    margin-top: 61px;
    font-size: 25px;
  }
  .text-center {
    margin-left: 507px;
    margin-top: 33px;
    display: flex;
    padding-top: -19px;
  }
  .text-center h6 {
      margin-top: -12px;
      color:#737373; 
      margin-left: -40px;
      font-weight: 700;
      font-size: 13px;
  }
  .footer-links {
    margin-left: 372px;
    font-size: 13px;
    margin-top: -15px;
  }
  .footer-links a{
      text-decoration:none;
      color:#737373;
      font-weight: 700;
  }
  .footer-links li {
    display: inline;
    margin-right: 8px;
  }
</style>