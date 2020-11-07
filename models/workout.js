const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  
    createdAt: {
      type: Date,
      default: Date.now
    },
    exercises:{
      type: Array,
      default: []
    } 
  
});



const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;