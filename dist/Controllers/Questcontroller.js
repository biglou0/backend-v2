const questQT = require('../Models/questQT')
const TSSCHAP = require('../Models/TSSCHAP_QT')
const TCHAP = require('../Models/TCHAP_QT')
const TQT = require('../Models/TQT')
const REPONSE = require('../Models/reponse')





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
    req.body.NUM_QUESTION_QT
)
console.log(
        req.body.LIB_QUESTION_QT
    )
    console.log(
        req.body.PON_QUESTION_QT
    )

    const { NUM_QT,NUM_CHAP_QT,NUM_SSCHAP_QT,NUM_QUESTION_QT,LIB_QUESTION_QT,PON_QUESTION_QT} = req.body;
  

    let nouvellenews = new questQT({});

    nouvellenews.NUM_QT = NUM_QT;
    nouvellenews.NUM_CHAP_QT = NUM_CHAP_QT;
    nouvellenews.NUM_SSCHAP_QT = NUM_SSCHAP_QT;
    nouvellenews.NUM_QUESTION_QT = NUM_QUESTION_QT;
    nouvellenews.LIB_QUESTION_QT = LIB_QUESTION_QT;
    nouvellenews.PON_QUESTION_QT = PON_QUESTION_QT;
  
    
    nouvellenews.save();

    res.status(201).send({ message: "success"});
}



const recupererquestqt = async(req,res) =>{
    let data = await questQT.find(
     {
       NUM_QT:req.params.key,
       NUM_CHAP_QT: req.params.chap,
       NUM_SSCHAP_QT: req.params.ssch
     }
    )
    var ar = [];
    ar = data;
   var groupBy = require('lodash.groupby');

    const grouped= groupBy(ar,item => item.NUM_CHAP_QT)
    res.send(grouped);
    
   }
   function groupByKey(array, key) {
    return array
      .reduce((hash, obj) => {
        if(obj[key] === undefined) return hash; 
        return Object.assign(hash, { [obj[key]]:( hash[obj[key]] || [] ).concat(obj)})
      }, {})
 }


 const recupererquestqts = async(req,res) =>{
  let data = await TQT.find(
    {
        
            NUM_QT:req.params.key
        
    }
   ).select('INTITULE_QT')

   let data1 = await TCHAP.find(
    {
        
            NUM_QT:req.params.key
        
    }
   ).select('LIB_CHAP_QT NUM_CHAP_QT')
   let data2 = await TSSCHAP.find(
    {
        
            NUM_QT:req.params.key
        
    }
   ).select('LIB_SSCHAP_QT NUM_CHAP_QT NUM_SSCHAP_QT')
   let data3 = await questQT.find(
    {
        
            NUM_QT:req.params.key
        
    }
   ).select('LIB_QUESTION_QT NUM_CHAP_QT NUM_SSCHAP_QT NUM_QUESTION_QT')

res.send({
  data,
  data1,
  data2,
  data3
});



 }


 const recupererquestrep = async(req,res) =>{
  let data = await TQT.find(
    {
        
            NUM_QT:req.params.key
        
    }
   ).select('INTITULE_QT')

   let data1 = await TCHAP.find(
    {
        
            NUM_QT:req.params.key
        
    }
   ).select('LIB_CHAP_QT NUM_CHAP_QT')
   let data2 = await TSSCHAP.find(
    {
        
            NUM_QT:req.params.key
        
    }
   ).select('LIB_SSCHAP_QT NUM_CHAP_QT NUM_SSCHAP_QT')
   let data3 = await questQT.find(
    {
        
            NUM_QT:req.params.key
        
    }
   ).select('LIB_QUESTION_QT NUM_CHAP_QT NUM_SSCHAP_QT NUM_QUESTION_QT')

   let data4 = await REPONSE.find(
    {
        
            NUM_QT:req.params.key
        
    }
   ).select('LIB_QUESTION_QT NUM_CHAP_QT NUM_SSCHAP_QT NUM_QUESTION_QT ReponseQuestion')
res.send({
  data,
  data1,
  data2,
  data3,
  data4
});

 }

 const nomform = async(req,res) =>{
        let data = await TQT.find(
          {
              
                NUM_QT:req.params.key
              
          }
         )
         res.json(data);
    
       }
       const nomchap = async(req,res) =>{
        let data = await TCHAP.find(
          {
              
                NUM_QT:req.params.key
              
          }
         )
         res.json(data);
    
       }
       const nomsschap = async(req,res) =>{
        let data = await TSSCHAP.find(
          {
              
                NUM_QT:req.params.key
              
          }
         )
         res.json(data);
    
       }
       const nomquest = async(req,res) =>{
        let data = await questQT.find(
          {
              
                NUM_QT:req.params.key
              
          }
         )
         res.json(data);
    
       }
      

 
 
module.exports ={
    ajouteTCHAP,recupererquestqt,recupererquestqts,recupererquestrep,nomform,nomchap,nomsschap,nomquest
  }
