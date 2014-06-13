 var mongoose = require('../connection/connection.js');
 var infoSchema = new mongoose.Schema({
     firstName: {
         type: 'String'
     },
    ,
     age: {
         type: 'String'
     }
    
 });
 var Info = mongoose.model('Info', infoSchema);
 module.exports = Info;
