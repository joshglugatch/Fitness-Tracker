var db = require("../models");

module.exports = function(app) {
    //get all workouts
    app.get("/api/workouts", function (req, res) {
            db.Workout.find({})
                .then(function (workout) {
                    res.json(workout);
                })
                .catch(err => {
                    res.json(err);
                });
        });
    
    //create new workout
    app.post("/api/workouts", async function (req, res) {
            try {
                const response = await db.Workout.create({ type: "workout" });
                res.json(response);
            }
            catch (err) {
                console.log("error occurred creating a workout: ", err);
            }
        })

    // update workout with more exercises
    app.put("/api/workouts/:id", function (req, res) {
            const id = req.params.id;
            var saved = [];

            db.Workout.find({ _id: id })
                .then(function (result) {
                        // console.log(result)
                        saved = result[0].exercises;
                        res.json(result[0].exercises);
                        //grab all saved content and add new body
                        var all = [...saved, req.body];
                        console.log(all);
                        addExercise(all);
                    })
                .catch(function (err) {
                        res.json(err);
                    });

            function addExercise(exercises) {
                db.Workout.findByIdAndUpdate(id, { exercises: exercises }, function (err, res) {
                    if (err) {
                        console.log(err);
                    }

                });
            }

        })

    app.get("/api/workouts/range", function (req, res) {
            db.Workout.find({})
                .then(function (workout) {
                    res.json(workout);
                })
                .catch(function (err) {
                        res.json(err);
                    });
        }); 
};