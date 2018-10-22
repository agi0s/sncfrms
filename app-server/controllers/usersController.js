const User = require('../schemas/userSchema');

exports.loginUser = function(req, res) {

/*     let admin = new User({
        username: '',
        password: '',
        name: '',
        email: '',
        group: '',
        role: ''
    });

    admin.save((saveErr) => {
        if (saveErr) {
            console.log(saveErr);
            return res.status(500);
        }

        return res.send('Saved');
    }); */

    // let userToSend = Object.assign({}, req.user); // ?

    // delete userToSend.password;
    res.send(req.user);
}

exports.logoutUser = function(req, res) {
    req.logout();
    res.redirect('/');
}
