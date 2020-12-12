<template>
  <div class="back-top" @click="backTop()">
    <img src="~assets/img/common/top.png" alt="" />
  </div>
</template>

<script>
export default {
  name: "BackTop",
  methods: {
    backTop(duration=100) {
      const distance = document.getElementById("home").scrollTop/duration
       const timer = setInterval(()=>{
         document.getElementById("home").scrollTop -= distance
         if(document.getElementById("home").scrollTop<=1) {
           document.getElementById("home").scrollTop = 0
           clearInterval(timer)
         }
       },1)
      // console.log(document.getElementById("home").scrollTop)
      // document.getElementById("home").scrollTop = 0
    },
  },
}
</script>

<style scoped>
.back-top {
  position: fixed;
  right: 8px;
  bottom: 55px;
}

.back-top img {
  width: 43px;
  height: 43px;
}
</style>
