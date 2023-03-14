const REPONSE = require('../Models/reponse');
const AFFECTATION   = require('../Models/affectation');



const ajoutereponse= async (req, res) => {
    console.log(
        req.body.NUM_CLIENT
)

    console.log(
        req.body.NUM_QT
)


console.log(
    req.body.NUM_CHAP_QT
)
console.log(
    req.body.NUM_SSCHAP_QT
)
console.log(
    req.body.NUM_QUESTION_QT
)
console.log(
    req.body.ReponseQuestion
)



    const {NUM_CLIENT, NUM_QT,NUM_CHAP_QT,NUM_SSCHAP_QT,NUM_QUESTION_QT,ReponseQuestion} = req.body;
    
    const affectation = await AFFECTATION.findOne({ NUM_CLIENT: NUM_CLIENT });
    const affectationId = affectation._id;

    let nouvellenews = new REPONSE ({});

    nouvellenews.NUM_CLIENT = NUM_CLIENT;
    nouvellenews.NUM_QT = NUM_QT;
    nouvellenews.NUM_CHAP_QT = NUM_CHAP_QT;
    nouvellenews.NUM_SSCHAP_QT = NUM_SSCHAP_QT;
    nouvellenews.NUM_QUESTION_QT = NUM_QUESTION_QT;
    nouvellenews.ReponseQuestion = ReponseQuestion;
    nouvellenews.affectid = affectationId;
  
  
    
    nouvellenews.save();

    res.status(201).send({ message: "success"});
}

module.exports = {
    ajoutereponse
}
