const express = require("express");

const app = express();

app.use(express.json());

app.listen(5001, () => {
  console.log("Listening on port 5001");
});
