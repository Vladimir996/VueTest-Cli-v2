<template>
    <div >
         <div class="form-contact">
                    <h3>CONTACT FORM</h3>
                    <p>Proin pharetra volutpat quam, nec malesuada elit lobortis id. Curabitur mauris sem, scelerisque et sem et, auctor lobortis felis.</p>
                        <form action v-if="showForm">   
                            <div class="input" :class="{ invalid: $v.name.$error }">
                            <input type="text" name="tekst" @blur="$v.name.$touch()" placeholder="Name" class="input-field" v-model="name" >
                            <p v-if="$v.name.$error">Import name!</p>
                            </div>
                            <div class="input" :class="{ invalid: $v.email.$error }">
                                <input type="email" class="input-field" @blur="$v.email.$touch()" placeholder="Email Address"  v-model="email">
                                <p v-if="$v.email.$error">Please valid email address!</p>
                            </div>
                            <input type="text" name="subject" placeholder="Subject" class="input-field">
                             <div class="input" :class="{ invalid: $v.textarea.$error }">
                            <textarea class="input-text" rows="10" maxlength="500" @input="$v.textarea.$touch()" v-model="textarea" ></textarea>
                            <p id="text-area" v-if="$v.textarea.$error"> Error 'You cannot use more than 100 characters</p>
                            </div>    
                            <div class="form-btns">
                            <button type="button" :disabled="$v.$invalid || !check" name="send"  v-on:click="sendMessages" class="btn-contact"  >SEND MESSAGE</button>
                            <vue-recaptcha sitekey="6LdKW5UUAAAAAC6foMBDpclZplysFeqhSy5GldXT" @verify="onVerify()"></vue-recaptcha>
                            </div>
                         </form>  
         </div>
    </div>
</template>

<script>
import { required, email, maxLength } from 'vuelidate/lib/validators';
 import VueRecaptcha from 'vue-recaptcha';
export default {
    name: 'ContactForm',
    components: { VueRecaptcha },
    data() {
     return {
         showForm: true,
         email: '',
         name: '',
         textarea:'',
         VueRecaptcha: false,
        check: false,
     }
    },
    validations: {
        email: {
         required,
         email
        },
        name: {
            required,
            name
        },
        textarea: {
           maxLength: maxLength(100),
           required
        },
    },
    methods: {
     sendMessages() {
       this.showForm = false;
       alert("Send messages");
     },
    onVerify() {
      this.check = true;
    }
    }
};
</script>

<style>
  .form-contact h3{
    color: #8a8888;
    width: 190px;
    height: 18px;
    font-size: 19px;
    font-weight: 500;
    margin-bottom: 40px;
  }
  .form-contact p{
    width: 555px;
    height: 35px;
    color: #8a8888;
    font-size: 15px;
  }
  .input-field {
    width: 350px;
    height: 45px;
    border: 2px solid #8a8888;
    box-sizing: border-box;
    margin-bottom: 20px;
  }
  input.input-field {
      margin-bottom: 5px;
  }
  .input.invalid p {
      color: red;
      height: 10px;
      margin-bottom: 30px;
  }
  #text-area{
      margin-top: -15px;
      margin-bottom: 10px;
  }
  .input-text {
    width: 560px;
    height: 221px;
    border: 2px solid #8a8888;
    margin-bottom: 10px;
  } 
  .btn-contact {
    width: 140px;
    height: 40px;
    font-weight: 600;
    border: none;
    background-color: rgb(45,204,114); 
    color: white;
    margin-bottom: 20px;
    margin-right: 120px;
    cursor: pointer;
  }
  .form-btns{
      display: flex;
  }
  .disable {
    background-color: lightslategrey;
    color: black;
  }
  button:disabled {
    background-color: darkgrey !important;
  }
</style>