// import { json } from "body-parser";
import express from "express";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


// const path = require('path');

const app = express();

app.use(express.static('public'));
app.use(express.static('fetch'));
app.use(express.static('json'));

app.get('/',(req,res) =>
     {res.send("index.html");});

app.get('/informations',(req,res) =>
// {
//     res.render("info.html");
// }
    {res.sendFile(path.join(__dirname,'public',"info.html"))}
);

app.post('/question',(req,res) => {
    {res.sendFile(path.join(__dirname,"public",'questionnaire.html'))}
})

app.get('/doc_api',(req,res)=>{
    res.sendFile(path.join(__dirname,'json','explication.json'));
});

app.get('/question_api',(req,res)=>{
    res.sendFile(path.join(__dirname,"json",'question.json'));
});

app.listen(3000,() => {

});