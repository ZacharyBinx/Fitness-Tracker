const ExerciseModel = require("../models/model");


module.exports = function (app) {

    app.get("/api/workouts", (req, res) => {
        ExerciseModel.find({})
            .then(workout => {
                res.json(workout);
            })
            .catch(err => {
                res.json(err);
            });
    })

    app.post("/api/workouts", (req, res) => {
        ExerciseModel.create({})
            .then(workout => {
                res.json(workout);
            })
            .catch(err => {
                res.json(err);
            });
    })

    app.put("/api/workouts/:id", (req, res) => {
        ExerciseModel.findByIdAndUpdate(
            {
                _id: params.id, function (err, exercises) {}
        
             })
            .then(workout => {
               res.json($push(workout)
            })
    })
}