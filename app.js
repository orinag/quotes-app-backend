const express = require("express");
const bodyParser = require("body-parser");

const quotesRoutes = require("./routes/quotes-routes");

const app = express();

app.use(quotesRoutes);

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || "Error" });
});

app.listen(5000);
