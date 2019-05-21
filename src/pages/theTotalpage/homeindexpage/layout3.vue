<template>
  <div class="layout3">
   3333
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
.layout3{
	width: 100%;
	background: yellow;
}
</style>
