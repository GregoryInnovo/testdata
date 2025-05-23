const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Habilitar CORS para cualquier origen
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Middleware para parsear JSON
app.use(express.json());

// Ruta de health check
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'ok',
    message: 'Server is running correctly'
  });
});

// Ruta principal
app.get('/', (req, res) => {
  res.status(200).json({
    message: 'API is working correctly',
    version: '1.0.0'
  });
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 