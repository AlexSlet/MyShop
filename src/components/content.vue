<template>
	<div class="content-wrap">
		<transition name="slide" mode="out-in"
								enter-active-class="animated fadeIn">
			<router-view></router-view>
		</transition>
	</div>
</template>

<script>
	import Cart from './cart.vue'
	import modelX from './Model-X.vue'
	import modelS from './Model-S.vue'
	import model3 from './Model-3.vue'
	export default {
		components: {
			modelX,
			modelS,
			model3,
			Cart
		}
	}
</script>
<style>

</style>