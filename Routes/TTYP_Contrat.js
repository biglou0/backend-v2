const express = require('express')
const  router = express.Router()
const config = require("./../config.json");

const TTYPCONTRATr  = require('../Controllers/TTYP_CONTARTcontroller');



router.get('/showw/:key', TTYPCONTRATr.recupererTTYP_CONTRAT)




module.exports= router