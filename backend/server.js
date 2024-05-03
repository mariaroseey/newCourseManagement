const express = require('express')
require('dotenv').config()
const mongoose = require('mongoose')
const router = require('./router/usersRouter')
const StudentRouter = require('./router/studentsRouter')
const SubjectRouter = require('./router/subjectsRouter')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())
app.use('/user', router)
app.use('/students', StudentRouter)
app.use('/subjects', SubjectRouter)

mongoose.connect(process.env.MONGO_DB)
    .then(()=>{
        app.listen(process.env.PORT, () => {
            console.log('server connected')
        })
    })
    .catch((error)=> {
        console.log(error)
    })