const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
require("./db/connection");
app.use(express.json());
const cors = require("cors")

//enable cors
app.use(cors());

app.use(require("./api/QuesApi"));
app.use(require("./api/UserApi"))


app.listen(port, () => {
    console.log("Server is connected successfully");
})