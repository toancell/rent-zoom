const RoomModel = require('../models/roomModel');
const createRoom = async (req, res) => {
  try {
    const {
      title,
      province,
      district,
      ward,
      street,
      acreage,
      description,
      monney,
      category,
      phone,
      userCreated,
      imgList,
    } = req.body;
    const roomData = await RoomModel.create({
      title,
      province,
      district,
      ward,
      street,
      acreage,
      description,
      monney,
      category,
      userCreated,
      phone,
      imgList
    });
    if(!roomData){
      return res.status(404).json({
        message: "Can't create",
        
      })
    }
    return res.status(200).json({
      message: "Room created successfully",
      success: true,
      roomData
    });
  } catch (err) {
    return res.status(400).json({
      message: "Some thing wrong",
      err,
    });
  }
};

const getAllRoom = async (req, res) => {
  try {
    const { category, province, monney, acreage } = req.body;
    console.log({ category, province, monney, acreage });

    const filter = {};

    if(category) filter.category= category;
    if (province) filter.province = province;
    
    
    if (monney?.a) {
      if(monney.b === null){
        monney.b =10000000000000000
      }
      filter.monney = { $gte: monney.a, $lte: monney.b };
      
    }
    
    if (acreage?.min) {
      if(acreage.b==null){
        acreage.b=10000000000000000
      }
      filter.acreage = { $gte: acreage.min, $lte: acreage.max};
    }
    console.log("filter",filter)
    const allRoom = await RoomModel.find(filter);
    
    return res.status(200).json({
      message: "Get all rooms successfully",
      allRoom,
    });
  } catch (err) {
    return res.status(400).json({
      message: "Something went wrong",
      err,
    });
  }
};




const getRoomPostByUser = async(req, res) => {
  try{
    const {userCreated} = req.body
    const RoomPostByUser = await RoomModel.find({userCreated})
    return res.status(200).json({
      message: "Get room successfully",
      allRoom: RoomPostByUser
    })
  }catch(err){
    return res.status(400).json({
      message:"Something went wrong",
      err
    })
  }
}

const getNewPost = async(req, res) => {
  try{
        const newPost= await RoomModel.find().sort({createdAt: -1}).limit(10)
        return res.status(200).json({
          message: "Success",
          success: true,
          newPost
        })
  }catch(err){
    return res.status(400).json({
      err
    })
  }
}


const deleteRoom = async (req, res) => {
  try{
    const {postId} = req.params
    
    const deletedRoom = await RoomModel.findByIdAndDelete(postId)
    if(!deletedRoom){
      return res.status(404).json({
        message: "Room not found",
        
      })
    }
    const newAllRoom = await RoomModel.find()
    return res.status(200).json({
      newAllRoom: newAllRoom
    })
  }catch(err){
    return res.status(400).json({
      message: " Can't delete room",
      err
    })
  }

}
const updateRoom= async (req, res) => {
  try{
    const {postId} = req.params
    
    const updateRoom= req.body
    const roomData = await RoomModel.findByIdAndUpdate(postId, updateRoom ,{new: true})
    return res.status(200).json({
      message: "Room has been updated",
      success: true,
      roomData
    })
  }catch(err){
    return res.status(400).json({
      message: " Can't update room",
      err
    })
  }
}

// const getDetailRoom = async (req, res) => {
//   try{
//     const {postId,get}
//   }catch(err){
//     return res.status(400).json({
//       message: "Room not found",
//       err
//     })
//   }
// }



module.exports = { createRoom,getAllRoom,deleteRoom,updateRoom,getRoomPostByUser,getNewPost };

