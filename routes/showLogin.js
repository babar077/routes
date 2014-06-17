var Info = require('../Models/Info');
exports.viewLogin = function(req, res) {
    res.render('login.html');
};


exports.getLogin = function(req, res) {
    Info.findOne({
        firstName: req.body.firstValue,
        passWord: req.body.passValue


    }, function(err, info) {
    	if(info){
        console.log(info)
        res.render('confirmed.html');
         req.session.currFirstName = info.firstName;
    }
        else{
        	res.render('notConfirmed.html');
        }

    });

}



	


