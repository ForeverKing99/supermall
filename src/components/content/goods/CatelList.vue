<template>
  <div class="goods">
    <cate-list-item v-for="(item,index) in goods" :key="index" :goods-item="item" @itemImgLoad="listImgLoad"/>
  </div>
</template>

<script>
  import CateListItem from './CateListItem'

  export default {
    name: "CateList",
    components: {
      HomeListItem
    },
    props: {
      goods: {
        type: Array,
        default() {
          return []
        }
      }
    },
    methods: {
      listImgLoad(){
        this.$emit('listImgLoad')
      }
    },
  }
</script>

<style scoped>
  .goods {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    padding: 2px;
  }


</style>
