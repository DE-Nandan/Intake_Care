import mongoose from "mongoose"


const itemSchema = mongoose.Schema({
    name : String,
    calorie : String,
    user_id : {
       type : String,
        required :true
    }
})




export default mongoose.model('Item',itemSchema)
