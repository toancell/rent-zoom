const mongoose = require('mongoose');
const imageSchema = new mongoose.Schema({
    url: {
        type: String,
        required: true
    },
    
});
const roomSchema= new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    province: {
        type: String,
        required: true
    },
    district:{
        type: String,
        required: true
    },
    ward:{
        type: String,
        required: true
    },
    street:{
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    acreage:{
        type: Number,
        required: true
    },
    monney:{
        type: Number,
        required: true
    },
    userCreated: {
        type: String,
        ref: "User",
        
    },
    phone: {
        required: true,
        type: Number,
        
    },
    category:{
        type: String,
        ref: "Category",
        required: true
        
    },
    imgList:[
       imageSchema
    ]
},{timestamps: true})
const RoomModel = mongoose.model('Room', roomSchema)
module.exports= RoomModel