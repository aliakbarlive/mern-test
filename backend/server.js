const express = require('express');
const connectDB = require('./config/db');
require('dotenv').config();
const authRoutes = require('./routes/auth.route')
const app = express();
const PORT = process.env.PORT
connectDB();

app.use(express.json());
app.use('/api/auth', authRoutes);

app.listen(PORT, () => {
    console.log('Server is running on port ' + PORT);
});
