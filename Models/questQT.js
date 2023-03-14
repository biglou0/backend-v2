const mongoose  =require('mongoose')
const Schema  =mongoose.Schema

const questQTSchema = new Schema({
  


            NUM_QT:{
                type : String
            },

            
    NUM_CHAP_QT : {
        type :String

    },
    NUM_SSCHAP_QT : {
        type :String

    },
    
    
    NUM_QUESTION_QT : {
        type :String

    },
    
    LIB_QUESTION_QT : {
        type :String

    },
   
PON_QUESTION_QT: {
    type :String

}

} , {timestamps: true})
questQTSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
    }
});

const questQT = mongoose.model('questQT',questQTSchema)
module.exports =questQT