<template>
  <section>
        <ul>
            <product-item v-for="product in products" 
            :key="product.id"
            :id="product.id"
            :image="product.image"
            :title="product.name"
            :price="product.price"
            :description="product.description"
            >
            </product-item>
        </ul>
  </section>
</template>

<script>
import ProductItem from '../components/product/ProductItem'

export default {
    components: {
        ProductItem
    },
    computed: {
        products(){
            return this.$store.getters['getProducts']
        }
    }
}
</script>

<style scoped>

ul {
    display: flex;
    align-items: center;
    flex-direction: column;
    list-style: none;
}
</style>