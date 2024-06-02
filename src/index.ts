import express from 'express';
import dotenv from 'dotenv';
import connectDB from './connections/database';

dotenv.config();
		
const app = express();
const port = process.env.PORT || 8000;

app.listen(port, () => {
 console.log(`Server is running on port ${port}`);
});

connectDB();