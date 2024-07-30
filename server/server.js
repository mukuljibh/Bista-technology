import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import messageRoutes from './api/routes/messageRoutes.js';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5500;
app.use(cors(
    {
        origin: '*',
        credentials: true,
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS','PATCH'],
    }
));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(morgan('tiny'));

app.get('/', (req, res) => {
  res.send('Welcome to the Server');
});

app.use('/api/v1', messageRoutes);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});