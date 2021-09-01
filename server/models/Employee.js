const mongoose = require("mongoose");

const EmployeeSchema = new mongoose.Schema({
    name: {type: String},
    position: {type: String},
    office: {type: String},
    salary: {type: Number}
});

module.exports = Employee = mongoose.model("employee", EmployeeSchema);