import express from 'express'
import chatRouter from './chat/chatRouter'
import bodyParser from 'body-parser'
import cors from 'cors';

import 'dotenv/config'

const app = express()
app.use(cors({
  origin: '*' // Not recommended for production
}));
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.json({limit: '50mb'}))
app.options('*', cors()); // Enable preflight for all routes

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/chat', chatRouter)

app.listen(3050, () => {
  console.log('Server started on port 3050')
})
