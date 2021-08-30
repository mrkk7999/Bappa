const express = require('express')
const bodyParser = require("body-parser");
//const.import bodyParser = require("body-parser");
//const bodyparser = require("body-parser");
const app = express();
const port = 3000;


var admin = require("firebase-admin");

var serviceAccount = require("./shorten-1b54d-firebase-adminsdk-rfcar-6f91d239c2.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});


const static=express.static("public");

const urlsdb =  admin.firestore().collection("urlsdb");
const usersdb =  admin.firestore().collection("usersdb");
app.use(static);
app.use(bodyParser.json());
//app.use(bodyParser.json());


// app.use(static);
//creating middleware->whenever we put up request to server before getting to actual route 
//it'll pass through some middleware
// app.use((req, res, next)=>{
//     console.log("we've intercepted the request");
//     next();
// }) 

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// });

// app.get('/another', (req, res) => {
//     res.send('Hello from another')
//   });

app.get('/:short', (req, res) => {
    console.log(req.params);

    const short = req.params.short;

    const doc=urlsdb.doc(short);

    doc.get().then(response => {
        const data=response.data();
        //console.log(data);
        if(data && data.url){
            res.redirect(301,data.url);
        }
        else{
            res.redirect(301,"https://codeforcause.org");
        }
    })
    //res.send("We'll redirect you to"+short);
  });


app.post('/admin/urls/', (req, res) => {
    // console.log(req.body);
    const {email,password,short,url}=req.body;

    usersdb.doc(email).get().then(response=>{
        const user = response.data();
        //console.log(user);

        if(user && (user.email==email) && (user.password==password)) {
            const doc = urlsdb.doc(short);
            doc.set({url});
            res.send("Done");
        }
        else{
            res.send(403, "Not Possible");
        }
    })
    //res.send('Hello from another!');
  });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});