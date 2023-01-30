export const useCartsStore = defineStore('saveCarts', () => {
    //...
    const name = ref('')
    const carts = ref([])
    const cartLength = ref(0);

    function addItem() {
        carts.value.push(item)
    }
    async function countAllCart() {
        carts.value = await fetch("/api/cart").then((response) => response.json())
        cartLength.value = carts.value.data.length
    }

    return {
        name,
        carts,
        cartLength,
        addItem,
        countAllCart
    }
});

export default useCartsStore