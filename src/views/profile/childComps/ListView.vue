<template>
    <div id="list">
      <div class="item">
        <span class="icon">
          <!-- <img src="../../../assets/img/profile/vip.png" alt=""> -->
        </span>
        <div class="info">我的消息</div>
      </div>
      <div class="item">
        <span class="icon">
          <!-- <img src="../../../assets/img/profile/vip.png" alt=""> -->
        </span>
        <div class="info">积分商城</div>
      </div>
      <div class="item">
        <span class="icon">
          <!-- <img src="../../../assets/img/profile/vip.png" alt=""> -->
        </span>
        <div class="info">会员卡</div>
      </div>
      <div class="item" style="margin-top:12px;">
        <span class="icon">
          <!-- <img src="../../../assets/img/profile/vip.png" alt=""> -->
        </span>
        <div class="info">我的购物车</div>
      </div>
      <div class="item">
        <span class="icon">
          <!-- <img src="../../../assets/img/profile/vip.png" alt=""> -->
        </span>
        <div class="info">下载购物APP</div>
      </div>
    </div>
</template>

<script>
	export default {
		name: "ListView",
    props: {
		  listData: {
		    type: Array,
        default: function () {
          return []
        }
      }
    }
	}
</script>

<style scoped>
  #list {
    background-color: #fff;
    font-size: 15px;
    color: #333;
  }

  #list .item {
    height: 44px;
    line-height: 44px;
    position: relative;
  }
  #list img{
    width: 14px;
    height: 14px;
  }
  .icon svg {
    width: 18px;
    height: 18px;
  }

  .item .icon {
    margin-top: 10px;
    position: absolute;
    left: 16px;
    top: -7px;
  }

  .item .info {
    margin-left: 40px;
    border-bottom: 1px solid rgba(100, 100, 100, .1);
    padding-left: 5px;
  }

  .item:last-of-type .info {
    border-bottom: none;
  }
</style>
