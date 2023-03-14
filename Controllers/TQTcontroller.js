const questQT = require('../Models/questQT');
const TCHAPQT = require('../Models/TCHAP_QT');
const TQT = require('../Models/TQT');
const TSSCHAP = require('../Models/TSSCHAP_QT');



const recupererTQT = async(req,res ,data) =>{
    TQT.find((err, data)=>{
        res.json(data);
        
    });
}


const recupererTQTT = async(req,res ,data) =>{
    TQT.find((err, data)=>{
        res.json(data);
        
    }).select('INTITULE_QT');
}


const ajouteTQT= async (req, res) => {
    console.log(
        req.body.NUM_QT
)


console.log(
    req.body.DATE_QT
)
console.log(
    req.body.INTITULE_QT
)


    const { NUM_QT,DATE_QT,INTITULE_QT} = req.body;
  

    let nouvellenews = new TQT({});

    nouvellenews.NUM_QT = NUM_QT;
    nouvellenews.DATE_QT = DATE_QT;
    nouvellenews.INTITULE_QT = INTITULE_QT;
  
  
    
    nouvellenews.save();

    res.status(201).send({ message: "success"});
}

const deleteSCLIById = async (req, res) => {
    let data = await TQT.deleteOne(
        {
            
                NUM_QT:req.params.key
            
        }
       )

       let data1 = await TCHAPQT.deleteOne(
        {
            
                NUM_QT:req.params.key
            
        }
       )
       let data2 = await TSSCHAP.deleteOne(
        {
            
                NUM_QT:req.params.key
            
        }
       )
       let data3 = await questQT.deleteOne(
        {
            
                NUM_QT:req.params.key
            
        }
       )
       res.send({
        data,
        data1,
        data2,
        data3,
      })
    }


module.exports ={
    recupererTQT,ajouteTQT,recupererTQTT,deleteSCLIById
 }