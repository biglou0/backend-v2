const mongoose  =require('mongoose')
const Schema  =mongoose.Schema

const TTYPCOURSchema = new Schema({
  


    COD_TYP_ADRESSE:{
                type : String
            },

            
            LIB_TYP_ADRESSE : {
        type :String

    },
    TYP_AUDITEUR : {
        type :String

    },
    
    
    TYP_ENTREPRISE : {
        type :String

    },
   

} , {timestamps: true})
TTYPCOURSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
    }
});

const TTYPCOUR = mongoose.model('TTYPCOUR',TTYPCOURSchema)
module.exports =TTYPCOUR