const mongoose  =require('mongoose')
const Schema  =mongoose.Schema

const TTYPPHASESchema = new Schema({
  


    COD_TYP_PHASE:{
                type : String
            },

            
            LIB_TYP_PHASE : {
        type :String

    },
   

} , {timestamps: true})
TTYPPHASESchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
    }
});

const TTYPPHA = mongoose.model('TTYPPHA',TTYPPHASESchema)
module.exports =TTYPPHA