import router from './routes/routes.js';
import  Express  from 'express';
import cors from 'cors';
import dotenv from 'dotenv'
import bodyParser from 'body-parser';
import connectDB from './databaseConnection/connectiondb.js';

// env variable
const Port=process.env.PORT || 8000;


const app=Express()

app.use(cors( ))
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
dotenv.config()
app.post('/login',router)
app.post('/signup',router)

app.get('/',(req,res)=>{

    res.send("server working fine")
})

const db_password=process.env.dB_PASSWORD;
const db_username=process.env.dB_USERNAME;
connectDB(db_username,db_password)
app.listen(`${Port}`,()=>{console.log('server start at 8000')})