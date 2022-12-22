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

app.get('/getAllEmployees', (req, res) => {
  res.end(employeeDetails);
});

app.get('/getAllEmployeeById:id', (req, res) => {
  var input = req.params.id;
  var employeeRes = employeeDetails.filter((employee) => input == employee.id);
  res.end(employeeRes);
});

app.get('/getAllEmployeeByName:name', (req, res) => {
  var inputName = req.params.name;
  var employeeName = employeeDetails.filter(
    (employee) => inputName == employee.name
  );
  res.end(employeeName);
});

app.use(express.json());

app.post('/insertEmployeeData', (req, res) => {
  var newObj = {
    id: req.body.id,
    name: req.body.name,
    dept: req.body.dept,
    desig: req.body.desig,
  };

  employeeDetails.push(newObj);
  var formData = `The values inserted succesfully - ${id}_${name}_${dept}_${desig}`;

  res.end(formData);
});

app.put('/updateEmployeeData', (req, res) => {
  var inputId = req.param.id;
  var updateData = {
    id: req.body.id,
    name: req.body.name,
    dept: req.body.dept,
    desig: req.body.desig,
  };

  var getIndex = employeeDetails.findIndex((ele) => inputId == ele.id);
  employeeDetails[getIndex] = updateData;

  res.send(employeeDetails);
});

app.delete('/deleteRecord', (req, res) => {
  var deleteID = req.query.id;
  var getIndex = employeeDetails.findIndex((ele) => deleteID == ele.id);
  if (!getIndex) res.end('The request is invalid');
  employeeDetails.splice(getIndex, 1);
  res.end(employeeDetails);
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

  if (name == '') res.end('The request is in valid');
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
