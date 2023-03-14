const mongoose  =require('mongoose')
const Schema  =mongoose.Schema

const AFFSchema = new Schema({
    NUM_QT:{
        type : String
    },

   
    DATE_AFF : {
        type :Date},

    NUM_CLIENT:{ type :String},
    COD_AUDITEUR :{ type : String},
    INTITULE_QT :{ type : String},
    NOM_AUDITEUR:{ type : String},
    RS_CLIENT:{ type : String},
    
 
   

} , {timestamps: true})
AFFSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
    }
});

const AFFECTATION = mongoose.model('affectation',AFFSchema)
module.exports =AFFECTATION