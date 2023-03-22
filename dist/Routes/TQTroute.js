const express = require('express')
const  router = express.Router()
const config = require("./../config.json");

const TQTr  = require('../Controllers/TQTcontroller');


router.get('/show', TQTr.recupererTQT)
router.get('/showme', TQTr.recupererTQTT)
router.post('/jou', TQTr.ajouteTQT)
router.delete('/dell/:key', TQTr.deleteSCLIById);


module.exports= router