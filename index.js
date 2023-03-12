import express from 'express';
import mongoose from 'mongoose';
import router from './router.js';

const PORT = process.env.PORT || 5000;
const BD_URL = 'mongodb+srv://user:user@cluster0.kpncn2z.mongodb.net/?retryWrites=true&w=majority';
const app = express();

app.use(express.json());
app.use(express.static('static'));
app.use('/api', router);

async function startApp() {
  try {
    await mongoose.connect(BD_URL, { useNewUrlParser: true, useUnifiedTopology: true });
    app.listen(PORT, console.log('server started on port ' + PORT));
  } catch (error) {
    console.log(error);
  }
}

startApp();