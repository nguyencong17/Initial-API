import express from "express";
import bodyParser from 'body-parser';
import viewEngine from './config/viewEngine';
import initWebRoute from './route/web';
import 'dotenv/config';

let app = express();

//config app

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))
viewEngine(app);
initWebRoute(app);

let port = process.env.PORT || 8081;

app.listen(port, () => {
  console.log(`BackEnd NodeJS is runnning! ${port}`)
})