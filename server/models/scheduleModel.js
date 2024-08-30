const mongoose = require('mongoose');

const scheduleSchema = new mongoose.Schema({
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post',
        required: true,
    },
    scheduledTime: {
        type: Date,
        required: true,
    },
    platform: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ['pending', 'posted', 'failed'],
        default: 'pending',
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Schedule', scheduleSchema);
