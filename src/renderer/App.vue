<template>
  <div id="app" class="row">
    <div class="container-fluid">
       <router-view></router-view>
    </div>  
  </div>
</template>

<script>
  export default { 
    name: 'crawler'
  }
</script>

<style>
  /* CSS */
.btn-default {
    background-color: #1d354d;
    background-image: linear-gradient(to bottom, #1d354d, #1d354d);
    color: white;
    border-color: #ccc;
}
.card{
  border:0 !important;
}
</style>
