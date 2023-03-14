const mongoose  =require('mongoose')
const Schema  =mongoose.Schema

const ClientSchema = new Schema({
  

   
NUM_CLIENT:{ type :String,unique: true},

RS_CLIENT:{ type :String,unique: true},

STATUT_CLIENT:{ type :String},

TEL_CLIENT:{ type :String},

FAX_CLIENT:{ type :String},

ANCA_CLIENT:{ type :String},

CAHT_CLIENT:{ type :String},

EFFECTIF_CLIENT:{ type :String},

SYNDICAT_CLIENT:{ type :String},

CAPITAL_CLIENT:{ type :String},

COD_APE_CLIENT:{ type :String},

RCS_CLIENT:{ type :String},

ACTIVITES_CLIENT:{ type :String},

GIE_CLIENT:{ type :String},

FILIALE_CLIENT:{ type :String},

GROUPE_CLIENT:{ type :String},

COMMENTAIRE_CLIENT:{ type :String},

EVALUATION_CLIENT:{ type :String},

AUDIT_CLIENT:{ type :String},

MQ_CLIENT:{ type :String},

PG_CLIENT:{ type :String},

REGION_CLIENT:{ type :String},

REPDIR_CLIENT:{ type :String},

SITE_INTERNET:{ type :String},

E_mail:{ type :String,unique: true},

ModelesLettres:{ type :String},

password :{ type :String},


} , {timestamps: true})
ClientSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
    }
});

const CLIENT = mongoose.model('CLIENT',ClientSchema)
module.exports =CLIENT