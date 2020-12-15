<template>
  <div>
    <cate-list-item
      v-for="(item, index) in categoryDetail"
      :key="index"
      :goodsItem="item"
    ></cate-list-item>
  </div>
</template>

<script>
import CateListItem from "components/content/goods/CateListItem"

export default {
  name: "TabContentDetail",
  components: {
    CateListItem,
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
