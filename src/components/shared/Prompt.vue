<template>
  <div>
    <div
      class="modal fade"
      id="deleteBlog"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle"> <p id="dialog-msg">Are you sure you want to delete:</p>{{ title }}</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" @click="confirm()" >Confirm</button>
            <button type="button" class="btn btn-danger" data-dismiss="modal">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import db from '@/firebase/init'
export default {
    props:  ['title', 'id'],
    computed: {
      blogInfo() {
      return this.$store.getters.blogInfo;
    },
    },
   methods: {
       confirm() {
         db.collection("blog").doc(this.id).delete();   
          this.$store.dispatch('loadMore'); 
           $('#deleteBlog').modal('hide');
          var articleForRemoval = this.blogInfo.find(post => post.id === this.id);
          var id = this.blogInfo.indexOf(articleForRemoval);
           this.blogInfo.splice(id, 1);
       }
   }
};
</script>

<style>
#dialog-msg {
    color: red;
    font-size: 16px;
}
</style>
