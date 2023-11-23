const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    // res.send('Hello, User')
    res.render('users')
});

module.exports = router;