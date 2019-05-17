<template>
  <div class="homeIndex">
		<div class="homehead">
			<div class="homediv1">
				<div>
					<span class="iconfont">&#xe625;</span>
					致我们暖暖的小时光
				</div>
				<span class="iconfont">&#xe675;</span>
				<span class="iconfont">&#xe6c7;</span>
				<span class="iconfont">&#xe656;</span>
			</div>
			<div>
				<div class="ulbox"></div>
				<div class="xiabox"></div>
			</div>
		</div>
		<div class="homesec">
			<router-view></router-view>
		</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
			
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.homeIndex{
	padding-top: 2.08rem;
	box-sizing: border-box;
}
.homehead{
	width: 100%;
	height: 2.08rem;
	display: flex;
	flex-direction: column;
	border-bottom: 0.02rem solid #999999;
	position: fixed;
	top: 0;
	left: 0;
}
.homehead>div{
	flex: 1;
	padding: 0 0.2rem 0 0.41rem;
	box-sizing: border-box;
}
.homediv1{
	display: flex;
	align-items: center;
}
.homediv1>div{
	width: 5.89rem;
	height: 80%;
	background: #f2f2f2;
	border-radius: 1.04rem;
	margin-right: 0.2rem;
	display: flex;
	align-items: center;
	font-size: 0.41rem;
	color: #b3b3b3;
	padding-left: 0.41rem;
	box-sizing: border-box;
}
.homediv1>div>span{
	font-size: 0.37rem;
	margin-right: 0.2rem;
}
.homediv1>span{
	flex: 1;
	text-align: center;
	font-size: 0.58rem;
}
.homesec{
	width: 100%;
}
</style>
