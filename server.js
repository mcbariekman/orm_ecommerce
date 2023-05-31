const express = require('express');
const routes = require('./develop/routes');
const sequelize = require('./develop/config/connection')

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Define a route handler for the root path
app.get('/', (req, res) => {
  res.send('Welcome to the API!');
});

app.use(routes);

sequelize.sync({force:false}).then(()=>{
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
});
