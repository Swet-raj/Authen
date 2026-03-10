import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    name: {type: String,required: true},
    email: {type: String,required: true,unique: true},
    password:{ type:String, required:true},
    verifyotp:{type:String,default:''},
    verifyotpexpiresat:{type:Number,default:0},
    isaccountverified:{type:Boolean,default:false},
    resetotp:{ type:String,default:''},
    resetotpexpiresat:{type:Number,default:0},
})
const userModel=mongoose.models.user || mongoose.model('user',userSchema);

export default userModel;