const express = require('express');
const routes = require('./develop/routes');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Define a route handler for the root path
app.get('/', (req, res) => {
  res.send('Welcome to the API!');
});

app.use('/api', routes);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
