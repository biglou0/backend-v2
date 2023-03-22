const bcrypt  =require('bcryptjs')
const config = require("../config.json");
const jwt    =require('jsonwebtoken')
const nodemailer = require('nodemailer');

const Admin   = require('../Models/Admin')

const register = async (req, res) => {
    const { Firstname , Lastname, email, phone} = req.body;
    console.log(
      req.body.Firstname
  )
  console.log(
    req.body.Lastname
)
  console.log(
  req.body.email
  )
  console.log(
  req.body.phone
  )
 
  
  
  
    const verifUtilisateur = await Admin.findOne({ email });
    if (verifUtilisateur) {
      res.status(403).send({ message: "Utilisateur existe deja !" });
    } else {
      const nouveauUtilisateur = new Admin();

  
      mdpEncrypted = bcrypt.hashSync(phone,10);

      
      nouveauUtilisateur.Firstname = Firstname;
      nouveauUtilisateur.Lastname = Lastname;
      nouveauUtilisateur.email = email;
      nouveauUtilisateur.phone = phone;
      nouveauUtilisateur.password = mdpEncrypted; 
      //nouveauUtilisateur.isVerified = false;
      
    
      nouveauUtilisateur.save();
  
      console.log(
        mdpEncrypted
      )
      // token creation
      const token = jwt.sign({ _id: nouveauUtilisateur._id }, config.token_secret, {
        expiresIn: "120000", // in Milliseconds (3600000 = 1 hour)
      });
  
      sendConfirmationEmail(email);
      res.status(201).send({ message: "success", uses: nouveauUtilisateur, "Token": jwt.verify(token, config.token_secret) });
    }
  };

  async function sendConfirmationEmail(Email) {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'louay.kasdallah12@gmail.com',
        pass: 'tpteyexpxgzjeqac'
      }
    });
  
    transporter.verify(function (error, success) {
      if (error) {
        console.log(error);
        console.log("Server not ready");
      } else {
        console.log("Server is ready to take our messages");
      }
    });
  
  
  
  
  
    const mailOptions = {
      from: 'Admin <louay.kasdallah12@gmail.com>',
      to: Email,
      subject: 'Admin Account ',
      html: '<h3>Your Admin  Account Has been created. \n Email : ' +Email+ '\n Password : Your Phone Number.</h3>'
    };
  
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
  }

  


  
  const login = (req, res) => {


    console.log(
      req.body.email
    )
  
    console.log(
      req.body.password
    )
  
  
  
  
    var email = req.body.email
    var password = req.body.password
    Admin.findOne({ email: email }, function (err, user) {
  
      if (err) {
        console.log(err);
      }
  
  
      if (user) {
        bcrypt.compare(password, user.password, function (err, result) {
          if (err) {
            res.json({
              error: err
            })
          }
  
          if (result) {
            let token = jwt.sign({ Firstname: user.Firstname }, 'verysecretValue', { expiresIn: '1h' })
           
            
            return res.json({
  
              Firstname: user.Firstname,
              Lastname: user.Lastname,
              email: user.email,
              phone: user.phone,
              password: user.password,
         
              token
  
  
  
  
            })
            
            
          } else {
            res.status(403).send({ message: "password does not matched !" });
  
          }
        })
  
  
      } else {
        res.status(403).send({ message: "Wrong email adress!" });
  
  
  
  
  
      }
    })

  
  }

  module.exports ={
    register, login
    }