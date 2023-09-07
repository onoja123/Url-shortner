import express, { Application, Request, Response, NextFunction } from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import urlRoute from './routes/url.route'; 
import { connectDb } from './db/connect';
import dotenv from 'dotenv';

dotenv.config();

const app: Application = express();
const port = process.env.PORT || 3000;

const server = http.createServer(app);

// Middleware
app.use(bodyParser.json());

// Connect to the database
connectDb();

// Use the URL routes
app.use('/api', urlRoute);

// Error handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err); // Log the error for debugging
  res.status(500).json({ error: 'Internal Server Error' });
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
