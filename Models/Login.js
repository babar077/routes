 var mongoose = require('../connection/connection.js');
 var loginSchema = new mongoose.Schema({
     firstName: {
         type: String
     },
    passWord:{
          type:String
    }
    
    
 });
 var Login = mongoose.model('Login', loginSchema);
 module.exports = Login;