import BackTop from 'components/content/backTop/BackTop'
export const scrollTop = {
  data() {
    return{
      topShow: false,
    }
  },
  components:{
    BackTop
  },
  methods:{
    getScroll(event){
      const scroll = event.target
      this.$store.state[this.goodsType] = scroll.scrollTop
      if(scroll.scrollTop >= 812) this.topShow = true
      else this.topShow = false
      if(scroll.scrollHeight - scroll.clientHeight - scroll.scrollTop == 0){
        this.loadMore() 
      }
    },
  },
  
}