<template>
  <div class="cart">
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{cartLength}})</div>
    </nav-bar>
    <cart-list :cartList="cartlist"></cart-list>
    <bottom-bar></bottom-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import BottomBar from './childComps/BottomBar'
import CartList from './childComps/CartList'
  export default {
    name: "Cart",
    components:{
      NavBar,
      CartList,
      BottomBar,
    },
    data(){
      return {
        cartlist:this.$store.state.cartList
      }
    },
    computed:{
      cartLength(){
        return  this.$store.state.allCount
      }
    }
  }
</script>

<style scoped>
.cart .nav-bar{
  position:sticky;
  top: 0;
  background-color: #fff;
  z-index: 1;
}
</style>
