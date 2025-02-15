import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import router from "./routes/auth.js"
import connectToDatabase from "./db/db.js"

connectToDatabase();
const app = express()
app.get('/ping', (req, res) => {
    res.send('PONG');
});

app.use(cors())
app.use(express.json())
app.use('/api/auth',router)

app.listen(process.env.PORT, () => {
console. log(`server is Running on port ${process.env.PORT}`)
})