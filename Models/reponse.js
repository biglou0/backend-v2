const mongoose  =require('mongoose')
const Schema  =mongoose.Schema

const RepSchema = new Schema({
   
    NUM_CLIENT:{ type :String},
    
    NUM_QT:{ type :String},
    
NUM_CHAP_QT : {type :String},

NUM_SSCHAP_QT : {type :String},


NUM_QUESTION_QT : {type :String},

 
    ReponseQuestion : {type :String},


} , {timestamps: true})
RepSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
    }
});

const REPONSE = mongoose.model('ReponseQuestion',RepSchema)
module.exports =REPONSE