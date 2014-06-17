// route middleware to make sure a user is logged in
exports.isLoggedIn = function(req, res, next) {
    // // if user is authenticated in the session, carry on 
    if (req.session.currPassWord)
        return next();

    res.redirect('/login');
}


// exports.isLoggedInAlready = function(req, res, next) {
//     // // if user is authenticated in the session, carry on 
//     if (req.isAuthenticated())
//     {
//          res.redirect('/login');
//         // res.redirect('/');
//     }
//     else
//         return next();


// }