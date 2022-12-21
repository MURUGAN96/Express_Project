const express = require('express');
const app = express();
const port = 3010;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Response initiated from home page');
});

app.get('/login', (req, res) => {
  var username = req.query.name;
  var passWord = req.quesry.password;

  res.send(`The given data is ${username} and ${passWord}`);
});

app.get('/getData:id', (req, res) => {
  var employeeID = req.params.id;

  res.end(`The give employee id is ${employeeID}`);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
