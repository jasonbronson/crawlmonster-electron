<template>
    
    <div class="content signin">
        <div class="row">
            <div class="column1 col-md-5"> 
                <img v-bind:src="imageUrl" class="img-fluid_">
            </div>
            <div class="column2 col-md-7">
                <div class="card">
                    <div class="card-heading login-header">
                        <h2 class="card-title"> Crawl Monster </h2>
                        <p class="lightgrey">Welcome back! Please login to your account.</p>
                    </div>
                    <div class="card-body">

                    <form id="edit-project" class="form-horizontal col-md-12 fv-form fv-form-bootstrap" role="form" data-fv-framework="bootstrap" data-fv-icon-valid="glyphicon glyphicon-ok" data-fv-icon-invalid="glyphicon glyphicon-remove" data-fv-icon-validating="glyphicon glyphicon-refresh" novalidate="novalidate">
                        <div class="form-group row">
                                <div class="col-sm-12">
                                <input type="text" name="email" value="" placeholder="Email" class="forminput-sign-txt"  v-model="email">
                                </div>
                        </div>
                        <div class="form-group row">
                                <div class="col-sm-12">
                                <input type="password" name="password" value="" placeholder="Password" class="forminput-sign-txt" v-model="password">
                                </div>
                        </div>
                        <div class="form-group row lightgrey small-font">
                                <div class="col-sm-3 offset-md-4">
                                   <!-- <input type="checkbox" name="remember_me" value="" class="forminput-sign-checkbox"> Remember me -->
                                   <a href="#" class="forgot-password" @click="login">Forgot Password</a>
                                </div>
                                <div class="col-sm-3">
                                   
                                </div>
                        </div>
                        <div class="form-group row">
                                
                        </div>
                        
                        
                        <button type="button" class="btn btn-default" @click="login">Login</button>
                        <button type="button" class="btn btn-default btn-white" @click="signup">Sign Up</button>
                        
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
    name: 'signin-page',
    data() {
      return {
        imageUrl: './src/renderer/assets/background-signup.png',
        email: 'jasonbronson@gmail.com',
        password: ''
      }
    },
    computed: {
      getTest () {
        return null
      }
    },
    methods: {

      signup(){
          this.$router.replace({ name: "signup" });
      },
      login() {
          this.errors = [];

          this.$firebase.auth().signInWithEmailAndPassword(this.email, this.password)
          .then( () => {
              this.$toasted.show(' Successfully logged in').goAway(2500);
              var user = this.$firebase.auth().currentUser;
              this.$store.commit('setUser', user);
              console.log(user);
              console.log('Success ');

              this.$router.replace({ name: "landing-page" });
          })
          .catch( (error) => {
             
              console.log(error.code + ' ' + error.message);
              //show error on screen
              this.$toasted.global.error(' Login Failed').goAway(2500);
             
          });
        
      }
      
    }
  }
</script>

<style>

  
  .forgot-password{
      color: #1d354d;
  }


</style>
