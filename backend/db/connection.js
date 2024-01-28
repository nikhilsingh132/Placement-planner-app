const mongoose = require("mongoose");
// mongoose.set("strictQuery", false);

const connectionOptions = {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
};

const connectionstring = "mongodb+srv://admin:admin@placementplannerapp.gphymsr.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(connectionstring, connectionOptions)
    .then(() => {
        console.log("MongoDB is connected");
    })
    .catch((error) => {
        console.log("MongoDB connection error:", error);
    })