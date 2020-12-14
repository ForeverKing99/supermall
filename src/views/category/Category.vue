<template>
  <div id="category">
    <nav-bar class="nav-bar">
      <div slot="center">商品分类</div>
    </nav-bar>
    <div class="content">
      <tab-menu :categories="categories" @selectItem="selectItem"></tab-menu>
      <div id="tab-content" :data="[categoryData]">
        <div>
          <tab-content-category
            :subcategories="showSubcategory"
          ></tab-content-category>
          <tab-control
            :titles="['新品', '综合', '销量']"
            @tabClick="tabClick"
          ></tab-control>
          <tab-content-detail
            :category-detail="showCategoryDetail"
           class="tab-content-detail"></tab-content-detail>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar"
import TabMenu from "./childComps/TabMenu"
import TabContentCategory from "./childComps/TabContentCategory"
import TabControl from "components/content/tabControl/TabControl"
import Scroll from "components/common/scroll/Scroll"
import TabContentDetail from "./childComps/TabContentDetail"
import { POP, SELL, NEW } from "@/common/const"

import {
  getCategory,
  getSubcategory,
  getCategoryDetail,
} from "network/category"

export default {
  name: "Category",
  components: {
    NavBar,
    TabMenu,
    TabContentCategory,
    TabControl,
    Scroll,
    TabContentDetail,
  },
  computed: {
    showSubcategory() {
      if (this.currentIndex === -1) return {}
      return this.categoryData[this.currentIndex].subcategories
    },
    showCategoryDetail() {
      if (this.currentIndex === -1) return []
      const real = this.categoryData[0]||this.categoryData[1]||this.categoryData[2]
      return real.categoryDetail[
        this.currentType
      ]
    },
  },
  created() {
    this._getCategory()
  },
  data() {
    return {
      categories: [],
      categoryData: {},
      currentIndex: -1,
    }
  },
  methods: {
    selectItem(index) {
      this._getSubcategories(index)
    },
    _getCategory() {
      getCategory().then(res => {
        
        
        // 1.获取分类数据
        this.categories = res.data.category.list
        // 2.初始化每个类别的子数据
        for (let i = 0; i < this.categories.length; i++) {
          this.categoryData[i] = {
            subcategories: {},
            categoryDetail: {
              pop: [],
              new: [],
              sell: [],
            },
          }
        }
        // 3.请求第一个分类的数据
        this._getSubcategories(0)
      })
    },
    _getSubcategories(index) {
      this.currentIndex = index
      const mailKey = this.categories[index].maitKey
      getSubcategory(mailKey).then(res => {
        
        
        this.categoryData[index].subcategories = res.data
        this.categoryData = { ...this.categoryData }
        this._getCategoryDetail("pop")
        this._getCategoryDetail("new")
        this._getCategoryDetail("sell")
      })
    },
    _getCategoryDetail(type) {
      // 1.获取请求的miniWallkey
      const miniWallkey = this.categories[this.currentIndex].miniWallkey
      // 2.发送请求,传入miniWallkey和type
      getCategoryDetail(miniWallkey, type).then(res => {
        // 3.将获取的数据保存下来
        
        
        this.categoryData[this.currentIndex].categoryDetail[type] = res
        this.categoryData = { ...this.categoryData }
      })
    },
    tabClick(index) {
      
      switch (index) {
        case 0:
          this.currentType = NEW
          this.currentIndex = 0
          break
        case 1:
          this.currentType = POP
          this.currentIndex = 1
          break
        case 2:
          this.currentType = SELL
          this.currentIndex = 2
          break
      }
      console.log(this.currentType, this.currentIndex)
    },
  },
}
</script>

<style>
#category {
  height: 100vh;
}

.nav-bar {
  background-color: var(--color-tint);
  font-weight: 700;
  color: #fff;
}

.content {
  position: absolute;
  left: 0;
  right: 0;
  top: 44px;
  bottom: 49px;

  display: flex;
}

/* .goods-item{
  width: 40% !important;
} */

#tab-content {
  height: 100%;
  flex: 1;
  overflow: scroll;
}
#tab-content::-webkit-scrollbar{
  display: none;
}
.tab-content-detail{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  /* height: 99999px; */
}
.tab-content-detail .goods-item{
  /* display: flex; */
  
  width: 30vw;
  
}
</style>
