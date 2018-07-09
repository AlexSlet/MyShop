<template>
	<div class="row">
		<div class="product col-md-12">
			<img src="../assets/Model-X.jpg" alt="Tesla">
			<h3>{{getModelX.name}}</h3>
			<span class="price">{{getModelX.price}}</span>
			<p class="descript">{{getModelX.descript}}</p>
			<button class="btn btn-primary" @click="addToCart(getModelX)">В Корзину</button>
		</div>
	</div>

</template>

<script>
	import {mapGetters} from 'vuex';
	import {mapActions} from 'vuex';
	export default {
		computed: {
			...mapGetters([
					'getModelX'
				])
		},
		methods: {
			...mapActions({
				addToCart: 'add'
				//removeFromCart: 'remove'
			})
		}
	}
</script>
<style scoped>
	.product img{
		width: 100%;
		height: ;
	}
</style>