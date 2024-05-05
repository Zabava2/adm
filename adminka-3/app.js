const express = require('express');
const mainRoute = require('./routers/main')
const gamesRouter = require('./routers/games')
const bodyParser = require('body-parser')
const { cors } = require('./middlewares/cors')
const path = require('path')
const PORT = 3000;
const app = express();

app.use(cors,bodyParser.json(),express.static(path.join(__dirname, 'public')),mainRoute, gamesRouter)

app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});