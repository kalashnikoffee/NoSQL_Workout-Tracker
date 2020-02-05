const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now()
    },
    exercises: [],
    totalDuration: Number,
});

WorkoutSchema.post('findOneAndUpdate', function(workout) {
    console.log("yooooo hol up");
    

    var tot = 0;
    workout.exercises.forEach(({duration}) => {
        if (!isNaN(duration)) {
            tot += parseInt(duration);
        }
    });

    workout.totalDuration = tot + this._update['$push'].exercises.duration;
    return workout.save();
    
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;