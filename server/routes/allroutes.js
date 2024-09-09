const express = require("express");
const {
  getPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
  publishPost,
} = require("../controllers/postController");

const {
  getPostAnalytics,
  getAllAnalytics,
} = require("../controllers/analyticsController");

const { getPostsByPlatform } = require("../controllers/platformController");

const {
  createSchedule,
  getSchedules,
  getScheduleById,
  updateSchedule,
  deleteSchedule,
} = require("../controllers/scheduleController");

const {
  registerUser,
  loginUser,
  getUserProfile,
  requestPasswordReset,
  resetPassword,
  verifyEmail,
} = require("../controllers/userController");

const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

// Post Routes
router.get("/posts", getPosts);
router.get("/posts/:id", getPostById);
router.post("/posts", createPost);
router.patch("/posts/:id", updatePost);
router.delete("/posts/:id", deletePost);
router.post("/posts/:id/publish", publishPost);

// Analytics Routes
router.get("/posts/:id/analytics", getPostAnalytics);
router.get("/analytics/all", getAllAnalytics);

// Platform Routes
router.get("/platform/:platformName", getPostsByPlatform);

// Schedule Routes
router.post("/schedules", createSchedule);
router.get("/schedules", getSchedules);
router.get("/schedules/:id", getScheduleById);
router.patch("/schedules/:id", updateSchedule);
router.delete("/schedules/:id", deleteSchedule);

// User Routes
router.post("/users/register", registerUser);
router.post("/users/login", loginUser);
router.get("/users/profile", protect, getUserProfile);
router.post('/requestPasswordReset', requestPasswordReset);
router.post('/resetPassword', resetPassword);
router.get("/verify-email/:token", verifyEmail);

module.exports = router;
