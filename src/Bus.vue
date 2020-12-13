<template> </template>

<script>
import Vue from "vue"
export default new Vue({
  methods: {
    realPath(self) {
      console.log(self);
      const arr = this.$route.path.split("")
      let result = ""
      let counter = 0
      for (let item of arr) {
        if (item === "/") {self
          counter++
          if (counter === 2) {
            return result
          }
          continue
        }
        result += item
      }
    },
  },
})
</script>

<style></style>
