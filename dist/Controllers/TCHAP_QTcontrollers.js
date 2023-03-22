const TQT = require('../Models/TQT')
const TCHAP = require('../Models/TCHAP_QT')
const TSSCHAP = require('../Models/TSSCHAP_QT')
const questQT = require('../Models/questQT')



const recupererChap = async(req,res ,data) =>{
   
    num =req.body.NUM_QT
    pharm = await TQT.findOne(num).select('INTITULE_QT')
  
    res.send( pharm)
  }
  const recupererChapp = async(req,res) =>{
   let data = await TCHAP.find(
    {
        
            NUM_QT:req.params.key
        
    }
   ).select('NUM_CHAP_QT LIB_CHAP_QT')
   res.send(data);
   
  }





const ajouteTCHAP= async (req, res) => {
    console.log(
        req.body.NUM_QT
)


console.log(
    req.body.NUM_CHAP_QT
)
console.log(
    req.body.LIB_CHAP_QT
)


    const { NUM_QT,NUM_CHAP_QT,LIB_CHAP_QT} = req.body;
  

    let nouvellenews = new TCHAP({});

    nouvellenews.NUM_QT = NUM_QT;
    nouvellenews.NUM_CHAP_QT = NUM_CHAP_QT;
    nouvellenews.LIB_CHAP_QT = LIB_CHAP_QT;
  
  
    
    nouvellenews.save();

    res.status(201).send({ message: "success"});
}

const updateform = async (req,res, next) => {
    const {id} = req.params
     try{
    const StuUpdated = await TQT.findByIdAndUpdate(id,{$set:{...req.body}})
    console.log(StuUpdated)
    console.log(StuUpdated)
    return res.status(200).send({
        message: "Auditeur was updated successfully!"
      })
    }catch(error){
        return res.status(500).send({err:error})
    }
    
    }
    const updatechap = async (req,res, next) => {
        const {id} = req.params
         try{
        const StuUpdated = await TCHAP.findByIdAndUpdate(id,{$set:{...req.body}})
        console.log(StuUpdated)
        console.log(StuUpdated)
        return res.status(200).send({
            message: "Auditeur was updated successfully!"
          })
        }catch(error){
            return res.status(500).send({err:error})
        }
        
        }
        const updatesschap = async (req,res, next) => {
            const {id} = req.params
             try{
            const StuUpdated = await TSSCHAP.findByIdAndUpdate(id,{$set:{...req.body}})
            console.log(StuUpdated)
            console.log(StuUpdated)
            return res.status(200).send({
                message: "Auditeur was updated successfully!"
              })
            }catch(error){
                return res.status(500).send({err:error})
            }
            
            }
            const updatequest = async (req,res, next) => {
                const {id} = req.params
                 try{
                const StuUpdated = await questQT.findByIdAndUpdate(id,{$set:{...req.body}})
                console.log(StuUpdated)
                console.log(StuUpdated)
                return res.status(200).send({
                    message: "Auditeur was updated successfully!"
                  })
                }catch(error){
                    return res.status(500).send({err:error})
                }
                
                }


                const  searchform = async(req,res) => {
                    const id = req.params.id;
                    TQT.findById(id)
                      .then(data => {
                        if (!data)
                          res.status(404).send({ message: "form introuvable pour id " + id });
                        else res.send(data);
                      })
                      .catch(err => {
                        res
                          .status(500)
                          .send({ message: "Erreur recuperation form avec id=" + id });
                      });
                  }
                  const  searchchap = async(req,res) => {
                    const id = req.params.id;
                    TCHAP.findById(id)
                      .then(data => {
                        if (!data)
                          res.status(404).send({ message: "chap introuvable pour id " + id });
                        else res.send(data);
                      })
                      .catch(err => {
                        res
                          .status(500)
                          .send({ message: "Erreur recuperation chap avec id=" + id });
                      });
                  }
                  const  searchsschap = async(req,res) => {
                    const id = req.params.id;
                    TSSCHAP.findById(id)
                      .then(data => {
                        if (!data)
                          res.status(404).send({ message: "souschap introuvable pour id " + id });
                        else res.send(data);
                      })
                      .catch(err => {
                        res
                          .status(500)
                          .send({ message: "Erreur recuperation souschap avec id=" + id });
                      });
                  }
                  const  searchquest = async(req,res) => {
                    const id = req.params.id;
                    questQT.findById(id)
                      .then(data => {
                        if (!data)
                          res.status(404).send({ message: "quest introuvable pour id " + id });
                        else res.send(data);
                      })
                      .catch(err => {
                        res
                          .status(500)
                          .send({ message: "Erreur recuperation quest avec id=" + id });
                      });
                  }
module.exports ={
    recupererChap ,ajouteTCHAP,recupererChapp,updateform,updatechap,updatesschap,updatequest,searchform,searchchap,searchsschap,searchquest
 }