<template>
  <div id="detail" @scroll="getScroll">
    <detail-nav-bar @titleClick="navClick" ref="title"></detail-nav-bar>
    <detail-swiper :top-images="topImages"></detail-swiper>
    <detail-base-info :goods="goods"></detail-base-info>
    <detail-shop-info :shop="shop"></detail-shop-info>
    <detail-goods-info :detail-info="detailInfo"></detail-goods-info>
    <detail-param-info :param-info="paramInfo"></detail-param-info>
    <detail-comment-info :comment-info="commentInfo"></detail-comment-info>
    <goods-list :goods="recommends" @listImgLoad="imgLoad"></goods-list>
    <back-top v-show="topShow"></back-top>
    <detail-bottom-bar @addToCart="addCart"></detail-bottom-bar>
    <!-- <toast :message="message" :show="isShow"></toast> -->
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar"
import DetailSwiper from "./childComps/DetailSwiper"
import DetailBaseInfo from "./childComps/DetailBaseInfo"
import DetailShopInfo from "./childComps/DetailShopInfo"
import DetailGoodsInfo from "./childComps/DetailGoodsInfo"
import DetailParamInfo from "./childComps/DetailParamInfo"
import DetailCommentInfo from "./childComps/DetailCommentInfo"
import DetailBottomBar from "./childComps/DetailBottomBar"
import BackTop from "components/content/backTop/BackTop"
import GoodsList from "components/content/goods/GoodsList"
import Toast from "components/common/toast/Toast"
import {
  getDetail,
  Goods,
  Shop,
  GoodsParam,
  getRecommend,
} from "network/detail"
// import NavBar from 'components/common/navbar/NavBar'

export default {
  name: "Detail",
  components: {
    DetailNavBar,
    // NavBar
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    GoodsList,
    BackTop,
    DetailBottomBar,
    Toast,
  },
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommends: [],
      topShow: false,
      tabTop: [0, 1000, 2000, 3000],
      boll: 1,
      timer: null,
      message: "",
    }
  },
  computed: {},
  methods: {
    getScroll(event) {
      console.log(event.target.scrollTop)
      const scroll = event.target
      if (scroll.scrollTop >= 812) this.topShow = true
      else this.topShow = false
      // if(scroll.scrollHeight - scroll.clientHeight - scroll.scrollTop == 0){
      //   this.loadMore()
      // }
      // console.log(this.$refs.title);

      if (
        scroll.scrollTop < this.tabTop[1] &&
        scroll.scrollTop >= this.tabTop[0]
      )
        this.$refs.title.currentIndex = 0
      if (
        scroll.scrollTop < this.tabTop[2] &&
        scroll.scrollTop >= this.tabTop[1]
      )
        this.$refs.title.currentIndex = 1
      if (
        scroll.scrollTop < this.tabTop[3] &&
        scroll.scrollTop >= this.tabTop[2]
      )
        this.$refs.title.currentIndex = 2
      if (scroll.scrollTop + 1 > this.tabTop[3])
        this.$refs.title.currentIndex = 3
    },
    debounce(fn, wait) {
      var self = this
      return function() {
        if (self.timer) {
          clearTimeout(self.timer)
        }
        self.timer = setTimeout(fn, wait)
      }
    },
    navClick(index) {
      const duration = 100
      const scroll = document.getElementById("detail")
      const distance = (this.tabTop[index] - scroll.scrollTop) / duration
      // console.log(distance);

      const timer = setInterval(() => {
        scroll.scrollTop += distance
        // console.log(scroll.scrollTop);
        if (Math.abs(scroll.scrollTop - this.tabTop[index]) <= 100) {
          scroll.scrollTop = this.tabTop[index]
          clearInterval(timer)
        }
      }, 1)
    },
    imgLoad() {
      // console.log('aa');
      this.debounce(() => {
        // console.log(document.getElementsByClassName("param-info")[0].offsetTop);

        const paramY =
          document.getElementsByClassName("param-info")[0].offsetTop - 44
        const commentY =
          document.getElementsByClassName("comment-info")[0].offsetTop - 44
        const recommendsY =
          document.getElementsByClassName("goods")[0].offsetTop - 44
        // console.log(paramY, commentY, recommendsY)
        // console.log(this)

        this.tabTop[1] = paramY
        this.tabTop[2] = commentY
        this.tabTop[3] = recommendsY
      }, 1000).call(this)
    },
    addCart() {
      // console.log('ss');
      // 获取购物车的信息
      const result = {}
      result.image = this.topImages[0]
      result.title = this.goods.title
      result.desc = this.goods.desc
      result.price = this.goods.realPrice
      result.iid = this.iid

      // 2.添加进购物车
      // this.$store.commit('addCart',result)
      this.$store.dispatch("addCart", result).then(res => {
        console.log(this.$toast);
        
        this.$toast.show(res, 1500)
      })
    },
  },
  created() {
    // 1.保存传入的iid
    this.iid = this.$route.params.iid

    // 2.根据iid请求数据
    getDetail(this.iid).then(res => {
      // console.log(res)
      const data = res.result
      this.topImages = data.itemInfo.topImages

      // 3.获取商品信息
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      )

      // 4.创建店铺信息的对象
      this.shop = new Shop(data.shopInfo)

      // 5.获取商品信息
      this.detailInfo = data.detailInfo

      // 6.获取参数信息
      this.paramInfo = new GoodsParam(
        data.itemParams.info,
        data.itemParams.rule
      )

      //7.取出评论信息
      if (data.rate.cRate !== 0) {
        this.commentInfo = data.rate.list[0]
      }

      //8.获取推荐信息

      getRecommend().then((res, error) => {
        if (error) return
        this.recommends = res.data.list
      })
    })
  },
  mounted() {},
}
</script>

<style scoped>
#detail {
  height: 100vh;
  position: relative;
  overflow: scroll;
  z-index: 9;
  background-color: #fff;
  padding-bottom: 49px;
}
</style>
