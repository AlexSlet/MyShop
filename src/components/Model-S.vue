<template>
	<div class="row">
		<div class="product col-md-12">
			<img src="../assets/Model-S.jpg" alt="Tesla">
			<h3>{{getModelS.name}}</h3>
			<span class="price">{{getModelS.price}}</span>
			<p class="descript">{{getModelS.descript}}</p>
			<button class="btn btn-primary" @click="addToCart(getModelS)">В Корзину</button>
		</div>
	</div>

</template>

<script>
	import {mapGetters} from 'vuex';
	import {mapActions} from 'vuex';
	export default {
		computed: {
			...mapGetters([
					'getModelS'
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