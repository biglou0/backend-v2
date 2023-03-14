const mongoose  =require('mongoose')
const Schema  =mongoose.Schema

const TTYPTNAFSchema = new Schema({
  


    COD_NAF:{
                type : String
            },

            
            LIB_NAF : {
        type :String

    },
   

} , {timestamps: true})
TTYPTNAFSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
    }
});

const TNAF = mongoose.model('TNAF',TTYPTNAFSchema)
module.exports =TNAF