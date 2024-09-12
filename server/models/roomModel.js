const mongoose = require('mongoose');
const roomSchema= new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    monney:{
        type: String,
        required: true
    },
    acreage:{
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    dateEnd: {
        type: String,
        required: true
    },
    userCreated: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    category:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: true
    },
    images:{
        type: [String],
        required: true
    }
},{timestamps: true})
const RoomModel = mongoose.model('Room', roomSchema)
module.exports= RoomModel