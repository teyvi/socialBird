const Post = require('../models/postModel');

exports.getPostsByPlatform = async (req, res) => {
    try {
        const posts = await Post.find({ platform: req.params.platformName });
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ error: `Failed to retrieve posts for platform ${req.params.platformName}` });
    }
};
