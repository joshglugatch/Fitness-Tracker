const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema(
  {
    day: {
      type: Date,
      default: Date.now
    },
    exercises: [
      {
        type: {
          type: String,
          trim: true,
          required: "Choose an exercise type"
        },
        name: {
          type: String,
          trim: true,
          required: "Choose an exercise name"
        },
        duration: {
          type: Number,
          required: "Choose an exercise duration in minutes"
        },
        weight: {
          type: Number
        },
        reps: {
          type: Number
        },
        sets: {
          type: Number
        },
        distance: {
          type: Number
        }
      }
    ]
  },
  
);



const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;