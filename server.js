const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser') 
const cors = require('cors')
const helmet = require('helmet')
const path = require('path')

require('dotenv').config()
const uri = process.env.URI
const port = process.env.PORT

const app = express()
const userRoutes = require('./routes/user')
const errController = require('./controller/err')

app.use(cors())
app.use(helmet())

app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(path.dirname('public')))

app.use(userRoutes)
app.use(errController.get404)

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    app.listen(port, ()=>{console.log(`écoute sur le port ${port}`)})
}).catch((err)=>{
    console.log(err)
});
