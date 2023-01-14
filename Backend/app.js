//.env
require('dotenv').config()
//express
const express = require ('express');
const app = express();
const PORT = process.env.PORT || 5000;
//mongodb
const connect = require('./db/connect');

// packages
const morgan = require('morgan')



//body parser middleware
app.use(express.json())
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))

const notFoundMiddleware = require('./middleware/notFound')
const errorHandlerMiddleware = require('./middleware/ErrorHandler')



//error middleware
app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

app.get('/',(req,res)=> (
 res.send('hello world')))


 const start = async()=>{
    try{
      await connect(process.env.MONGO_URI)
      app.listen(PORT,()=>{
        console.log(`server is running on port ${PORT}...`)
      })
    }catch(err){
      console.log(err)
    }
 }

 start()