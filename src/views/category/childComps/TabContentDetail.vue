<template>
  <div>
    <goods-list-item
      v-for="(item, index) in categoryDetail"
      :key="index"
      :goodsItem="item"
    ></goods-list-item>
  </div>
</template>

<script>
import GoodsListItem from "components/content/goods/GoodsListItem"

export default {
  name: "TabContentDetail",
  components: {
    GoodsListItem,
  },
  props: {
    categoryDetail: {
      type: Array,
      default() {
        return []
      },
    },
  },
}
</script>

<style scoped>

</style>
