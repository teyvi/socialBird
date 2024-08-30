const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    content: {
        type: String,
        required: true
    },
    media: [String],  // Array of media URLs or file paths
    scheduledAt: Date, // Date and time when the post is scheduled to be published
    status: {
        type: String,
        enum: ['draft', 'scheduled', 'published'],
        default: 'draft'
    },
    platforms: [String], // Array of platforms where the post will be published
    createdAt: {
        type: Date,
        default: Date.now
    },
    publishedAt: Date  // Date and time when the post was actually published
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
