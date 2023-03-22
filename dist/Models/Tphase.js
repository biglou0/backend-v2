const mongoose  =require('mongoose')
const Schema  =mongoose.Schema

const TphaseSchema = new Schema({
  

    NUM_CLIENT:{ type : String},
   
    NUM_CONTRAT:{ type : String},
   
    NUM_PHASE:{ type : String},
    
    COD_TYP_PHASE:{ type : String},
   
    NUM_COMITE:{ type : String},
   
    COD_AUDITEUR:{ type : String},
   
    NBJ_RA:{ type : String},
   
    DATE_DEB_PHASE:{ type : Date},
   
    DATE_FIN_PHASE:{ type : Date},
   
    LIB_PHASE:{ type : String},
   
    DATE_DEB_MISSION:{ type : Date},
   
    DATE_FIN_MISSION:{ type : Date},
   
    TYP_COMITE:{ type : String},
   
    DECISION_CC:{ type : String},
   
    EDT_ENQUETE:{ type : String},
   
 
   
} , {timestamps: true})
TphaseSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
        
    }
});

const Tphase = mongoose.model('Tphase',TphaseSchema)
module.exports =Tphase