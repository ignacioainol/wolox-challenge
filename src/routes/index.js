const { Router } = require('express');
const router = Router();

router.get('/', (req,res) => {
    res.send("you are going for the good way");
})

router.get('/users',(req,res) => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))
})

module.exports = router;

//https://jsonplaceholder.typicode.com/users