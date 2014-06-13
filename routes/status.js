exports.addStatus = function(req, res) {
    var status = {
        Status: 'ok',
        message: 'Server is live and Ready',
    };


    res.send(status);

};