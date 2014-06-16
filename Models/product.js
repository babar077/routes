 var mongoose = require('../connection/connection.js');
 var productSchema = new mongoose.Schema({
     firstValue: {
         type: 'Integer'
     },
    ,
     secondValue: {
         type: 'Integer'
     },
     resultValue:{
     	type:'Integer'
     }
    
 });
 var Product = mongoose.model('Product', productSchema);
 module.exports = Product;