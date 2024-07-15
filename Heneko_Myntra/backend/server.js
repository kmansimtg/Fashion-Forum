const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();

const PORT = 80;
const db = require('./db');
const router = require('./routes'); // Make sure this path is correct

// Database connection
db.connect();

// Middleware
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));

// CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

// Routes
app.use("/api", router);
app.use( express.static(path.join(__dirname, "/../frontend/build")));
app.use('/static', express.static(path.join(__dirname, "/../frontend/build/index.html"))); // Fixed path here

app.get('/', (req, res) => { // Fixed path here
  try {
    res.sendFile(path.join(__dirname, '/../frontend/build'));
  } catch (e) {
    res.send("Oops! Unexpected error");
  }
});

app.use(cors());

// Server listening
app.listen(process.env.PORT || PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
