<template>
  <!-- Sidebar  -->
    <div class="main-view">
      <side-bar></side-bar>
      <slot></slot>
    </div>
</template>

<script>
import SideBar from '@/components/SideBar';

export default {
  components: {
    SideBar
  }
};
</script>

<style>
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
</style>

