const Schedule = require('../models/scheduleModel');
const Post = require('../models/postModel');

// Create a new schedule
exports.createSchedule = async (req, res) => {
    try {
        const { postId, scheduledTime, platform } = req.body;

        const post = await Post.findById(postId);
        if (!post) {
            return res.status(404).json({ error: 'Post not found' });
        }

        const schedule = new Schedule({
            post: postId,
            scheduledTime,
            platform,
        });

        await schedule.save();
        res.status(201).json(schedule);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create schedule' });
    }
};

// Get all schedules
exports.getSchedules = async (req, res) => {
    try {
        const schedules = await Schedule.find().populate('post');
        res.status(200).json(schedules);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve schedules' });
    }
};

// Get a schedule by ID
exports.getScheduleById = async (req, res) => {
    try {
        const schedule = await Schedule.findById(req.params.id).populate('post');
        if (!schedule) {
            return res.status(404).json({ error: 'Schedule not found' });
        }
        res.status(200).json(schedule);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve schedule' });
    }
};

// Update a schedule
exports.updateSchedule = async (req, res) => {
    try {
        const { scheduledTime, platform, status } = req.body;
        const schedule = await Schedule.findByIdAndUpdate(
            req.params.id,
            { scheduledTime, platform, status },
            { new: true }
        );
        if (!schedule) {
            return res.status(404).json({ error: 'Schedule not found' });
        }
        res.status(200).json(schedule);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update schedule' });
    }
};

// Delete a schedule
exports.deleteSchedule = async (req, res) => {
    try {
        const schedule = await Schedule.findByIdAndDelete(req.params.id);
        if (!schedule) {
            return res.status(404).json({ error: 'Schedule not found' });
        }
        res.status(200).json({ message: 'Schedule deleted' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete schedule' });
    }
};
