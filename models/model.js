const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },

    exercises: [{
        type: {
            type: String,
            trim: true,
            required: "Choose cardio or resistance"
        },
        name: {
            type: String,
            trim: true,
            required: "Enter name of exercise"
        },
        duration: {
            type: Number,
            trim: true,
            required: "Duration of exercise"
        },
        weight: {
            type: Number,
            trim: true,
            required: "Weight used for exercise"
        },
        reps: {
            type: Number,
            trim: true,
            required: "Enter repitition of the exercise"
        },
        sets: {
            type: Number,
            trim: true,
            required: "Enter amount of sets"
        },
    }]
})

module.exports = exerciseSchema;