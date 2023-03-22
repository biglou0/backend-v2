const mongoose  =require('mongoose')
const Schema  =mongoose.Schema

const ADRSchema = new Schema({
 

 
    COD_AUDITEUR :{ type : String},
    
    COD_TYP_ADRESSE :{ type : String},
    RS_ADRESSE:{ type : String},
    
LIGNE1_ADRESSE:{ type : String},
LIGNE2_ADRESSE:{ type : String},

CP_ADRESSE:{ type : String},
VILLE_ADRESSE:{ type : String},
PAYS_ADRESSE:{ type : String},
TELEPHONE_AUDI:{ type : String},
FAX_AUDI:{ type : String},
EMAIL:{ type : String},
COD_TYP_REGION:{ type : String},

    
 
   

} , {timestamps: true})
ADRSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
    }
});

const ADR = mongoose.model('ADR',ADRSchema)
module.exports =ADR