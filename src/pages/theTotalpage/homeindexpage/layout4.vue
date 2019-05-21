<template>
  <div class="layout4">
   44444444
	 <ul>
	 	<li v-for="tamp in list">{{tamp}}</li>
	 </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
			
    }
  },
	props:{
		list:{
			type: Array,
			default:[]
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.layout4{
	width: 100%;
	background: pink;
}
</style>
