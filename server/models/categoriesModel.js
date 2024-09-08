const mongoose = require('mongoose');
const categoriesModel = new mongoose.Schema({
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
const Category = mongoose.model('Category', categoriesModel)
module.exports = Category
