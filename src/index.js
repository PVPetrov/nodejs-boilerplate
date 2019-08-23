import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import useLogger from './middleware/Logger';
import router from './router';
import configs from '../configs';

useLogger();

const port = configs.port || 3000;

const app = express();

app.use(cors());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', router);

app.listen(port, () => logger.success(`Listening to port ${port}`));

mongoose
  .connect('mongodb://127.0.0.1:27017/pos', { useNewUrlParser: true })
  .then(() => logger.success('MongoDB connected successfully'))
  .catch(err => logger.error(err));

mongoose.connection.on('error', error => logger.error(err));
