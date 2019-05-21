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
					@change="handleChange"
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
			<div class="xiabox" @click="dingclick"><span class="iconfont" v-html="intou">{{intou}}</span></div>
			<div :class="{dingweibox:dingbolean==false,dingweibox1:dingbolean==true}">
				<div class="spanbox">全部频道</div>
				<div class="spanbox">可长按拖拽排序</div>
				<div class="spanclass">
					<div v-for="(iteam,index) in ulliarr" :class="{onli:index==active}" @click="dianjili(index)">
						{{iteam.title}}
					</div>
				</div>
			</div>
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
			lister:[],
			dingbolean:false,
			intou:"&#xe6aa;"
		};
	},
	created() {
		var url = '../../../static/pagesjson/theTotalJson/ulli.json';
		this.axios.get(url).then(response => {
			this.ulliarr = response.data.data;
		});
		this.handleChange()
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
		},
		dingclick(){
			if(this.dingbolean==false){
				this.dingbolean = true
				this.intou="&#xe65e;"
			}else if(this.dingbolean==true){
				this.dingbolean = false
				this.intou="&#xe6aa;"
			}
		},
		dianjili(index){
			this.dingbolean = false
			this.active=index
			this.intou="&#xe6aa;"
		},
		handleChange(){
			switch(this.active){
				case 0:
					this.lister = []
				break;
				case 1:
					this.lister = []
				break;
				case 2:
					this.lister = []
				break;
				case 3:
					this.lister = []
				break;
				case 4:
					this.lister = []
				break;
				case 5:
					this.lister = []
				break;
				case 6:
					this.lister = []
				break;
				case 7:
					this.lister = []
				break;
				case 8:
					this.lister = []
				break;
				case 9:
					this.lister = []
				break;
				case 10:
					this.lister = []
				break;
				case 11:
					this.lister = []
				break;
				case 12:
					this.lister = []
				break;
				case 13:
					this.lister = []
				break;
				case 14:
					this.lister = []
				break;
				case 15:
					this.lister = []
				break;
				case 16:
					this.lister = []
				break;
				case 17:
					this.lister = []
				break;
				case 18:
					this.lister = []
				break;
				case 19:
					this.lister = []
				break;
				case 20:
					this.lister = []
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
	position: fixed;
	top: 0rem;
	left: 0rem;
	background: white;
	z-index: 80;
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
}
.ulbox {
	width: 100%;
	height: 100%;
	border-bottom: 0.02rem solid #999999;
}
.xiabox{
	width: 10%;
	height: 1.02rem;
	display: flex;
	justify-content: center;
	align-items: center;
	position: fixed;
	right: 0.2rem;
	top: 1.04rem;
	z-index: 90;
	background: white;
}
.dingweibox{
	display: none;
}
.dingweibox1{
	width: 100%;
	height: 87%;
	background: white;
	position: fixed;
	top: 1.04rem;
	left: 0rem;
	z-index: 86;
}
.dingweibox1>.spanbox{
	width: 100%;
	height: 0.62rem;
	padding: 0 0.41rem;
	box-sizing: border-box;
	display: flex;
	align-items: center;
	font-size: 0.33rem;
	color: #999999;
}
.spanclass{
	width: 100%;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	padding-left: 0.41rem;
	box-sizing: border-box;
}
.spanclass>div{
	width: 19%;
	height: 0.83rem;
	border: 0.04rem solid #EFEFEF;
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 0.2rem 0.41rem 0.2rem 0;
	font-size: 0.41rem;
	border-radius: 0.08rem;
}
.spanclass>.onli{
	background: orangered;
	color: white;
}
</style>
