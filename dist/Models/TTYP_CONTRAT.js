const mongoose  =require('mongoose')
const Schema  =mongoose.Schema

const TTYPContartSchema = new Schema({
  
             
    COD_TYP_CONTRAT:{type : String},

       
    LIB_TYP_CONTRAT : {type :String},

    RaComp: {type : String},

    Actif: {type : Date},

    CONCEPTION : {type :String},

 
  
 
   
} , {timestamps: true})
TTYPContartSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
        
    }
});

const TTYPCONTRAT = mongoose.model('TTYPCONTRAT',TTYPContartSchema)
module.exports =TTYPCONTRAT