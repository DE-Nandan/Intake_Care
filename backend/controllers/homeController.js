import Item from '../models/Item.js'
import User from '../models/User.js'
import mongoose from 'mongoose'

// get all saved items
const getItems = async (req, res) => {
   const user_id = req.user._id
  
  const items = await Item.find({user_id}).sort({createdAt: -1})
    
    res.status(200).json(items)
  }

  const deleteItem = async (req, res) => {
    const { id } = req.params
  
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({error: 'No such item'})
    }
  
    const item = await Item.findOneAndDelete({_id: id})
  
    if (!item) {
      return res.status(400).json({error: 'No such workout'})
    }
  
    res.status(200).json(item)
  }

  
const createItem = async (req, res) => {
    const {name,calorie} = req.body
  
    // add saved item to db
    try {
      const user_id = req.user._id
      const item = await Item.create({name,calorie,user_id})
      res.status(200).json(item)
    } catch (error) {
      res.status(400).json({error: error.message})
    }
  }

  const chatSubscription = async (req,res) =>{
    const user_id = req.user._id
    const user = await User.findOne({_id:user_id})
    res.status(200).json({user})
  }
  

  export default {getItems,createItem,deleteItem,chatSubscription}