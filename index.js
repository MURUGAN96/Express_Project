const express = require('express');
const app = express();
const port = 3010;

app.get('/getAllEmployeeData',(req,res)=>{
  var response = [
    {
      id:1,
      name:'XYZ',
      dept: 'qw',
      desig: 'SE'
    },
    {
      id:2,
      name:'XYZ',
      dept: 'qw',
      desig: 'SE'
    },
  ]

  res.end(response);
})


app.use(express.json());

app.get('/', (req, res) => {
  res.send('Response initiated from home page');
});

//Retrieve data through Query string in URL
app.get('/login', (req, res) => {
  var username = req.query.name;
  var passWord = req.quesry.password;

  res.send(`The given data is ${username} and ${passWord}`);
});

//Retrieve data through Params string in URL
app.get('/getData:id', (req, res) => {
  var employeeID = req.params.id;

  res.end(`The give employee id is ${employeeID}`);
});

//Post method
app.post('/submitData', (req, res) => {
  var id = req.body.id;
  var name = req.body.name;
  var salary = req.body.salary;

  if (name != '') res.end('The request is valid');
  var formData = `${id}_${name}_${salary}`;

  res.end(formData);
});


//Middleware
//Pre-filter
app.use((req,res,next)=>{
  if(req.url.startsWith == '/login') console.log('Doing some validation like encryption')
  else console.log('Going with register and checking all fields are given as validation')
  next()
})

app.get('/login',(req,res)=>{
  console.log('After Pre-filter')
  res.end('Login process');
})

//post-filter
app.use('/login',(req,res)=>{
  console.log('Login finish')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
