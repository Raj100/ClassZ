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

app.use(cors());

mongoose
.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000, // Timeout after 5 seconds instead of waiting indefinitely
})
.then(() => console.log("Connected to MongoDB"))
.catch((err) => {
    console.error("MongoDB connection error:", err);
    process.exit(1); // Exit the process with an error code if the connection fails
});


app.use('/', Routes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});



app.listen(PORT, () => {
    console.log(`Server started at port no. ${PORT}`)
})