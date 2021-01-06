const db = require("../models/model");

module.exports = function (app) {

    app.get("/api/workouts", (req, res) => {
        db.find({})
            .then(workout => {
                res.json(workout);
            })
            .catch(err => {
                res.json(err);
            });
    })

    app.post("/api/workouts", (req, res) => {
        db.create({})
            .then(workout => {
                res.json(workout);
            })
            .catch(err => {
                res.json(err);
            });
    })

    // app.put("/api/workouts/:id", (req, res) => {
    //     db.findByIdAndUpdate(id, function (err, db) {})
    //         .then
    // })
}