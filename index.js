const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

app.use(cors());
app.use(express.json());

const connectDB = require("./db/db_connection");
const user_route = require("./routes/user_routs");
const urlPrivate_route = require("./routes/urlPrivet_route");
const redirectUrl = require("./routes/urlRedirect_route");

app.use("/", redirectUrl);
app.use("/api/user", user_route);
app.use("/api/urlPrivate", urlPrivate_route);

connectDB()
  .then(() =>
    app.listen(process.env.PORT, () => {
      console.log("Serverb Is Live");
    })
  )
  .catch((e) => console.log(e, " err-index.js"));
