const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const appRouter = require('./routes/appRouter');

const app = express();
const buildPath = path.join(__dirname, '..', 'build');
const PORT = process.env.PORT || 5000;

app.use(express.static(buildPath));
app.use(cors());
app.use(bodyParser.json());
app.use('/', appRouter);
app.listen(PORT, () => console.log(`ouvindo porta ${PORT}`));
