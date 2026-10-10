import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express();

app.use(cors());
app.use(cookieParser());
app.use(express.static("public"));
app.use(express.json({limit: "2mb"}));
app.use(express.urlencoded({ extended: true , limit: "2mb" }));

// Routes
import userRouter from './routes/user.router.js';

// Router declaration
app.use('/api/v1/users', userRouter);

export default app;