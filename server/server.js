import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import dotenv from 'dotenv';
import cors from 'cors';
import connect from './db/db.js';
import cookieParser from 'cookie-parser';
import messageRoutes from './api/routes/messageRoutes.js';
import employerRoutes from './api/routes/EmployerRoutes.js';
import authRoutes from './api/routes/authRoutes.js';
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
app.use('/api/v1/employer', employerRoutes);
app.use('/api/v1/auth', authRoutes);

connect()
.then(() => {
   try{
     app.listen(PORT, () => {
       console.log(`Server is running on port ${PORT}`);
     });
   }
   catch(err){
     console.log(err);
   }
})
.catch(err => console.log(err));
