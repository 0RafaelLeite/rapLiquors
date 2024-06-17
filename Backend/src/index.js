const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const orderRoutes = require('./routes/orderRoutes');
const itemRoutes = require('./routes/itemRoutes'); // Importar o novo roteador

dotenv.config();

const app = express();

app.use(cors({
  origin: 'http://localhost:4200' // Permitir apenas requisições do seu frontend Angular
}));

connectDB();

app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/items', itemRoutes); // Utilizar o novo roteador

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
