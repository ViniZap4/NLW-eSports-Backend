import express from "express";

const app  = express();
const port = 3333;

app.get('/games', (request, response) => {
  return response.json([]);
})

app.post('/ads', (request, response) => {
  return response.status(201).json([]);
});

app.get('/games/:id/ads', (request, response) => {
  const gameId= request.params.id;


  return response.json([])
})


app.listen(port);