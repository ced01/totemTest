const express = require('express'),
      bodyParser = require('body-parser'),
      cors = require('cors')
      mongoose = require('mongoose');

const Post = require('./models/post');

const app = express();
app.use(cors());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const userRoutes = require('./routes/user.js');

/* let connect to the mongo db database */
const mdboptions = { useNewUrlParser: true, useUnifiedTopology: true };

mongoose.connect("mongodb+srv://mongodbuser:mongodbmdp456@cluster0.ot4ip.mongodb.net/test?retryWrites=true&w=majority", mdboptions).then(()=>{
    console.log("Connection to mongo database done");
}).catch((error => console.log(error)));

app.use((req, res, next) => {
  console.log('Request received!');
  next();
});

app.use((req, res, next) => {
  res.json({ message: 'Your request was successful!' });
  next();
});

app.use((req, res, next) => {
  console.log('Response sent successfully!');
  next();
});

app.post('/api/post', (req, res) => {
  const post = new Post({title : req.body.title,msg: req.body.msg,date: req.body.date,publisher: req.body.publisher});
  post.save().then(() => {
    res.status(201).json({
      message : "Post saved successfully"
    });
  }).catch((error) => {
    res.status(400).json({
      error : error
    });
  });
});

app.use('/api/auth', userRoutes);

app.listen(process.env.PORT || 3001);