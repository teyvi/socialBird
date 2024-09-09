const express = require('express');
const allRoutes = require ('./routes/allroutes')
const mongoose = require ('mongoose')
const cors = require('cors');


require('dotenv').config()


//create the express app
const app = express();

//middleware
app.use(express.json()) // Parse json bodies
app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })); // Enable Cross-Origin Requests
app.use((req,res,next) =>{
    console.log(req.path, req.method)
    next()
}) // view request paths and method

//route
app.use('/api',allRoutes)


// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Error Handling Middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

// Start Server
app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});
