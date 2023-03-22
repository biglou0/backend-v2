const mongoose  =require('mongoose')
const Schema  =mongoose.Schema

const EXPSchema = new Schema({
 

 
    COD_AUDITEUR :{ type : String},
    
    DATEEP :{ type : Date},
    DATEFIN:{ type : Date},
    
    EMPLOYEUR:{ type : String},
    FONCTIONS:{ type : String},



    
 
   

} , {timestamps: true})
EXPSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
    }
});

const EXPAUD = mongoose.model('EXPAUD',EXPSchema)
module.exports =EXPAUD