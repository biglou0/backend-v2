const mongoose  =require('mongoose')
const Schema  =mongoose.Schema

const ContartSchema = new Schema({
  
             
    NUM_CLIENT:{type : String},

       
    NUM_CONTRAT : {type :String},
    
    NUM_QP:{type: String},

    COD_TYP_CONTRAT : {type : String},

    DATE_CONTRAT: {type : Date},

    ROMAIN_CERTIFICAT : {type :String},

    COMMENTAIRE : {type :String},

    STATRAT: {type :String},
  
 
   
} , {timestamps: true})
ContartSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
        
    }
});

const CONTRAT = mongoose.model('CONTRAT',ContartSchema)
module.exports =CONTRAT