const User = require('../models/user');
const passport = require('passport');

module.exports = {
    index
};

//Either {title: 'Drugs Review', user: req.user} OR {user: req.user}, {title: 'Drugs Review'}
function index(req, res) {
    User.find({}, function(err, users) {
        res.render('index', {
            users,
            user: req.user, // Doesn't find this
            title: 'Drugs Review'}
        );
    });
}