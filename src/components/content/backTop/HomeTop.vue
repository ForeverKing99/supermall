<template>
  <div class="back-top" @click="homeTop()">
    <img src="~assets/img/common/top.png" alt="" />
  </div>
</template>

<script>
export default {
  name: "BackTop",
  methods: {
    homeTop(duration = 100) {
      const Path = this.$route.path.replace('/','')
      // console.log(Path)
      console.log(document.getElementById(Path))
      const distance = document.getElementById(Path).scrollTop / duration
      const timer = setInterval(() => {
        document.getElementById(Path).scrollTop -= distance
        if (document.getElementById(Path).scrollTop <= 1) {
          document.getElementById(Path).scrollTop = 0
          clearInterval(timer)
        }
      }, 1)
      // console.log(document.getElementById("home").scrollTop)
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
