<template>
  <li>
    <div id="item_container">
      <div class="cart_image">
          <img :src="image" :alt="title">
      </div>
      <h3 class="title">{{ title }}</h3>
      <div class="cart_desc">
        <p>Price per item: <strong>${{ price }}</strong></p>
        <p>Quantity: <strong>{{ qty }}</strong></p>
      </div>
      <div class="cart_total">
        <h3>Total: ${{ itemTotal }}</h3>
      </div>
      <button @click="removeFromCart" >Remove</button>  
    </div>
  </li>
</template>

<script>
export default {
  props: ['id', 'title', 'image', 'price', 'qty'],
  computed: {
    itemTotal() {
      return (this.qty * this.price).toFixed(2)
    }
  },
  methods: {
    removeFromCart() {
      this.$store.dispatch('removeFromCart', {id: this.id})
    }
  }

}
</script>

<style scoped>

#item_container {
  /* display: flex;
  flex-direction: column; */
  width: 500px;
  text-align: center;
  padding: 10px;
  background-color: whitesmoke;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 20px;
}

.cart_image img {
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  object-fit: cover;
}

.title {
  margin: 20px;
}

.cart_desc {
  display: flex;
  justify-content: space-between;
}

.cart_total {
  border-top: 1px solid gray;
  border-bottom: 2px solid black;
  padding: 0.25rem 0;
  width: auto;
  margin: 16px 0;
  padding: 10px;
}

button {
  font-weight: bold;
  border: 1px solid #8f0030;
  background-color: #8f0030;
  border-radius: 30px;
  cursor: pointer;
  color: white;
  padding: 10px 30px;
}

button:hover {
  background-color: #ad033c;
  transform: scale(1.1);
  transition: all 0.2s ease;
}

button:active {
    background-color: #58001e;
    transform: scale(0.9);
    transition: all 0.4s ease;
}

</style>