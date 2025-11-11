const mongoose = require('mongoose');

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_CNN);
    console.log('✅ Base de datos online');
  } catch (error) {
    console.error('❌ Error al conectar con MongoDB:', error.message);
    throw new Error('Error al iniciar la Base de datos');
  }
};

module.exports = {
  dbConnection,
};