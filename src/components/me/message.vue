<template>
  <div class="cmessage" :id="theme">
    <header></header>
    <div class="wrapper">
      <router-link to="/me"><div class="icons"></div></router-link>
      <div class="text">消息通知</div>
    </div>
    <div class="mcontent">
      <div class="list">
        <span class="icon"><img src="../../assets/img/27-女头像.png" alt=""width="32" height="32"></span>
        <span class="middle">
            <div class="name">蓝小穹</div>
            <div class="message">欢迎使用蓝穹APP阅读时事金融新闻，一手掌握最新金融资讯</div>
            <div class="time">11-20</div>
          </span>

      </div>

    </div>
    <v-footer></v-footer>
  </div>
</template>

<script>
  import footer from '../footer/footer.vue'
    export default {
        data() {
            return {}
        },
      components:{
          'v-footer':footer
      },
      computed:{
      	theme(){
        	return this.$store.state.theme
        }
      }
    }
</script>

<style lang="less">
 @import (reference)'../../assets/less/common';
  .cmessage{
    position:fixed;
    top:0;
    left:0;
    bottom:0;
    width:100%;
    height:667px;
    z-index:100;
    background:@bg;
    header{
      height:20px;
      background:@bg1;
    }
    .wrapper{
      position:relative;
      height:45px;
      width:100%;
      padding:15px 0;
      text-align: center;
      .text{
        font-family:PingFangSC-Semibold;
        font-size: 16px;
        color: @33;
      }
      .icons{
        position:absolute;
        left:15px;
        top:15px;
        width:16px;
        height:16px;
        background:url(../../assets/img/4_icon_back.png)no-repeat center center;
        background-size:16px 16px;

      }
    }
    .mcontent{
      position:fixed !important;
      top:65px;
      bottom:50px;
      width:100%;
      .list{
        display:flex;
        position:relative;
        height:71px;
        width:100%;
        padding:10px 15px;
        .icon{
          flex:0 0 47px;
          display:inline-block;
          vertical-align: top;
          padding:0 0px 17px 0;
          width:47px;
        }
        .middle{
          flex:1;
          display:inline-block;
          vertical-align: top;
          width:285px;
          .name{
            font-family:PingFangSC-Regular;
            font-size: 14px;
            color: @33;
          }
          .message{
            font-family:PingFangSC-Regular;
            font-size: 16px;
            color: @88;
          }
          .time{
            position:absolute;
            top:10px;
            right:15px;
            font-family: PingFangSC-Regular;
            font-size: 11px;
            color: @light;
          }
        }
      }


    }

  }
  #black{
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:667px;
    z-index:100;
    background:@bbg;
    header{
      height:20px;
      background:@bg1;
    }
    .wrapper{
      position:relative;
      height:45px;
      width:100%;
      padding:15px 0;
      text-align: center;
      .text{
        font-family:PingFangSC-Semibold;
        font-size: 16px;
        color: @b33;
      }
      .icons{
        position:absolute;
        left:15px;
        top:15px;
        width:16px;
        height:16px;
        background:url(../../assets/img/48_dark_back.png)no-repeat center center;
        background-size:16px 16px;

      }
    }
    .mcontent{
      background:@bbg;
      width:100%;
      .list{
        display:flex;
        position:relative;
        height:71px;
        width:100%;
        padding:10px 15px;
        .icon{
          flex:0 0 47px;
          display:inline-block;
          vertical-align: top;
          padding:0 0px 17px 0;
          width:47px;
        }
        .middle{
          flex:1;
          display:inline-block;
          vertical-align: top;
          width:285px;
          .name{
            font-family:PingFangSC-Regular;
            font-size: 14px;
            color: @b33;
          }
          .message{
            font-family:PingFangSC-Regular;
            font-size: 16px;
            color: @b88;
          }
          .time{
            position:absolute;
            top:10px;
            right:15px;
            font-family: PingFangSC-Regular;
            font-size: 11px;
            color: @blight;
          }
        }
      }


    }

  }
</style>
