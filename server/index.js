// IMPORTS FROM PACKAGES
const express = require("express");
const mongoose = require("mongoose");

const authRouter = require("./routes/auth");

const PORT = process.env.PORT || 3000;
const app = express();
const DB =
  "mongodb+srv://Ahmed:160302058@cluster0.fnp3bgt.mongodb.net/?retryWrites=true&w=majority";

app.use(express.json());
app.use(authRouter);

mongoose
  .connect(DB)
  .then(() => {
    console.log("Connection Successful");
  })
  .catch((e) => {
    console.log(e);
  });

app.listen(PORT, "0.0.0.0", () => {
  console.log(`connected at port ${PORT}`);
});
