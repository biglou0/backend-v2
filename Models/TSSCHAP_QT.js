const mongoose  =require('mongoose')
const Schema  =mongoose.Schema

const TSSCHAPSchema = new Schema({
  


            NUM_QT:{
                type : String
            },

            
    NUM_CHAP_QT : {
        type :String

    },
    NUM_SSCHAP_QT : {
        type :String

    },
    
    
    LIB_SSCHAP_QT : {
        type :String

    },
   

} , {timestamps: true})
TSSCHAPSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
    }
});

const TSSCHAP = mongoose.model('TSSCHAP',TSSCHAPSchema)
module.exports =TSSCHAP