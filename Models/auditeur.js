const mongoose  =require('mongoose')
const Schema  =mongoose.Schema

const AuditeurSchema = new Schema({
  

    COD_AUDITEUR :{ type : String,unique: true},
 
    TITRE_AUDITEUR:{ type : String},
   
    NOM_AUDITEUR:{ type : String},
   
    PRENOM_AUDITEUR:{ type : String},
   
    TEL_AUDITEUR:{ type : String},
    
    DATENAISSANCE:{ type : Date},

    LIEUNAISSANCE:{ type : String},


    NATIONALITE:{ type : String},

    COMMENTAIRE1:{ type : String},
   
    COMMENTAIRE2:{ type : String},
    
    COMMENTAIRE3:{ type : String},

    COMMENTAIRE4:{ type : String},

    COMMENTAIRE5:{ type : String},

    COMMENTAIRE6:{ type : String},

    COMMENTAIRE7:{ type : String},
    
   
    AUDITEUR:{ type : String},
    
    RA:{ type : String},
    
    DATERA:{ type : Date},
   
    CONCEPTION:{ type : String},
    
    F_Auditeur:{ type : String},
    
    F_Personnel:{ type : String},
    
    F_MembreCC:{ type : String},
    
    E_mail:{ type :String,unique: true},
    
    password:{ type :String},

 
   
} , {timestamps: true})
AuditeurSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
        
    }
});

const Auditeur = mongoose.model('Auditeur',AuditeurSchema)
module.exports =Auditeur