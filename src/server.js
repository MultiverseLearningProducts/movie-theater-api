const express = require("express");
const seed = require("../seed");
const userRouter = require("../routes/user");

const app = express();

app.use(express.json());

app.use("/users", userRouter);

app.listen(5001, async () => {
  await seed();
  console.log("Listening on port 5001");
});
