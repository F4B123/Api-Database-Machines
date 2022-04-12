require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
const PORT = process.env.PORT || 3001;

const app = express();
const routerController = require("./routes/routerController");

// cors configuration
const corsOptions = {
    origin: function (origin, callback) {
      // db.loadOrigins is an example call to load
      // a list of origins from a backing database
      callback(null,true)
    }
}

//cors middleware
app.use(cors(corsOptions));

//middleware for parsing
app.use(bodyParser.json({limit:"100mb",}))
app.use(bodyParser.urlencoded({ extended: true }));

//routes
app.use('/',routerController)

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
