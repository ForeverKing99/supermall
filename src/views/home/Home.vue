<template>
  <div id="home" class="wrapper" @scroll="getScroll">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <recommend-view :recommends="recommends"></recommend-view>
    <feature-view></feature-view>
    <tab-control
      :titles="['流行', '新款', '精选']"
      class="tab-control"
      @tabClick="whatType"
    ></tab-control>
    <home-list :goods="showGoods"></home-list>
    
    <home-top v-show="topShow"></home-top>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar"
import TabControl from "components/content/tabControl/TabControl"
import HomeList from "components/content/goods/HomeList"
import HomeTop from "components/content/backTop/HomeTop"
import HomeSwiper from "./childComps/HomeSwiper"
import RecommendView from "./childComps/RecommendView"
import FeatureView from "./childComps/FeatureView"

import { scrollTop } from "common/mixin"
import { getHomeMultidata, getHomeGoods } from "network/home.js"

export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    HomeList,
    HomeTop,
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      goodsType: "pop",
      scrollY:0,
      topShow:false
    }
  },
  created() {
    //1. 请求轮播图和推荐的数据
    this.getHomeMultidata()
    // 2.请求商品数据
    this.getHomeGoods("pop")
    this.getHomeGoods("new")
    this.getHomeGoods("sell")
  },
 
  computed: {
    showGoods() {
      return this.goods[this.goodsType].list
    },
  },

  methods: {
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        // console.log(res)
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
      })
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1

      getHomeGoods(type, page).then(res => {
        console.log(res);
        
        this.goods[type].page += 1
        this.goods[type].list.push(...res.data.list)
      })
    },
    
    loadMore(){
      this.getHomeGoods(this.goodsType)
    },
    whatType(index) {
      this.goodsType = Object.keys(this.goods)[index]
      const type = this.$store.state.currentType[index]
      document.getElementById("home").scrollTop = this.$store.state[type]
      console.log(type)
      console.log(this.$store.state[type]);
      
      
      
    },
    contentScroll(position) {
      this.isShowBackTop = -position.y > 1000
    },
    getScroll(event){
      // console.log(event);
      
      const scroll = event.target
      this.$store.state[this.goodsType] = scroll.scrollTop
      if(scroll.scrollTop >= 812) this.topShow = true
      else this.topShow = false
      if(scroll.scrollHeight - scroll.clientHeight - scroll.scrollTop == 0){
        this.loadMore() 
      }
    },
    

  },
   activated() {
    document.getElementById("home").scrollTop = this.$store.state[this.goodsType]
    
  },
  deactivated() {
    // console.log(this.$store.state)
    
    
  },
}
</script>

<style scoped>
#home {
  padding-top: 44px;
  height: 100vh;
  position: relative;
  overflow: scroll;
}



.home-nav {
  background-color: var(--color-tint);
  color: rgb(255, 255, 255);

  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}

.tab-control {
  position: sticky;
  top: 0px;
}
</style>
