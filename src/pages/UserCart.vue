<template>
  <section>
      <div id="cart_list">
            <h2>Your Cart</h2>
            <h3>Total Amount: <base-badge>${{ totalItems }}</base-badge></h3>
      </div>   
      <transition-group tag="ul" name="item-list" v-if="!isEmpty">
          <cart-item v-for="item in cartItems" 
          :key="item.id"
          :id="item.id"
          :title="item.title"
          :image="item.image"
          :price="item.price"
          :qty="item.qty"
          ></cart-item>
      </transition-group>   
      <p v-else>Your shopping cart is empty! go to the products tab to insert something here.🙁</p>
  </section>
</template>

<script>
import CartItem from '../components/cart/CartItem'

export default {
    components: {
        CartItem
    },
    data() {
        return {
          isEmpty: true
        }
    },
    methods: {
      checkCart() {
          const qty = this.$store.getters['quantity']
          if (qty > 0) {
            this.isEmpty = false
          } else {
            this.isEmpty = true
          }
        }
    },
    computed: {
        cartItems() {
          return this.$store.getters['getItemCart']
        },
        totalItems() {
          this.checkCart()
          return this.$store.getters['getTotalItems']
        },
    }
}
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
}

h2 {
  color: #292929;
  text-align: center;
  border-bottom: 2px solid #ccc;
  padding-bottom: 1rem;
}

h3, p {
    margin: 20px;
    text-align: center;
}

ul {
  display: flex;
  align-items: center;
  flex-direction: column;
  list-style: none;
}

.item-list-leave-from {
    opacity: 1;
    transform: scale(1)
}

.item-list-leave-active {
    transition: all 0.2s ease-in;
    position: absolute;
}
.item-list-leave-to {
    opacity: 0;
    transform: scale(0.8)
}

.item-list-move {
  transition: transform 0.8s ease;
}

</style>