<template>
  <div class="theTotal">
		<div class="secbox">
			<router-view></router-view>
		</div>
		<van-tabbar
			v-model="active"
			active-color="#fc5b23"
		>
			<van-tabbar-item v-for="iteam in footli" @click="dianjump(iteam.jump)">
				<a class="iconfont" v-html="iteam.spanimg">{{iteam.spanimg}}</a>
				<span>{{iteam.title}}</span>
			</van-tabbar-item>
		</van-tabbar>
  </div>
</template>

<script>
export default {
  data () {
    return {
      active: 0,
			footli:[]
    }
  },
	created(){
		var url = "../../static/pagesjson/theTotalJson/footerjson.json"
		this.axios.get(url).then((response) => {
			this.footli = response.data.data
			console.log(response.data)
		})
	},
	methods:{
		dianjump(tiao){
			this.$router.push(tiao)
		}
	}
	
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.van-tabbar-item{
	border-top: 0.02rem solid #999999;	
}
.van-tabbar-item>.van-tabbar-item__text{
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
.van-tabbar-item>.van-tabbar-item__text>a{
	margin-bottom: 0.12rem;
	font-size: 0.62rem;
}
.secbox{
	width: 100%;
	padding-bottom: 1.04rem;
	box-sizing: border-box;
}
.secbox>div{
	width: 100%;
}
</style>
