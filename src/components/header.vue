<template>
		<div class="header-wrap">
			<router-link :to="{name: 'main'}"><img class="logo" src="../assets/teslalogo.png" alt="tesla-logo"></router-link>
			<nav>
				<ul>
					<router-link v-for="(item, index) in getLinks"
										 :key="index"
										 :to="item.url"
										 tag="li"
										 active-class="active"
							>
							<a>{{ item.text }}</a>
					</router-link>
				</ul>
			</nav>
			<div class="cart-wrap">
				<p>В Корзине: {{getCart.length}}</p>
			</div>
		</div>
</template>

<script>
	import {mapGetters} from 'vuex';

	import Cart from './cart.vue'
	export default {
		components: {
			Cart
		},
		computed: {
			...mapGetters([
				'getLinks',
				'getCart'
			])
		}
	}
</script>
<style>
	.logo{
		width: 100px;
	}
	.header-wrap{
		display: flex;
		justify-content: space-around;
		-ms-align-items: center;
		align-items: center;
		border-bottom: 1px solid #fff;
		padding: 20px 0;
	}
	.header-wrap nav ul{
		list-style-type: none;
		display: flex;
		justify-content: space-around;
		-ms-align-items: center;
		align-items: center;
		padding: 0;
	}
	.header-wrap nav ul li{
		padding: 5px 10px;
	}
	a{
		color: #fff;
		text-decoration: none;
		transition: all 0.3s;
		padding: 5px;
	}
	ul li{
		transition: all 0.5s;
	}
	ul li:hover{
		transform: translateY(-5px);
	}
	a:hover{
		color: #fff;
		text-decoration: none;
	}
</style>