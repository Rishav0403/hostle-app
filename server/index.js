import {config} from 'dotenv';
config();
import express from "express";
import cors from 'cors';
const app = express();
import notFoundMiddleware from './middleware/not-found.js';
import errorHandlerMiddleware from './middleware/error-handler.js';

// Db
import connectDB from './db/conn.js';

// middleware
app.use(express.json());
app.use(cors());

// router
import router from './route/auth.js';
// import mealRouter from './route/meal.js'

// routes
app.use('/api/v1', router);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

// port
const port = process.env.PORT || 5000;


const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
  