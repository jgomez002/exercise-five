const firebase = require ("firebase/app");

const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
const firebaseConfig = {
  apiKey: "AIzaSyD5z28T9QG1sIvMIZsw1D4ajqyqAwZjM5A",
  authDomain: "exercise-five-dynweb.firebaseapp.com",
  projectId: "exercise-five-dynweb",
  storageBucket: "exercise-five-dynweb.appspot.com",
  messagingSenderId: "729832982897",
  appId: "1:729832982897:web:7d9f994425b4a0a8ab8ed0"
};

firebase.initializeApp(firebaseConfig);
 
const indexRoute = require('./routes/index.js');

app.use('/', indexRoute);

 
app.listen(port, () => {
  console.log(`Working! here is the port: ${port}`)
})  