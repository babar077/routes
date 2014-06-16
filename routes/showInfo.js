var Info=require('../Models/Info');
exports.viewInfo = function(req, res) {
    res.render('Record.html');
};

exports.addInfo = function(req, res) {
    var data = new Info({
        firstName:req.body.firstValue,
        passWord:req.body.passValue,
        age:req.body.age,
        sex:req.body.sex,
        emailAddress:req.body.emailaddress,
       
    });

    data.save(function(err, doc) {
        console.log(doc);
        res.send(doc);
    });
}











