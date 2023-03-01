<template>
  <header class="p-header">
    <div class="letftHeader">
        <span class="pintai">一体化平台</span>
        <a class="zong">总览</a>
        <a class="zong2">
            云产品
            <i class="fa-solid fa-angle-down"></i>
        </a>
        <a>云服务器</a>
        <span style=" font-size: 1px;
        color: white;">|</span>
        <a>域名服务</a>
        <a>网站备案</a>
        <a><i class="fa-solid fa-ellipsis"></i></a>
        <a><i class="fa-solid fa-plus"></i></a>
    </div>
    <div class="rigftHeader">
        <a class="zong">
            <i class="fa-sharp fa-solid fa-qrcode"></i>
        </a>
        <a class="zong2">
            <i class="fa-sharp fa-regular fa-envelope"></i>
        </a>
        <a>帮助</a>
        <a class="zong2">
            工单
            <i class="fa-solid fa-angle-down"></i>
        </a>
        <a class="zong2">
            费用
            <i class="fa-solid fa-angle-down"></i>
        </a>
        <a class="img-user">
            <img src="https://i.ibb.co/FJGtc8J/user-normal.png">
            <span>GithubCloud...</span>
            <i class="fa-solid fa-angle-down"></i>
        </a>
    </div>
  </header>
</template>
<style  scoped>
@import '/src/assets/css/fontawesome.css';
@import '/src/assets/css/brands.css';
@import '/src/assets/css/solid.css';
  *{
      margin: 0;
      padding: 0;
      font-size: 0;
      }
        .p-header a{
            font-size: 10px;
            color: azure;
        }
        .p-header{
            width: 100%;
            height: 64px;
            background-color:  #262F3E;
        }
        .p-header .letftHeader{
            width:55%;
            height: 100%;
            line-height: 60px;
            float: left;
            padding-left: 15px;
        }
        .rigftHeader{
            width: 31%;
           float: right;
           height: 100%;
           line-height: 60px;
            padding-right: 10px;
        }
        .p-header .letftHeader .pintai{
            font-size: 18px;
            color: azure;
           
            font-family: fantasy;
            padding-right: 15px;
        }
        .p-header .letftHeader a,.p-header .rigftHeader a{
            padding-left: 12px;
            padding-right: 12px;
        }
      .p-header   i{
        font-size: 1px;
      }
      .p-header .rigftHeader a{
            font-family: fantasy;

      }
     img{
        width: 15px;
        height: 15px;
        display: inline-block;
        vertical-align: middle;
        padding-right: 5px;
     }
    .img-user span{
        font-size: 1px;
    }
    </style>
