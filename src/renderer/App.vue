<template>
  <div id="app" class="row">
    <div class="container-fluid">
       <component :is="layout">
         <router-view></router-view>
       </component>
    </div>  
  </div>
</template>

<script>
  const default_layout = "sidebar";

  export default { 
    computed: {
      layout() {
        return (this.$route.meta.layout || default_layout) + '-layout';
      }
    }
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
