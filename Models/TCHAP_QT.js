const mongoose  =require('mongoose')
const Schema  =mongoose.Schema

const TCHAPQTSchema = new Schema({
  


            NUM_QT:{
                type : String
            },

            
    NUM_CHAP_QT : {
        type :String

    },
    
    
    LIB_CHAP_QT : {
        type :String

    },
   

} , {timestamps: true})
TCHAPQTSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
    }
});

const TCHAPQT = mongoose.model('TCHAPQT',TCHAPQTSchema)
module.exports =TCHAPQT