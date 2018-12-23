<template>
      
    <div class="content signin">
        <div class="row">
            <div class="col-md-5"> 
                <img v-bind:src="imageUrl" class="img-fluid_">
            </div>
            <div class="col-md-7">
              <div class="card">
                  <div class="card-heading">
                      <h2 class="card-title"> Crawl Monster </h2>
                      <p class="lightgrey">Create a new account.</p>
                  </div>
                  <div class="card-body">

                    <form id="edit-project" class="form-horizontal col-md-12 fv-form fv-form-bootstrap" role="form" data-fv-framework="bootstrap" data-fv-icon-valid="glyphicon glyphicon-ok" data-fv-icon-invalid="glyphicon glyphicon-remove" data-fv-icon-validating="glyphicon glyphicon-refresh" novalidate="novalidate">
                        <div class="form-group row">
                              <div class="col-sm-12">
                                <input type="text" name="username" value="" placeholder="Username" class="forminput-sign-txt">
                              </div>
                        </div>
                        <div class="form-group row">
                              <div class="col-sm-12">
                                <input type="text" name="password" value="" placeholder="Password" class="forminput-sign-txt">
                              </div>
                        </div>
                        <div class="form-group row">
                              <div class="col-sm-12">
                                <input type="text" name="email" value="" placeholder="Email" class="forminput-sign-txt">
                              </div>
                        </div>
                        <div class="form-group row">
                                
                        </div>
                      
                        <button type="button" class="btn btn-default" @click="login">Create Account</button>
                        <button type="button" class="btn btn-default btn-white" @click="signin">Sign In</button>
                        
                    </form>
                  </div>
              </div>
        </div>
    </div>
</div>
   
</template>

<script>

import imageparser from '../libraries/imageparser'
const {dialog} = require('electron').remote
  export default {
    name: 'landing-page',
    data() {
      return {
        url: "https://crawlmonster.com",
        version: ".01",
        imageUrl: './src/renderer/assets/background-signup.png'
      }
    },
    computed: {
      getDirectory () {
        return this.$store.getters.getDirectoryPath.toString()
      }
    },
    methods: {

      signin(){
          this.$router.replace({ name: "signin" });
      },
      login() {
          this.errors = [];

        //   if (!this.url) {
        //     this.errors.push('Url required.');
        //     return;
        //   } else if (!this.validUrl(this.url)) {
        //     this.errors.push('Valid URL required.');
        //     return;
        //   }
          console.log("*");
          this.$router.replace({ name: "signin" });

        
      }
      
    }
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body { font-family: 'Source Sans Pro', sans-serif; }

  #wrapper {
    background:
      radial-gradient(
        ellipse at top left,
        rgba(255, 255, 255, 1) 40%,
        rgba(229, 229, 229, .9) 100%
      );
    height: 100vh;
    padding: 60px 80px;
    width: 100vw;
  }

</style>