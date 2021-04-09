<template>
    <header >
        <h1 >
            <router-link to="/">VueShop</router-link>
        </h1>  
        <nav>
            <ul>
                <li>
                    <router-link to="/products">Products</router-link>
                </li>
                <li>
                    <router-link to="cart">Cart</router-link>
                </li>
                <li>
                    <base-badge id="bb" >{{ qtyItems }}</base-badge>
                </li>
            </ul>  
        </nav>
        <div>
            <button >Login</button>
        </div>
        
    </header>
</template>

<script>
export default {
    computed: {
        qtyItems() {
            return this.$store.getters['quantity']
        }
    },
    watch: {
        qtyItems() {
           const base_cont = document.getElementById('bb')
           base_cont.classList.add('badge-anim')
           setTimeout(function() {
               base_cont.classList.remove('badge-anim')
           }, 2000)
        }
    },
    
}
</script>

<style scoped>

.badge-anim {
    animation: base-anima 2s ease;
}

header {
    width: auto;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
}

ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-self: center;
    align-items: center;
}

li {
    margin: 10px;
}

a {
  text-decoration: none;
  color: #333;
  font-weight: bold;
  border-bottom: 2px solid transparent;
  padding-bottom: 0.25rem;
}

a:hover,
a:active,
a.router-link-active {
  color: #45006d;
  border-color: #45006d;
}


button {
    cursor: pointer;
    width: 80px;
    height: 40px;
    border: 1px solid darkslateblue;
    border-radius: 20px;
    background: none;
}

/* button:hover,
button:active {
  background-color: #f0d5ff;
} */


@keyframes base-anima {
    0% {
        transform: rotateX(130deg);
    }
    25% {
        transform: rotateX(-130deg);
    }
    50% {
        transform: rotateX(30deg);
    }
    75% {
        transform: rotateX(-30deg);
    }
    100% {
        transform: rotateX(30deg);
    }
}


</style>