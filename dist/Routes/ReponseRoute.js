const express = require('express')
const  router = express.Router()
const config = require("./../config.json");

const reponse  = require('../Controllers/ReponseController');



router.post('/ajou', reponse.ajoutereponse)
router.get('/showrep/:key', reponse.recupererresp)



module.exports= router