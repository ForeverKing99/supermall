<template>
  <div class="goods">
    <home-list-item v-for="item in goods" :goods-item="item" @itemImgLoad="listImgLoad"/>
  </div>
</template>

<script>
  import HomeListItem from './HomeListItem'

  export default {
    name: "GoodsList",
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
        // console.log('goodslist load');
        
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
