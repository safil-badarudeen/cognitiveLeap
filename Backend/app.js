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

//routes
const adminRouter = require('./routes/adminRoute')



//body parser middleware
app.use(express.json())
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))

app.use('/api/v1/auth',adminRouter)

const notFoundMiddleware = require('./middleware/notFound')
const errorHandlerMiddleware = require('./middleware/ErrorHandler')

app.get('/',(req,res)=> (
  res.send('hello world')))


  
//error middleware
app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)




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