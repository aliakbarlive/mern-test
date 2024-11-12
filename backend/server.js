const express = require('express');
const connectDB = require('./config/db');
require('dotenv').config();
const authRoutes = require('./routes/auth.route')
const carRoutes= require('./routes/car.routes')
const app = express();
const PORT = process.env.PORT
connectDB();

app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/car',carRoutes)

app.listen(PORT, () => {
    console.log('Server is running on port ' + PORT);
});
