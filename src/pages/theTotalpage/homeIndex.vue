<template>
	<div class="homeIndex">
		<div class="homediv1">
			<div>
				<span class="iconfont">&#xe625;</span>
				致我们暖暖的小时光
			</div>
			<span class="iconfont">&#xe675;</span>
			<span class="iconfont">&#xe6c7;</span>
			<span class="iconfont">&#xe656;</span>
		</div>
		<div class="classbox">
			<div class="ulbox">
				<van-tabs 
					title-active-color="orangered" 
					v-model="active" 
					@click="onClick" 
					swipeable
				>
					<van-tab 
						v-for="(teamp, index) in ulliarr" 
						:title="teamp.title"
						v-if="teamp.layout==1"
					>
						<layout1 :list="lister"></layout1>
					</van-tab>
					<van-tab 
						v-for="(teamp, index) in ulliarr" 
						:title="teamp.title"
						v-if="teamp.layout==2"
					>
						<layout2 :list="lister"></layout2>
					</van-tab>
					<van-tab 
						v-for="(teamp, index) in ulliarr" 
						:title="teamp.title"
						v-if="teamp.layout==3"
					>
						<layout3 :list="lister"></layout3>
					</van-tab>
					<van-tab 
						v-for="(teamp, index) in ulliarr" 
						:title="teamp.title"
						v-if="teamp.layout==4"
					>
						<layout4 :list="lister"></layout4>
					</van-tab>
				</van-tabs>
			</div>
			<div class="xiabox"><span class="iconfont">&#xe6aa;</span></div>
		</div>
	</div>
</template>

<script>
import layout1 from '@/pages/theTotalpage/homeindexpage/layout1';
import layout2 from '@/pages/theTotalpage/homeindexpage/layout2';
import layout3 from '@/pages/theTotalpage/homeindexpage/layout3';
import layout4 from '@/pages/theTotalpage/homeindexpage/layout4';
export default {
	data() {
		return {
			ulliarr: [],
			active: 0,
			lister:[]
		};
	},
	created() {
		var url = '../../../static/pagesjson/theTotalJson/ulli.json';
		this.axios.get(url).then(response => {
			this.ulliarr = response.data.data;
		});
	},
	components:{
		layout1,
		layout2,
		layout3,
		layout4
	},	
	methods: {
		onClick(index, title) {
			this.$toast(title);
			switch(this.active){
				case 0:
					this.lister = [1,2,3,4,5,6]
				break;
				case 1:
					this.lister = [1,1,1,1]
				break;
				case 2:
					this.lister = [2,2,2,2,2]
				break;
				case 3:
					this.lister = [3,3,3]
				break;
				case 4:
					this.lister = [4,4,4]
				break;
				case 5:
					this.lister = [5,5]
				break;
				case 6:
					this.lister = [6,6]
				break;
				case 7:
					this.lister = [7,7]
				break;
				case 8:
					this.lister = [8,8]
				break;
				case 9:
					this.lister = [9,9]
				break;
				case 10:
					this.lister = [10,10]
				break;
				case 11:
					this.lister = [11,11]
				break;
				case 12:
					this.lister = [12,12]
				break;
				case 13:
					this.lister = [13,13]
				break;
				case 14:
					this.lister = [14,14]
				break;
				case 15:
					this.lister = [15,15]
				break;
				case 16:
					this.lister = [16,16]
				break;
				case 17:
					this.lister = [17,17]
				break;
				case 18:
					this.lister = [18,18]
				break;
				case 19:
					this.lister = [19,19]
				break;
				case 20:
					this.lister = [20,20]
				break;
			}
		}
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.homeIndex{
	height: 100%;
	display: flex;
	flex-direction: column;
}
.homediv1 {
	height: 1.04rem;
	width: 100%;
	display: flex;
	align-items: center;
	padding: 0 0.41rem;
	box-sizing: border-box;
}
.homediv1 > div {
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
.homediv1 > div > span {
	font-size: 0.37rem;
	margin-right: 0.2rem;
}
.homediv1 > span {
	flex: 1;
	text-align: center;
	font-size: 0.58rem;
}
.classbox {
	flex: 1;
	position: relative;
}
.ulbox {
	width: 100%;
	height: 1.04rem;
	border-bottom: 0.02rem solid #999999;
}
.layout1{
	height: 100%;
}
.xiabox {
	width: 10%;
	height: 1.04rem;
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	right: 0.2rem;
	top: 0rem;
	z-index: 99;
}
</style>
