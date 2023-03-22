const mongoose  =require('mongoose')
const Schema  =mongoose.Schema

const TTYPREGIONSchema = new Schema({
  


    COD_TYP_REGION:{
                type : String
            },

            
            LIB_TYP_REGION : {
        type :String

    },
   

} , {timestamps: true})
TTYPREGIONSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
    }
});

const TTYPREG = mongoose.model('TTYPREG',TTYPREGIONSchema)
module.exports =TTYPREG