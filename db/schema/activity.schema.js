const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Types = mongoose.Schema.Types;

const ActivitySchema = new Schema({
    userId: {
        type: Types.ObjectId,
    },
    typeActivity: {
        exerciseType: String,
        subExerciseType: String,

    },
    evaluator: {
        count: Number
    },
}, {
    timestamps: true,
});

module.exports = ActivitySchema;