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

app.use(express.json());
app.use(cors());
app.use("/api", rootRouter);

try {
  mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  mongoose.connection.on("connected", function () {
    console.log("connection established successfully");
  });
} catch (err) {
  console.log("on connecting mongoose error", err);
}

// init app

// App Running
const port = 5000 || process.env.PORT;

app.listen(port, function () {
  console.log(
    "Express server listening on port %d in %s mode",
    this.address().port,
    app.settings.env
  );
});
