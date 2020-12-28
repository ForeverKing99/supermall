<template>
  <div class="back-top" @click="backTop()">
    <img src="~assets/img/common/top.png" alt="" />
  </div>
</template>

<script>
export default {
  name: "BackTop",
  methods: {
    backTop(duration = 200) {
      const Path = this.realPath()
      console.log(document.getElementById(Path).scrollTop)
      const distance = document.getElementById(Path).scrollTop / duration
      console.log(distance)

      const timer = setInterval(() => {
        document.getElementById(Path).scrollTop -= distance
        if (document.getElementById(Path).scrollTop <= 1) {
          document.getElementById(Path).scrollTop = 0
          clearInterval(timer)
        }
      }, 1)
    },
    homeTop(duration = 100) {
      const Path = this.$route.path
      const distance = document.getElementById(Path).scrollTop / duration
      const timer = setInterval(() => {
        document.getElementById(Path).scrollTop -= distance
        if (document.getElementById(Path).scrollTop <= 1) {
          document.getElementById(Path).scrollTop = 0
          clearInterval(timer)
        }
      }, 1)
    },
    realPath() {
      const arr = this.$route.path.split("")
      let result = ""
      let counter = 0
      for (let item of arr) {
        if (item === "/") {
          counter++
          if (counter === 2) {
            console.log(result)
            return result
          } else continue
        }
        result += item
      }
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
