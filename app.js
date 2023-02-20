//define dependencies
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = 5000;
const { MONGODBURI } = require("./keys");
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

 require("./models/user");


 //register routes
app.use(require("./routes/auth"));

app.use(require("./routes/user"));

//establishing Database connection
mongoose.connect(MONGODBURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on("connected", () => {
  console.log("connection successful");
});
mongoose.connection.on("error", (err) => {
  console.log("connection failed", err);
});

app.listen(PORT, () => {
  console.log(`App is running on ${PORT}`);
});