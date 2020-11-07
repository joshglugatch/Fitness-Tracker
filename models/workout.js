const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema(
  {
    day: {
      type: Date,
      default: Date.now()
    },
    exercises:{
      type: Array,
      default: []
    }
  },
  {
    toJSON: {
      virtuals: true
    }
  } 
);

workoutSchema.virtual("totalDuration").get(function() {
  return this.exercises.reduce(function (total, exercise) {
      return total + exercise.duration;
    }, 0);
});

// workoutSchema.methods.addTotal = function() {
//   total = 0;
//   this.exercises.forEach(exercise => {
//     total += exercise[this.exercises.length-1].duration
//   }); 
//   this.totalDuration = total
//   return this.totalDuration;
// };

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;