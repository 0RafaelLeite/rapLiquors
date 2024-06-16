const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const beverageRoutes = require('./routes/beverageRoutes');
const orderRoutes = require('./routes/orderRoutes');

dotenv.config();
const cors = require('cors');
const app = express();

app.use(cors({
    origin: 'http://localhost:4200' // Permitir apenas requisições do seu frontend Angular
  }));


connectDB();

app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/beverages', beverageRoutes);
app.use('/api/orders', orderRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
