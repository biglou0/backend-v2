const AFFECTATION   = require('../Models/affectation');
const CLIENT = require('../Models/Client');
const Auditeur   = require('../Models/auditeur');
const TQT = require('../Models/TQT');
const FORMPRO = require('../Models/formpro');
const FORMC = require('../Models/formcont');
const EXPAUD = require('../Models/exp');
const TCOMP = require('../Models/tcomp');




const recupereaff = async(req,res) =>{
 
    let data = await AFFECTATION.find(
        { 
            NUM_CLIENT:req.params.key,
         }
        ).select('INTITULE_QT')
        
    res.send(data);
    
   }

   const recupereaffaud = async(req,res) =>{
 
    let data = await AFFECTATION.find(
        { 
            COD_AUDITEUR:req.params.key,
         }
        ).select('INTITULE_QT')
        
    res.send(data);
    
   }


   const histo = async(req,res) =>{
 
    let data = await AFFECTATION.find().select('INTITULE_QT RS_CLIENT NOM_AUDITEUR DATE_AFF')
        
    res.send(data);
    
   }

   const deletehisto = async (req, res) => {
    const id = req.params.id;
    AFFECTATION.findByIdAndRemove(id)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Impossible de supprimer Client avec id=${id}. Client est possiblement introuvable!`
        });
      } else {
        res.send({
          message: "CLient supprimée avec succès!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Impossible de supprimer Client avec id=" + id
      });
    });
    }


const affecte= async (req, res) => {
    console.log(
        req.body.que
)


console.log(
    req.body.DATE_AFF
)
console.log(
    req.body.num
)
console.log(
    req.body.aud
)

console.log(
    req.body.iti
)





  
const { DATE_AFF } = req.body;
    
    
  

    const pharm = await CLIENT.findOne({RS_CLIENT : req.body.num})
    const s1 = await TQT.findOne({ INTITULE_QT : req.body.que})
    const s2 = await Auditeur.findOne({NOM_AUDITEUR : req.body.aud})
    //const s3 = await TQT.findOne({NOM_AUDITEUR : req.body.iti}).select('INTITULE_QT')
    

console.log(s2)
    let nouvellenews = new AFFECTATION({});

    nouvellenews.NUM_QT = s1.NUM_QT;
    nouvellenews.DATE_AFF = DATE_AFF;
    nouvellenews.NUM_CLIENT = pharm.NUM_CLIENT;
    nouvellenews.COD_AUDITEUR = s2.COD_AUDITEUR;
    nouvellenews.INTITULE_QT = s1.INTITULE_QT;
    nouvellenews.NOM_AUDITEUR = s2.NOM_AUDITEUR;
    nouvellenews.RS_CLIENT = pharm.RS_CLIENT;
  
  
    
    nouvellenews.save();

    res.status(201).send({ message: "success"});
}




const addformpro= async (req, res) => {
  console.log(
      req.body.COD_AUDITEUR
)


console.log(
  req.body.DATEFORMP
)
console.log(
  req.body.DATE2FORMP
)
console.log(
  req.body.ECOLE
)

console.log(
  req.body.DIPLOMES
)






const { COD_AUDITEUR,DATEFORMP,DATE2FORMP,ECOLE,DIPLOMES } = req.body;
  
  

  //const s3 = await TQT.findOne({NOM_AUDITEUR : req.body.iti}).select('INTITULE_QT')
  


  let nouvellenews = new FORMPRO({});

  nouvellenews.COD_AUDITEUR = COD_AUDITEUR;
  nouvellenews.DATEFORMP = DATEFORMP;
  nouvellenews.DATE2FORMP = DATE2FORMP;
  nouvellenews.ECOLE = ECOLE;
  nouvellenews.DIPLOMES = DIPLOMES;
 


  
  nouvellenews.save();

  res.status(201).send({ message: "success"});
}

const deleteformpro = async (req, res) => {
  const id = req.params.id;
  FORMPRO.findByIdAndRemove(id)
  .then(data => {
    if (!data) {
      res.status(404).send({
        message: `Impossible de supprimer FORMPRO avec id=${id}. FORMPRO est possiblement introuvable!`
      });
    } else {
      res.send({
        message: "FORMPRO supprimée avec succès!"
      });
    }
  })
  .catch(err => {
    res.status(500).send({
      message: "Impossible de supprimer FORMPRO avec id=" + id
    });
  });
  }


  const addformcont= async (req, res) => {
    console.log(
        req.body.COD_AUDITEUR
  )
  
  
  console.log(
    req.body.DATEFORMC
  )
  console.log(
    req.body.DUREE
  )
  console.log(
    req.body.SUJET
  )
  
  console.log(
    req.body.ORGFORM
  )
  console.log(
    req.body.CPVILLE
  )
  
  
  
  
  
  
  const { COD_AUDITEUR,DATEFORMC,DUREE,SUJET,ORGFORM,CPVILLE } = req.body;
    
    
  
    //const s3 = await TQT.findOne({NOM_AUDITEUR : req.body.iti}).select('INTITULE_QT')
    
  
  
    let nouvellenews = new FORMC({});
  
    nouvellenews.COD_AUDITEUR = COD_AUDITEUR;
    nouvellenews.DATEFORMC = DATEFORMC;
    nouvellenews.DUREE = DUREE;
    nouvellenews.SUJET = SUJET;
    nouvellenews.ORGFORM = ORGFORM;
    nouvellenews.CPVILLE = CPVILLE;
   
  
  
    
    nouvellenews.save();
  
    res.status(201).send({ message: "success"});
  }

  const deleteformco = async (req, res) => {
    const id = req.params.id;
    FORMC.findByIdAndRemove(id)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Impossible de supprimer FORMC avec id=${id}. FORMC est possiblement introuvable!`
        });
      } else {
        res.send({
          message: "FORMC supprimée avec succès!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Impossible de supprimer FORMC avec id=" + id
      });
    });
    }

    const addexp= async (req, res) => {
      console.log(
          req.body.COD_AUDITEUR
    )
    
    
    console.log(
      req.body.DATEEP
    )
    console.log(
      req.body.DATEFIN
    )
    console.log(
      req.body.EMPLOYEUR
    )
    
    console.log(
      req.body.FONCTIONS
    )
  
    
    
    
    
    
    
    const { COD_AUDITEUR,DATEEP,DATEFIN,EMPLOYEUR,FONCTIONS } = req.body;
      
      
    
      //const s3 = await TQT.findOne({NOM_AUDITEUR : req.body.iti}).select('INTITULE_QT')
      
    
    
      let nouvellenews = new EXPAUD({});
    
      nouvellenews.COD_AUDITEUR = COD_AUDITEUR;
      nouvellenews.DATEEP = DATEEP;
      nouvellenews.DATEFIN = DATEFIN;
      nouvellenews.EMPLOYEUR = EMPLOYEUR;
      nouvellenews.FONCTIONS = FONCTIONS;
      
     
    
    
      
      nouvellenews.save();
    
      res.status(201).send({ message: "success"});
    }

    const deleteexp = async (req, res) => {
      const id = req.params.id;
      EXPAUD.findByIdAndRemove(id)
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Impossible de supprimer EXPAUD avec id=${id}. EXPAUD est possiblement introuvable!`
          });
        } else {
          res.send({
            message: "EXPAUD supprimée avec succès!"
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Impossible de supprimer EXPAUD avec id=" + id
        });
      });
      }


      const addtcom= async (req, res) => {
        console.log(
            req.body.Cod_auditeur
      )
      
      
      console.log(
        req.body.NUMERO
      )
      console.log(
        req.body.TYPE
      )
      console.log(
        req.body.LIBELLE
      )
      
      console.log(
        req.body.DATEDEBUT
      )
      console.log(
        req.body.DATEVERIFICATION
      )
      
      
 
      const { Cod_auditeur,NUMERO,TYPE,LIBELLE,DATEDEBUT,DATEVERIFICATION } = req.body;
        
        
      
  
        
      
      
        let nouvellenews = new TCOMP({});
      
        nouvellenews.Cod_auditeur = Cod_auditeur;
        nouvellenews.NUMERO = NUMERO;
        nouvellenews.TYPE = TYPE;
        nouvellenews.LIBELLE = LIBELLE;
        nouvellenews.DATEDEBUT = DATEDEBUT;
        nouvellenews.DATEVERIFICATION = DATEVERIFICATION;
        
       
      
      
        
        nouvellenews.save();
      
        res.status(201).send({ message: "success"});
      }

      const deletetcom = async (req, res) => {
        const id = req.params.id;
        TCOMP.findByIdAndRemove(id)
        .then(data => {
          if (!data) {
            res.status(404).send({
              message: `Impossible de supprimer TCOMP avec id=${id}. TCOMP est possiblement introuvable!`
            });
          } else {
            res.send({
              message: "TCOMP supprimée avec succès!"
            });
          }
        })
        .catch(err => {
          res.status(500).send({
            message: "Impossible de supprimer TCOMP avec id=" + id
          });
        });
        }
module.exports = {
    affecte,recupereaff,recupereaffaud,histo,deletehisto,addformpro,deleteformpro,addformcont,deleteformco,
    addexp,deleteexp,addtcom,deletetcom


}