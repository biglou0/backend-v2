const mongoose  =require('mongoose')
const Schema  =mongoose.Schema

const FROMCSchema = new Schema({
 

 
    COD_AUDITEUR :{ type : String},
    
    DATEFORMC :{ type : Date},
    DUREE:{ type : String},
    
    SUJET:{ type : String},
    ORGFORM:{ type : String},
    CPVILLE:{ type : String},


    
 
   

} , {timestamps: true})
FROMCSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
    }
});

const FORMC = mongoose.model('FORMC',FROMCSchema)
module.exports =FORMC