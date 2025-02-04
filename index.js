const dotenv = require("dotenv");
const express = require("express");
dotenv.config();

const app = express();
const userRoute= require("./routes/useroute")
const teamRoute= require("./routes/teamsroute")
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.use("/user", userRoute);
app.use("/team", teamRoute);

app.listen(8080, () => {
  console.log("Server is running on http://localhost:8080");
});
