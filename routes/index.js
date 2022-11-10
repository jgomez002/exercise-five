const express = require('express');
const router = express.Router();
//initializes firestore
const firestore = require("firebase/firestore");
//  Create a reference to the database
const db = firestore.getFirestore();


router.use((req, res, next) => {
    console.log('Time: ', Date.now())
    next();
});

router.get('/', (req, res) => {
    const postsQuery =  firestore.getDocs(firestore.collection(db, "posts"));
    const postsArray = [];

    postsQuery
        .then((response) => {
            response.forEach((post)=> {
                console.log(post.data());
                postsArray.push({id: post.id, ...post.data()});
                res.send(postsArray);
            });
        })
        .catch((error) => {
            console.log(error);
            return res.send(error);
        });

    // res.send('Hello Worlddddd (homepage)')
});


module.exports = router

   //     querySnapshot.forEach((posts) => {
    //         console.log(`${posts.id} => ${posts.data()}`);
    // });