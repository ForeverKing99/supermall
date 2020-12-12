<template>
<div>
    <detail-nav-bar></detail-nav-bar>
    <!-- <nav-bar><div slot="left">hhh</div></nav-bar> -->
  </div>
</template>

<script>
import DetailNavBar from './childComps/DetailNavBar'
// import NavBar from 'components/common/navbar/NavBar'

export default {
  name:'Detail',
  components:{
    DetailNavBar,
    // NavBar
  },
  data(){
    return {
      iid:null
    }
  },
  created(){
    this.iid = this.$route.params.iid
  }
}
</script>

<style>

</style>