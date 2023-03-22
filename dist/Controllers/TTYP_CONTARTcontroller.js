const TTYPCONTRAT = require('../Models/TTYP_CONTRAT');


const recupererTTYP_CONTRAT = async(req,res) =>{
    let data = await TTYPCONTRAT.find(
     {
         "$or":[
             {COD_TYP_CONTRAT:{$regex:req.params.key}}
         ]
     }
    )
    res.send(data);
    
   }

module.exports ={
    recupererTTYP_CONTRAT
 }