const mongoose  =require('mongoose')
const Schema  =mongoose.Schema

const CODEAPESchema = new Schema({
  


    COD_DIV_APE:{
                type : String
            },

            
            COD_CLAS_APE : {
        type :String

    },
    LIB_APE : {
        type :String

    },
   

} , {timestamps: true})
CODEAPESchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
    }
});

const CODEAPE = mongoose.model('CODAPE',CODEAPESchema)
module.exports =CODEAPE