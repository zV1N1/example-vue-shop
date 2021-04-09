<template>
  <li>
    <div class="product_container">
        <div class="product_info">
            <div class="product_img">
                <img :src="image" :alt="title">
            </div>
            <div class="product__text">
                <h3>{{ title }}</h3>
                <h4><base-badge>${{ price.toFixed(2) }}</base-badge></h4>
                <p>{{ description }}</p>
            </div>
        </div>
        <button @click="addItemCart">Add to cart</button>
    </div>
  </li>
</template>

<script>
export default {
    props: ['id', 'image', 'title', 'price', 'description'],
    methods: {
        addItemCart() {
            this.$store.dispatch('addToCart', {id: this.id})
        },
    }
}
</script>

<style scoped>

.product_container {
    width: 600px;
    height: auto;
    display: flex;
    flex-direction: column;
    background-color: whitesmoke;
    margin: 10px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    padding: 20px;
}

.product_info {
    display: flex;
    margin-bottom: 10px;
}

.product_img img {
   height: 10rem;
   width: 10rem;
   object-fit: cover;
}

.product__text {
    margin-left: 20px;
}

.product__text h4 {
    margin: 10px 0px 10px 0px;
}

button {
    align-self: center;
    text-align: center;
    cursor: pointer;
    width: 150px;
    height: 40px;
    font-size: 15px;
    background-color: rgb(95, 3, 95);
    border: none;
    border-radius: 20px;
    color: white;
}

button:hover {
    background-color: rgb(119, 2, 119);
    transform: scale(1.1);
    transition: all 0.2s ease;
}
button:active {
    transform: scale(0.9);
}

</style>