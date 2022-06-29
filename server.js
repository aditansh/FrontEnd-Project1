const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')

app.use("/public", express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: true}))

let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}
app.listen(port,function(){
    console.log("running at "+ port);
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'public/index.html'));
})

app.post('/', (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    res.send("Username: " + username + "; Password: " + password)
})