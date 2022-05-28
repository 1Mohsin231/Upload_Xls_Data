// const express = require('express')
// const cors = require('cors')
// const app = express()
// var bodyParser = require('body-parser');
// const port = 3001


// const {MongoClient} = require('mongodb')
// const mongoose = require('mongoose');

// const url= 'mongodb://localhost:27017';
// const databaseName='infotrack'
// // const client=new mongoose.connect(url);
// // console.log(client.connect());
// const client= new MongoClient(url, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//    });
// app.use(cors({
//   origin: "http://localhost:3000",
// }))
// app.use(bodyParser.json());
// async function getData()
// {
//     let result = await client.connect();
//     // db= result.db(databaseName);
//     // collection = db.collection('products');
//     // let data = await collection.find({}).toArray();
//     // console.log(data)
//     console.log(result,"heyyyy")

// }




// getData();
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })
// const employeeRoutes = require('./routes/student.route');
//  app.use('/api/v1/employee',employeeRoutes)

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })




const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

// require('dotenv').config();

const app = express();
const port =  5000;

app.use(cors());
app.use(express.json());

const uri = "mongodb://localhost:27017/infotrack";
mongoose.connect(uri, { useNewUrlParser: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

// const exercisesRouter = require('./routes/exercises');
// const usersRouter = require('./routes/users');

// app.use('/exercises', exercisesRouter);
// app.use('/users', usersRouter);
app.get('/', (req, res) => {
    res.send('Hello World!')
  })
  const employeeRoutes = require('./routes/student.route');
   app.use('/api/v1/employee',employeeRoutes)
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});