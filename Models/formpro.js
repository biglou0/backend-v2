const mongoose  =require('mongoose')
const Schema  =mongoose.Schema

const formSchema = new Schema({
 

 
    COD_AUDITEUR :{ type : String},
    DATEFORMP :{ type : Date},
    DATE2FORMP:{ type : Date},
    ECOLE:{ type : String},
    DIPLOMES:{ type : String},
    
 
   

} , {timestamps: true})
formSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
    }
});

const FORMPRO = mongoose.model('formpro',formSchema)
module.exports =FORMPRO