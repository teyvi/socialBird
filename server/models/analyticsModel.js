const mongoose = require('mongoose');

const analyticsSchema = new mongoose.Schema({
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post',
        required: true
    },
    platform: {
        type: String,  // Platform name (e.g., "twitter", "facebook")
        required: true
    },
    likes: {
        type: Number,
        default: 0
    },
    shares: {
        type: Number,
        default: 0
    },
    comments: {
        type: Number,
        default: 0
    },
    reach: {
        type: Number,
        default: 0
    },
    engagementRate: {
        type: Number,
        default: 0
    },
    collectedAt: {
        type: Date,
        default: Date.now
    }
});

const Analytics = mongoose.model('Analytics', analyticsSchema);

module.exports = Analytics;
