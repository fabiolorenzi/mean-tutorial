const express = require("express");
const router = express.Router();

const Employee = require("../../models/Employee.js");

router.get("/", (req, res) => {
    Employee.find()
        .then(employees => res.json(employees))
        .catch(err => res.status(404).json({noemployeesfound: "No employees found"}))
});

router.get("/:id", (req, res) => {
    Employee.findById(req.params.id)
        .then(employee => res.json(employee))
        .catch(err => res.status(404).json({noproductfound: "No employee found"}))
});

router.post("/", (req, res) => {
    Employee.create(req.body)
        .then(employee => res.json({msg: `${employee} added successfully`}))
        .catch(err => res.status(400).json({error: `Unable to add ${err}`}))
});

router.put("/:id", (req, res) => {
    Employee.findByIdAndUpdate(req.params.id, req.body)
        .then(employee => res.json({msg: `${employee} updated correctly`}))
        .catch(err => res.status(400).json({error: `Unable to update ${err}`}))
});

router.delete("/:id", (req, res) => {
    Employee.findByIdAndRemove(req.params.id, req.body)
        .then(employee => res.json({msg: `${employee} removed successfully`}))
        .catch(err => res.status(404).json({error: `${err} not removed properly`}))
});

module.exports = router;