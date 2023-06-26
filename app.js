const express = require('express');
const app = express();
const port =8146

const checkWorkingHours = (req, res, next) => {
  const date = new Date();
  const dayOfWeek = date.getDay();
  const hour = date.getHours();

  if (dayOfWeek >= 1 && dayOfWeek <= 5 && hour >= 9 && hour < 17) {
    next(); 
  } else {
    res.send('The web application is only available during working hours (Monday to Friday, from 9 to 17).');
  }
};

app.use(checkWorkingHours);


app.set('view engine', 'ejs'); 

// Define routes
app.get('/', (req, res) => {
  res.render('home'); 
});

app.get('/services', (req, res) => {
  res.render('services'); 
});

app.get('/contact', (req, res) => {
  res.render('contact'); 
});
