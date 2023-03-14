const mongoose  =require('mongoose')
const Schema  =mongoose.Schema

const TQTSchema = new Schema({
    NUM_QT:{
        type : String
    },

   
    DATE_QT : {
        type :Date

    },
    
    INTITULE_QT : {
        type :String

    },
   

} , {timestamps: true})
TQTSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
    }
});

const TQT = mongoose.model('TQT',TQTSchema)
module.exports =TQT