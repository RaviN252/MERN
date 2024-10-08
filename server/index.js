const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Port = 5008;
const controller = require("./Controller/controller");
const cors = require("cors");

// middlewares
app.use(cors()); // connection from forntend to backend
app.use(express.json()); // connection from backend to database

// db connection
mongoose
  .connect("mongodb://127.0.0.1:27017/Student")
  .then((res) => {
    console.log("MongoDB Connected Successfully ");
  })
  .catch((err) => {
    console.log(err);
  });

// Post api logic
app.post("/api/users/post", controller.PostUser);

// get all data
app.get("/api/users/GetAllData", controller.GetAllData);

// Get One Data Using Find Using Query Method
app.get("/api/users/GetOneData", controller.GetOneData);

// get All data that matches the query

app.get("/api/users/GetAllPatiData", controller.GetAllParticularData);

// starting the server
app.listen(Port, "127.0.0.1", () => {
  console.log("Server Started At " + Port);
});
