import mongoose from "mongoose"
const cartSchema = new mongoose.Schema({
    product_id: String,
    qty: Number,
    size: String,
    price: Number,
    total: Number,
})

export default mongoose.model('cart', cartSchema)