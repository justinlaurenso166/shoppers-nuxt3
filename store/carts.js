export const useCartsStore = defineStore('saveCarts', {
    //...
    state: () => {
        return {
            name: "",
            carts: [],
            cartLength: 0,
        }
    },
    actions: {
        addItem(item) {
            this.carts.push(item)
        },
        async countAllCart() {
            this.carts = await fetch("/api/cart").then((response) => response.json())
            this.cartLength = this.carts.data.length
        }
    },
    getters: {
        getName: state => state.name,
        getCarts: state => state.carts,
        getCartsLength: state => state.cartLength
    }
});