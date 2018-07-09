<template>
	<div>
   <div v-if="getCart.length !== 0">
     <table class="table table-bordered">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Товар</th>
          <th scope="col">Цена</th>
          <th scope="col">Убрать</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item,index) in getCart">
          <td>{{index + 1}}</td>
          <td>{{item.name}}</td>
          <td>{{item.price}}</td>
          <td><span class="remove" @click="removeFromCart(index)">X</span></td>
        </tr>
      </tbody>
    </table> 
    <transition name="slide" mode="out-in"
                enter-active-class="animated fadeIn">
      <button v-if="!order" class="btn btn-success" @click="order = true">Заказать</button>
      <div v-else class="alert alert-success" role="alert">
        Ваш заказ принят!
      </div>
    </transition>
   </div>
    <p v-else>Ваша корзина пуста</p>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex';
  import {mapActions} from 'vuex';

	export default {
    data(){
      return {
        order: false,
      }
    },
		computed: {
      ...mapGetters([
          'getCart'
        ])
    },
    methods: {
      ...mapActions({
        removeFromCart: 'remove'
      })
    }
	}
</script>

<style>
	.remove{
    color: red;
    padding: 5px 10px;
    cursor: pointer;
  }
</style>