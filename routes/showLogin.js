var Info = require('../Models/Info');
exports.viewLogin = function(req, res) {
    res.render('login.html');
};


exports.getLogin = function(req, res) {
    Info.find({
            firstName: req.body.firstValue,
            passWord: req.body.passValue



        }, function(err, info) {
            console.log(info)
            res.render('confirmed.html');
           
            });

    }