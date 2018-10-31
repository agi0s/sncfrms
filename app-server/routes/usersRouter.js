const express = require('express');
const router = express.Router();
const passport = require('passport');

const usersController = require("../controllers/usersController");
const checkAuth = require('../middlewares/checkAuthorization');

router.post('/auth', passport.authenticate('local'), usersController.loginUser);
router.get('/logout', usersController.logoutUser);
router.post('/registration', usersController.registerUser);

// only for test
router.get('/', checkAuth, (req, res) => {
    res.send('Got it!');
});

//admin panel routes
router.get('/users', usersController.getUsers);
router.get('/groups', usersController.getGroups);
router.post('/adduser', usersController.registerUser);
router.post('/addgroup', usersController.addGroup);

module.exports = router;
