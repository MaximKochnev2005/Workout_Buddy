require('dotenv').config()
mongoose = require("mongoose")
const express = require("express")
const workoutRoutes = require("./routes/workouts")
const userRoutes = require("./routes/user")

const  app = express()

app.use(express.json())

app.use((req, res , next) =>{
    console.log(req.path, req.method)
    next()
})

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log("app listen & db is connected")
        })
    })
    .catch((error) => {
        console.log(error)
    })


app.use('/api/workouts', workoutRoutes)
app.use('/api/user', userRoutes)
