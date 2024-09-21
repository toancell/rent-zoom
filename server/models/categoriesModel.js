const mongoose = require('mongoose');
const categoriesSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    slug:{
        type: String,
        required: true
    },
    title:{
        type: String,
        required: true
    },
    subtitle:{
        type: String,
        required: true
    },
    keyword:{
        type: String,
        required: true
    }
    
})
const CategoryModel = mongoose.model('Category', categoriesSchema)
module.exports = CategoryModel

