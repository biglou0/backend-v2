const CONTRAT = require('../Models/TCONTRAT');
const Contrat = require('../Models/TCONTRAT');
const Tphase = require('../Models/Tphase');
const TQP = require('../Models/TQP');
const TTYPCONTRAT = require('../Models/TTYP_CONTRAT');


const recuperercontrat = async(req,res) =>{
    
     resultarray = [];
    let data = await Contrat.find(
     
         
             { NUM_CLIENT: req.params.key}
         
     
    )
console.log(data)
  

data.forEach(   async element => {
    
    console.log("this is the element:"+ element);
     
     
     
        
        await getcontrat(element.COD_TYP_CONTRAT).then(function (result) {
            resultarray.push(result[0]);
            

            console.log(resultarray)
        });
       

    
        

    
   })
   

   
 
   //let result = { name: "hello", tarray: resultarray}
   //console.log("+++++++++")
 setTimeout(function(){
    console.log("this is the array:"+ resultarray);
    res.send(resultarray);
 },1000);
}
async function getcontrat(codetypecontrat){
    console.log("this is the passed value:"+codetypecontrat)
    let data = await TTYPCONTRAT.find({ 
        COD_TYP_CONTRAT : codetypecontrat } )
console.log("this the data:"+data);
            return data;
            
        

}

   const recupererTQP = async(req,res) =>{
    let data = await Contrat.find(
     
         
             { NUM_CLIENT: req.params.key}
         
     
    )

  

console.log(data)
    let data1 = await TQP.find({ 
        NUM_QP: data[0].NUM_QP } )
    res.send(data1);


    
   }



   const recuperercontrataud = async(req,res) =>{
    
    resultarray = [];
   let data = await Tphase.find(
    
        
            { COD_AUDITEUR: req.params.key}
        
    
   )
console.log(data)
 

data.forEach(   async element => {
   
   console.log("this is the element:"+ element);
    
    
    
       
       await getcontrat(element.NUM_CONTRAT).then(function (result) {
      
result.forEach( async elemente => {
    console.log("this is the elementaud:"+ element);

    await getcontrate(elemente.COD_TYP_CONTRAT).then(function (resulte) {
        resultarray.push(resulte[0]);
           

        console.log(resultarray)
     


    })




})
        
          
       });

   
      

   
       

   
  })
  

  

  //let result = { name: "hello", tarray: resultarray}
  //console.log("+++++++++")
setTimeout(function(){
   console.log("this is the array:"+ resultarray);
   res.send(resultarray);
},1000);
}
async function getcontrate(codetypecontrat){
    console.log("this is the passed value:"+codetypecontrat)
    let data = await TTYPCONTRAT.find({ 
        COD_TYP_CONTRAT : codetypecontrat } )
 console.log("this the data:"+data);
            return data;
            
        
 
 }
async function getcontrat(codecontrat){
   console.log("this is the passed valuess:"+codecontrat)
   let data = await CONTRAT.find({ 
    NUM_CONTRAT : codecontrat } )
console.log("this the data:"+data);
           return data;
           
       

}

module.exports ={
    recuperercontrat,recupererTQP,recuperercontrataud
   
 }