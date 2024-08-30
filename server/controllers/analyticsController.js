const Analytics = require('../models/analyticsModel');

exports.getPostAnalytics = async (req, res) => {
    try {
        const analytics = await Analytics.find({ post: req.params.id });
        if (!analytics || analytics.length === 0) {
            return res.status(404).json({ error: 'No analytics found for this post' });
        }
        res.status(200).json(analytics);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve analytics' });
    }
};

exports.getAllAnalytics = async (req, res) => {
    try {
        const analytics = await Analytics.find();
        res.status(200).json(analytics);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve analytics' });
    }
};
