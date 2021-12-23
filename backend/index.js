const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const { config } = require("./src/config");

// import main Router
const { rootRouter } = require("./src/routers/rootRouter");

// Swagger
const swaggerUI = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument));

// connect to database
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

// mongoose.connect(
//   "mongodb+srv://manhdat:lpeteam@clusterlpe.b49ua.mongodb.net/be_lpe?retryWrites=true&w=majority",
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true,
//     useFindAndModify: false,
//   }
// );

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));

db.once("open", function () {
  console.log("Connect Success to the database!!!");
});

// init app
app.use(express.json());
app.use(cors());
app.use("/api", rootRouter);

// App Running
const port =
  process.env.NODE_ENV === "production" ? process.env.PORT || 80 : 5000;

app.listen(port, function () {
  console.log(
    "Express server listening on port %d in %s mode",
    this.address().port,
    app.settings.env
  );
});
