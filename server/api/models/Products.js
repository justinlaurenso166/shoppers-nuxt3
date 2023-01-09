import mongoose from "mongoose"
const ProductsSchema = new mongoose.Schema({
    name: String,
    short_desc: String,
    long_desc: String,
    image: String,
    size: Array,
    category: String,
    price: Number,
})

export default mongoose.model('products', ProductsSchema)