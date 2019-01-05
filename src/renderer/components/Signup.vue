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
                                <input type="text" name="email" value="" placeholder="Email" class="forminput-sign-txt" v-model.trim="email" v-model="email">
                              </div>
                        </div>
                        <div class="form-group row">
                              <div class="col-sm-12">
                                <input type="password" name="password" value="" placeholder="Password" class="forminput-sign-txt" v-model="password">
                              </div>
                        </div>
                        
                        <div class="form-group row">
                                
                        </div>
                      
                        <button type="button" class="btn btn-default" @click="createAccount">Create Account</button>
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
    name: 'signup-page',
    data() {
      return {
        url: 'https://crawlmonster.com',
        version: '.01',
        imageUrl: './src/renderer/assets/background-signup.png',
        password: '',
        email: ''
      }
    },
    computed: {
      getTest () {
        return null
      }
    },
    methods: {

      createAccount() {

          this.$firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
          .then( () => {

            this.$toasted.show(' Successfully created your account ').goAway(2500);
            var user = this.$firebase.auth().currentUser;
            this.$store.commit('setUser', user);
            console.log(user);
            console.log('Success ');
            this.$router.replace({ name: "main" });

          })
          .catch( (error) => {
              console.log(error.code + ' ' + error.message);
              if(error.code == "auth/email-already-in-use"){
                this.$toasted.show(' You already have an account. Please sign in instead').goAway(3500);
              }else{
                this.$toasted.show(' Creating account failed contact support or try later').goAway(2500);
              }

              
          });

          
      },
      signin() {
          //go back to signin screen          
          this.$router.replace({ name: "signin" });
      },
      
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