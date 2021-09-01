const express = require("express");
const connectDB = require("./config/db");
var cors = require("cors");

const employees = require("./routes/api/employees");

const app = express();

connectDB();

app.use(cors({origin: true, credentials: true}));
app.use(express.json({extended: false}));
app.get("/", (req, res) => res.send("The server is working"));
app.use("/api/employees", employees);

const port = process.env.PORT || 8082;

app.listen(port, () => console.log("Server is running on port " + port));