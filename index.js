const express = require("express");
const db = require("./src/config/db");
const config = require("./src/config/config");

// import routes here
const authRoute = require("./src/Routes/authRoute");
const app = express();

const port = config.PORT;
app.use(express.json());

// Connect to the database
db.connect();



app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});