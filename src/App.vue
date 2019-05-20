<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
*{
	margin: 0;
	padding: 0;
	list-style: none;
}
html,body,#app{
	width: 100%;
	height: 100%;
}
#app>div{
	width: 100%;
	height: 100%;
}
@font-face {
  font-family: 'iconfont';  /* project id 1103404 */
  src: url('//at.alicdn.com/t/font_1103404_tsy1109u6b.eot');
  src: url('//at.alicdn.com/t/font_1103404_tsy1109u6b.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_1103404_tsy1109u6b.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_1103404_tsy1109u6b.woff') format('woff'),
  url('//at.alicdn.com/t/font_1103404_tsy1109u6b.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_1103404_tsy1109u6b.svg#iconfont') format('svg');
}
.iconfont{
  font-family:"iconfont" !important;
  font-size:16px;font-style:normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}
.van-tabs__nav {
	width: 80%;
	height: 98% !important;
	padding-bottom: 0rem;
	padding: 0 1.04rem 0 0;
	margin-left: 0.31rem;
}
.van-tabs__line{
	height: 0.04rem;
	bottom: 0;
}
.van-tabs{
	padding-top: 1.04rem;
	height: 1382%;
}
.van-tabs__content{
	height: 100%;
}
.van-tabs__content>div{
	height: 100%;
}
.van-tab{
	height: 100%;
	padding: 0rem;
}
.van-tab>span{
	height: 100%;
}
.van-tabs__wrap{
	height: 1.04rem !important;
}
</style>
