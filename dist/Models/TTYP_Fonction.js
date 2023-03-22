const mongoose  =require('mongoose')
const Schema  =mongoose.Schema

const TTYPFONCTSchema = new Schema({
  


    COD_TYP_FONCTION:{
                type : String
            },

            
            LIB_TYP_FONCTION : {
        type :String

    },
   

} , {timestamps: true})
TTYPFONCTSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
    }
});

const TTYPFONC = mongoose.model('TTYPFONC',TTYPFONCTSchema)
module.exports =TTYPFONC