
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

mongoose.connect('mongodb://127.0.0.1/trash2treasure')

const Report = mongoose.model('Report', {
  imageUrl: String,
  location: String,
  status: { type: String, default: 'Pending' }
})

const app = express()
app.use(cors())
app.use(express.json())

app.post('/api/reports', async (req, res) => {
  const report = await Report.create(req.body)
  res.json(report)
})

app.get('/api/reports', async (req, res) => {
  res.json(await Report.find())
})

app.listen(5000, () => console.log('Backend running on 5000'))
