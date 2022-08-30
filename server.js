const express = require("express");
const path = require("path");
const errorHandle = require("./middleware/errorHandler");
const { logger } = require("./middleware/logger");
const app = express();
const PORT = process.env.PORT || 8000;

// server logger
app.use(logger);

// to serve static file
app.use("/", express.static(path.join(__dirname, "public")));

// send html view files;
app.use("/", require("./routes/root"));

// no match url
app.all("*", (req, res) => {
  res.status(404);
  if (req.accepts("html")) {
    res.sendFile(path.join(__dirname, "views", "404.html"));
  } else if (req.accepts("json")) {
    res.json({ message: "Did not match any routes" });
  } else {
    res.type("txt").send("Did not match any routes");
  }
});

//error handler
app.use(errorHandle)

// server connection
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
