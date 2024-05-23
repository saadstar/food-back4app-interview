const Parse = require("parse/node");
const express = require("express");
const app = express();
const createFood = require("./controllers/FoodController");
const cors = require("cors");

Parse.serverURL = "https://parseapi.back4app.com"; 
const APP_ID = "se2hrDVab4ZGXuVlYSzcfUz8EVTb4mUlJWJZZcKq";
const JAVASCRIPT_KEY = "MMbmWX42XHP104JUNtVcMksl9EnlUTdlkcYIOnEK";
// CORS configuration
const corsOptions = {
  origin: "https://parseapi.back4app.com.",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  allowedHeaders: [
    "Content-Type",
    "Authorization",
    "x-parse-application-id",
    "x-parse-rest-api-key",
  ],
  credentials: true,
};

app.use(cors(corsOptions));

Parse.initialize(
  APP_ID, 
  JAVASCRIPT_KEY, 
  "5AVAtvlGlG5cEeolatkFDhY5p99PzoBUvm7MBLMo" // This is your Master key (never use it in the frontend)
);
console.log("Server Running...");
createFood();
