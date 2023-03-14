const mongoose  =require('mongoose')
const Schema  =mongoose.Schema

const TQPPSchema = new Schema({
  
             
NUM_QP:{
    type : String
       },

       
       NUM_QT : {
   type :String

},
DATE_QP : {
   type :Date

},


INTITULE_QP : {
   type :String

},

ARCHIVAGE_QP : {
   type :String

},
  
 
   
} , {timestamps: true})
TQPPSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
        
    }
});

const TQP = mongoose.model('TQP',TQPPSchema)
module.exports =TQP