import express from 'express';

const app = express();

app.use(express.json())

app.post('/feedbacks', (req, res) => {
  res.send('nada')
})

app.listen(3333, () => { console.log("Server running on port 3333") });