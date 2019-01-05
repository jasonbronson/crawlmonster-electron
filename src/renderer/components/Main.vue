<template>
    <div class="main-view">
      <side-bar v-if="showMenu"></side-bar>
      <router-view></router-view>
    </div>
</template>

<script>
  import SideBar from './SideBar'
  export default {
    name: 'scrape-images',
    components: { SideBar },
    computed: {
        showMenu() {
            return this.$route.name !== 'signin' && this.$route.name !== 'signup';
        }
    }
    
  }
</script>

<style>
  /* CSS */
html, body {
    height: 100%;
}
.container-fluid {
    min-height: 100%;
    overflow: hidden; /* don't show content that exceeds my height */
}
.column1, .column2 {
    margin-bottom: -9999px;
    padding-bottom: 9999px;
}
.column1 > img {
    min-height: 100%;
}
.btn-default {
    background-color: #1d354d;
    background-image: linear-gradient(to bottom, #1d354d, #1d354d);
    color: white;
    border-color: #ccc;
    width: 150px;
}
.btn-default{
    margin-right: 20px;
}
.signin .card{
  padding-top: 80px;  
  border:0 !important;
  text-align: center;
  line-height: 3;
  height:100%;
}
.signin .card-title{
    letter-spacing: .5rem;
}
.forminput-sign-txt {
  border: 0;
  outline: 0;
  background: transparent;
  border-bottom: 1px solid #E9E9EF;
  width: 400px;
}
.lightgrey, .lightgrey a, .lightgrey input{
    color: #48475E;
}
.small-font a, .small-font{
    font-size: .9rem;
}
.login-header .card-title{
    color: #32314F;
    line-height: 2;
    
}
</style>
