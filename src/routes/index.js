const { Router } = require('express');
const router = Router();
const fetch = require('node-fetch');

router.get('/', (req,res) => {
    res.send("you are going for the good way");
});

router.get('/users',(req,res) => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => res.json(json));
});

router.get('/photos', (req,res) => {
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(response => response.json())
        .then(json => res.json(json));
});

router.get('/albums', (req,res) => {
    fetch('https://jsonplaceholder.typicode.com/albums')
        .then(response => response.json())
        .then(json => res.json(json))
})

module.exports = router;