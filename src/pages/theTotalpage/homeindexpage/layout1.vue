<template>
  <div class="layout1">
   1111
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
.layout1{
	width: 100%;
	height: 100%;
	background: red;
}
</style>
