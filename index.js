const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require('dotenv').config()

const app = express();

const port = 4000;

app.use(cors())

app.use(express.json());

app.use(require("./routes/news.route"));
app.use(require("./routes/users.route"));
app.use(require("./routes/comments.route"));
// app.use(authMiddleware, require("./routes/users.route"));

mongoose
  .connect("mongodb+srv://mgls:46325899@cluster0.od801.mongodb.net/News-Authorization", {})
  .then(() => console.log("Успешно соединились с сервером MongoDB"))
  .catch(() => console.log("Ошибка при соединении с сервером MongoDB"));

app.listen(port, () => {
  console.log("Сервер запущен");
});
