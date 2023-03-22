const express   = require('express')
const mongoose  = require('mongoose')
const morgan    = require('morgan')
const bodyParser = require('body-parser')
const config = require("./config.json");



var TQTroutes = require  ('./Routes/TQTroute')
var TCHAProutes = require  ('./Routes/TCHAProute')
var TSSCHAProutes = require  ('./Routes/TSSCHAProute')
var questroutes = require  ('./Routes/questroutes')
var clientroutes = require  ('./Routes/Clientroutes')
var AuthRoute = require  ('./Routes/AdminRoute')
var TQPRoute = require  ('./Routes/TQPRoutes')
var ContratRoute = require  ('./Routes/ContratRoute')
var TTYPContratRoute = require  ('./Routes/TTYP_Contrat')
var AuditeurRoute = require('./Routes/auditeurRoute')
var ReponseRoute = require('./Routes/ReponseRoute')
var AffecteRoute = require('./Routes/AffectationRoute')

mongoose.set("strictQuery", false);
mongoose.connect(config.database,{useNewUrlParser : true , useUnifiedTopology:true})
const db  = mongoose.connection

db.on('error',(err) =>{
    console.log(err)
} )

db.once('open', ()=> {
    console.log('Connecté a la base de données !')
})




const app=express()

app.use(morgan('dev'))
app.use(express.static('public'));
app.use('/uploads', express.static('uploads'));
app.use(bodyParser.urlencoded({extended : true}))
app.use(bodyParser.json())

const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}



app.use(cors(corsOptions)) // Use this after the variable declaration

const PORT = process.env.PORT || 3000

app.listen(PORT,  ()=> {
    console.log(`Server up and running on port ${PORT}`)
})

app.use('/TQT',TQTroutes);
app.use('/TCHAP',TCHAProutes);
app.use('/TSSCHAP',TSSCHAProutes);
app.use('/quest',questroutes);
app.use('/client',clientroutes);
app.use('/admin',AuthRoute);
app.use('/tqp',TQPRoute);
app.use('/contrat',ContratRoute);
app.use('/TTYPcontrat',TTYPContratRoute);
app.use ('/audit',AuditeurRoute);
app.use('/reponse',ReponseRoute)
app.use('/affect',AffecteRoute)


