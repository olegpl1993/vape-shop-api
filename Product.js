import mongoose from "mongoose";

const Product = new mongoose.Schema({
    category: {type: String, required: true},
    title: {type: String, required: true},
    brand: {type: String, required: true},
    flavor: {type: String, required: true},
    price: {type: Number, required: true},
    stock: {type: Number, required: true},
    description: {type: String, required: true},
    images: {type: String, required: true},
});

export default mongoose.model('Product', Product);