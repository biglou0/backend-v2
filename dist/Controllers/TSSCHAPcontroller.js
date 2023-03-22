const TSSCHAP = require('../Models/TSSCHAP_QT')



const ajouteTCHAP= async (req, res) => {
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
    req.body.LIB_SSCHAP_QT
)


    const { NUM_QT,NUM_CHAP_QT,NUM_SSCHAP_QT,LIB_SSCHAP_QT} = req.body;
  

    let nouvellenews = new TSSCHAP({});

    nouvellenews.NUM_QT = NUM_QT;
    nouvellenews.NUM_CHAP_QT = NUM_CHAP_QT;
    nouvellenews.NUM_SSCHAP_QT = NUM_SSCHAP_QT;
    nouvellenews.LIB_SSCHAP_QT = LIB_SSCHAP_QT;
  
  
    
    nouvellenews.save();

    res.status(201).send({ message: "success"});
}


const recupererTSSCHAP = async(req,res) =>{
    let data = await TSSCHAP.find(
     {
         
             NUM_QT:req.params.key,
             NUM_CHAP_QT: req.params.chap
        
     }
    ).select('NUM_SSCHAP_QT LIB_SSCHAP_QT')
    res.send(data);
    
   }






module.exports ={
   ajouteTCHAP,recupererTSSCHAP
 }