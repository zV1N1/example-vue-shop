import { createStore} from 'vuex'

const store = createStore({
    state() {
        return {
            userCart: [],
            items: [],
            qty: 0,
            total: 0,
            products: [
                {
                    id: '1',
                    name: 'Book Collection',
                    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Books_HD_%288314929977%29.jpg/640px-Books_HD_%288314929977%29.jpg',
                    price: 59.99,
                    description: 'A collection od must-read books.'
                },
                {
                    id: '2',
                    name: 'Flashlight',
                    image: 'https://upload.wikimedia.org/wikipedia/commons/e/e4/LED_Flashlights.jpg',
                    price: 19.90,
                    description: ' A flashlight is a portable hand-held electric light.  the light source typically was a miniature incandescent light bulb.'
                },
                {
                    id: '3',
                    name: 'Mountain Tent',
                    image: 'https://upload.wikimedia.org/wikipedia/en/c/c9/Tent_at_High_Shelf_Camp_cropped.jpg',
                    price: 150.00,
                    description: 'A tent is a shelter consisting of sheets of fabric or other draped material.'
                }
            ]
        }
    },
    mutations: {
        addUserCart(state, payload){
            const productData = payload
            const indexProduct = state.items.findIndex(
                (pd) => pd.id ===  productData.id
            )
            if (indexProduct >= 0) {
                state.items[indexProduct].qty++
            } else {
                const newItem = {
                    id: productData.id,
                    title: productData.name,
                    image: productData.image,
                    price: productData.price,
                    qty: 1,
                }
                state.items.push(newItem)
            }
            state.total += productData.price
            state.qty++
        },
        removeProductFromCart(state, payload) {
            const productId = payload.id
            const productIndex = state.items.findIndex(
                (pd) => pd.id === productId
            )
            const productData = state.items[productIndex]
            if (productData.qty > 1) {
                productData.qty--
                state.total -= productData.price
                state.qty--
                return
            } else {
                state.items.splice(productIndex, 1);
                state.qty -= productData.qty
                state.total -= productData.price * productData.qty
            }
        }
    },
    actions: {
        addToCart(context, payload) {
            const prodId = payload.id
            const products = context.rootGetters['getProducts']
            const product = products.find(prod => prod.id === prodId)
            context.commit('addUserCart', product)
        },
        removeFromCart(context, payload) {
            context.commit('removeProductFromCart', payload)
        }
    },
    getters: {
        getProducts(state) {
            return state.products
        },
        quantity(state) {
            return state.qty
        },
        getItemCart(state) {
            return state.items
        },
        getTotalItems(state) {
            return state.total.toFixed(2)
        }
    }

})


export default store;