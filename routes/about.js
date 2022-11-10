const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
    console.log('Time: ', Date.now())
    next()
});

router.get('/', (req, res) => {
    res.send(`<div><h1>About Page</h1><h2> this is the about page</h2><div>`)
});

router.get('/me', (req, res) =>{
    res.send([{
        "id":'me',
        "name": 'Jacquelyn',
        "message": "hello"
    },
    {
        "id":'not-me',
        "name": "someoneElse",
        "message": "bye"
    }
    ]);
})


module.exports = router