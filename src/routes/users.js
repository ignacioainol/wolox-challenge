const { Router } = require('express');
const router = Router();
const fetch = require('node-fetch');


router.get('/',(req,res) => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => res.json(json));
});

module.exports = router;