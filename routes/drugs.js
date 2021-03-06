const express = require('express');
const router = express.Router();
const passport = require('passport');
const drugsCtrl = require('../controllers/drugs.js');

router.get('/', drugsCtrl.index);
router.get('/new', drugsCtrl.new);
router.post('/', drugsCtrl.create);
router.get('/:id', drugsCtrl.show);
router.post('/:id', drugsCtrl.addLike);
router.put('/:id', drugsCtrl.removeLike);
router.post('/:id/delete', drugsCtrl.requestDelete);
router.delete('/:id', drugsCtrl.delete);


router.get('/auth/google', passport.authenticate(
    'google',
    { scope: ['profile', 'email']}
));

router.get('/oauth2callback', passport.authenticate(
    'google',
    {   //Should return user to current page or home
        successRedirect: '/',
        failureRedirect: '/',
        failureFlash: true
    }
));

router.get('/logout', function(req, res) {
    req.logout();
    res.redirect('back');
})

module.exports = router;