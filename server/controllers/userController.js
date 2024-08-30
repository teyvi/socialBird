const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");


exports.registerUser = async (req, res) => {
  try {
      const { firstname, lastname, email, password, confirmPassword } = req.body;

      // Check if passwords match
      if (password !== confirmPassword) {
          return res.status(400).json({ error: 'Passwords do not match' });
      }

      // Check if the user already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
          return res.status(400).json({ error: 'User already exists' });
      }

      // Create and save the new user
      const user = new User({ firstname, lastname, email, password });
      await user.save();

      // Generate email verification token
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

      // Send verification email
      const transporter = nodemailer.createTransport({
        service: "gmail",
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // Use `true` for port 465, `false` for all other ports
        auth: {
          user:process.env.EMAIL_USER, //sender email
          pass: process.env.EMAIL_PASS //sender password
        },
      });

      const mailOptions = {
          from: process.env.EMAIL_USER,
          to: email,
          subject: 'Email Verification',
          text: `Please verify your email by clicking the following link: 
          ${process.env.CLIENT_URL}/verify-email?token=${token}`,
      };

      await transporter.sendMail(mailOptions);

      res.status(201).json({ message: 'Registration successful, please verify your email.' });
  } catch (error) {
      res.status(500).json({ error: 'Failed to register user' });
  }
};

exports.verifyEmail = async (req, res) => {
  try {
      const token = req.query.token;
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      
      const user = await User.findById(decoded.id);
      if (!user) {
          return res.status(400).json({ error: 'Invalid token or user not found' });
      }

      user.isVerified = true;
      await user.save();

      res.status(200).json({ message: 'Email verified successfully' });
  } catch (error) {
      res.status(500).json({ error: 'Failed to verify email' });
  }
};

// Login a user
exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    // Compare the provided password with the stored hashed password
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    // Create a token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    // Send response
    res
      .status(200)
      .json({
        token,
        user: { id: user._id, name: user.name, email: user.email },
      });
  } catch (error) {
    res.status(500).json({ error: "Failed to login user" });
  }
};

// Get user profile
exports.getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve user profile" });
  }
};


// // Request password reset
// exports.requestPasswordReset = async (req, res) => {
//   try {
//     const { email } = req.body;
//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(400).json({ error: "No user found with that email" });
//     }

//     // Generate a reset token
//     const resetToken = crypto.randomBytes(20).toString("hex");
//     user.resetPasswordToken = resetToken;
//     user.resetPasswordExpires = Date.now() + 3600000; // 1 hour
//     await user.save();

//     // Send the token to the user via email
//     const transporter = nodemailer.createTransport({
//       host: "smtp-relay.brevo.com",
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS,
//       },
//     });

//     const mailOptions = {
//       to: user.email,
//       from: "no-reply@socialbird.com",
//       subject: "Password Reset",
//       text: `You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n
//                    Please click on the following link, or paste this into your browser to complete the process:\n\n
//                    http://${req.headers.host}/reset-password/${resetToken}\n\n
//                    If you did not request this, please ignore this email and your password will remain unchanged.\n`,
//     };

//     await transporter.sendMail(mailOptions);

//     res.status(200).json({ message: "Password reset token sent to email" });
//   } catch (error) {
//     res.status(500).json({ error: "Failed to request password reset" });
//   }
// };


exports.requestPasswordReset = async (req, res) => {
  try {
      const { email } = req.body;
      const user = await User.findOne({ email });

      if (!user) {
          return res.status(400).json({ error: 'User not found' });
      }

      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

      const transporter = nodemailer.createTransport({
          host: 'smtp.gmail.com',
          auth: {
              user: process.env.EMAIL_USER,
              pass: process.env.EMAIL_PASS,
          },
      });

      const mailOptions = {
          from: process.env.EMAIL_USER,
          to: email,
          subject: 'Password Reset Request',
          text: `You requested a password reset. Click the link to reset your password: 
          ${process.env.CLIENT_URL}/reset-password?token=${token}`,
      };

      await transporter.sendMail(mailOptions);

      res.status(200).json({ message: 'Password reset link sent to your email' });
  } catch (error) {
      res.status(500).json({ error: 'Failed to send password reset email' });
  }
};

//reset password
exports.resetPassword = async (req, res) => {
  try {
      const { token, newPassword, confirmPassword } = req.body;

      if (newPassword !== confirmPassword) {
          return res.status(400).json({ error: 'Passwords do not match' });
      }

      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const user = await User.findById(decoded.id);

      if (!user) {
          return res.status(400).json({ error: 'Invalid token or user not found' });
      }

      user.password = newPassword;
      await user.save();

      res.status(200).json({ message: 'Password reset successfully' });
  } catch (error) {
      res.status(500).json({ error: 'Failed to reset password' });
  }
};

