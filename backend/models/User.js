// Schema defines the structure of particualr document inside our db what a model does is apply that schema to a particular model and we use that model to interact with a colleciton of that name

import mongoose from "mongoose"
import bcrypt from 'bcrypt'
import validator from "validator"

const userSchema = mongoose.Schema({
    email: {
        type : String,
        required: true,
        unique:true,
    },
    password :{
        type: String,
        required:true,
    },
    subscription :{
        type: Boolean,
        required:true,
        default:0
    }
})

//creating static method on our user method called signup

// cant use arrow function as we are using this keyword inside it
userSchema.statics.signup = async function(email,password) {
    
    //validation

    if(!email || !password)
        {
            throw Error("All fields must be filled")
        }

    if(!validator.isEmail(email))
        {
            throw Error('Email not valids')
        }  
        
    if(!validator.isStrongPassword(password))
        {
            throw Error('Password not strong enough')
        }    
    
    const exists = await this.findOne({email})
    if(exists)
        {
            throw Error('Email already in use')
        }

     // salt adds random string before hashing

     const salt = await bcrypt.genSalt(10)

     const hash = await bcrypt.hash(password,salt)

     const user = await this.create({email,password:hash})

     return user
         
}


//static login method

userSchema.statics.login = async function(email,password)
{
    if(!email || !password)
        {
            throw Error("All fields must be filled")
        }


        const user = await this.findOne({email})
        if(!user)
            {
                throw Error('Incorrect Email')
            }
       

        const match = await bcrypt.compare(password,user.password)

        if(!match)
            {
                throw Error('Incorrct Password')
            }

         return user   

}


export default mongoose.model('User',userSchema)
