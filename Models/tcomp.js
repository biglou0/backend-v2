const mongoose  =require('mongoose')
const Schema  =mongoose.Schema

const TCOMSchema = new Schema({
 

 
    Cod_auditeur :{ type : String},
    
NUMERO :{ type : String},
TYPE:{ type : String},
    
LIBELLE:{ type : String},
DATEDEBUT:{ type : Date},

DATEVERIFICATION:{ type : Date},

    
 
   

} , {timestamps: true})
TCOMSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
    }
});

const TCOMP = mongoose.model('TCOMP',TCOMSchema)
module.exports =TCOMP