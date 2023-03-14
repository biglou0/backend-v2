const mongoose  =require('mongoose')
const Schema  =mongoose.Schema

const useSchema = new Schema({
  
 Firstname:{
        type : String
    },
    Lastname:{
        type : String
    },

    email :{
        type : String,
   
    },
    phone : {
        type :String

    },
    password : {
        type :String

    },
    //isVerified: { type: Boolean },
 
   
} , {timestamps: true})
useSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
        
    }
});

const User = mongoose.model('ADMIN',useSchema)
module.exports =User