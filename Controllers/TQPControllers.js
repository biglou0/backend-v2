const CODEAPE = require('../Models/COD_APE');
const TNAF = require('../Models/TNAF');
const TQP = require('../Models/TQP');
const TTYPREG = require('../Models/TTYPREGION');
const TTYPADR = require('../Models/TTYP_ADRESSE');
const TTYPCONTRAT = require('../Models/TTYP_CONTRAT');
const TTYPCOUR = require('../Models/TTYP_COURIER');
const TTYPFONC = require('../Models/TTYP_Fonction');
const TTYPPHA = require('../Models/TTYP_PHASE');

const recupererTQp = async(req,res) =>{
    let data = await TQP.find(
     {
         "$or":[
             {NUM_QP:{$regex:req.params.key}}
         ]
     }
    ).select('INTITULE_QP DATE_QP')
    res.send(data);
    
   }



   const recupereraddr = async(req,res ,data) =>{
    TTYPADR.find((err, data)=>{
        res.json(data);
        
    });
}
const recuperercontart = async(req,res ,data) =>{
    TTYPCONTRAT.find((err, data)=>{
        res.json(data);
        
    });
}
const recupererphase = async(req,res ,data) =>{
    TTYPPHA.find((err, data)=>{
        res.json(data);
        
    });
}
const recupererfonction = async(req,res ,data) =>{
    TTYPFONC.find((err, data)=>{
        res.json(data);
        
    });
}
const recupererregion = async(req,res ,data) =>{
    TTYPREG.find((err, data)=>{
        res.json(data);
        
    });
}
const recuperernaf = async(req,res ,data) =>{
    TNAF.find((err, data)=>{
        res.json(data);
        
    });
}
const recuperercodeape = async(req,res ,data) =>{
    CODEAPE.find((err, data)=>{
        res.json(data);
        
    });
}
const recuperercourier= async(req,res ,data) =>{
    TTYPCOUR.find((err, data)=>{
        res.json(data);
        
    });
}








module.exports ={
    recupererTQp,recupereraddr,recuperercodeape,recuperercontart,recuperercourier,recuperernaf,recupererphase,recupererregion,recupererfonction
 }