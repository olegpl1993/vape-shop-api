import express from 'express';
import mongoose from 'mongoose';
import router from './router.js';
import cors from 'cors';

const PORT = process.env.PORT || 5000;
const BD_URL = 'mongodb+srv://user:user@cluster0.kpncn2z.mongodb.net/?retryWrites=true&w=majority';
const app = express();

app.use(cors()); // подключение корс заголовков
app.use(express.json()); // позволяет Exprees преобразовывать JSON формат
app.use(express.static('static')); // путь к папке со статическим содержимым (картинки и ТД)
app.use('/api', router); // подключение роутера

async function startApp() {
  try {
    await mongoose.connect(BD_URL, { useNewUrlParser: true, useUnifiedTopology: true });
    app.listen(PORT, console.log('server started on port ' + PORT));
  } catch (error) {
    console.log(error);
  }
}

startApp();