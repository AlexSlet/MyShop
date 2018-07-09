<template>
	<div class="row">
		<div class="product col-md-12">
			<img src="../assets/Model-3.jpg" alt="Tesla">
			<h3>{{getModel3.name}}</h3>
			<span class="price">{{getModel3.price}}</span>
			<p class="descript">{{getModel3.descript}}</p>
			<button class="btn btn-primary" @click="addToCart(getModel3)">В Корзину</button>
		</div>
	</div>

</template>

<script>
	import {mapGetters} from 'vuex';
	import {mapActions} from 'vuex';
	export default {
		computed: {
			...mapGetters([
					'getModel3'
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
<style>
	.product img{
		width: 100%;
		height: ;
	}
</style>