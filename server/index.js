const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
// const bodyParser = require("body-parser")
const app = express()
const Routes = require("./routes/route.js")

const PORT = process.env.PORT || 5000

dotenv.config();

// app.use(bodyParser.json({ limit: '10mb', extended: true }))
// app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }))
//

app.use(express.json({ limit: '10mb' }))
app.use(cors())
app.use(cors({
    origin: 'https://mern-project-frontend-seven.vercel.app'
  }));

mongoose
    .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(console.log("Connected to MongoDB"))
    .catch((err) => console.log("NOT CONNECTED TO NETWORK", err))

app.use('/', Routes);

//for texting
app.use('/', (req,res,next)=>{
    res.send("server is running");   
});


app.listen(PORT, () => {
    console.log(`Server started at port no. ${PORT}`)
})