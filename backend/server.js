const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
require("./db/connection");
app.use(express.json());
const cors = require("cors")

//enable cors
app.use(cors(
    {
        origin:["http://localhost:3000"],
        methods:["GET","POST"],
        credentials:true,
    }
));

app.use(require("./api/QuesApi"));
app.use(require("./api/UserApi"))
app.use(require("./api/NotesApi"));


app.listen(port, () => {
    console.log("Server is connected successfully");
})