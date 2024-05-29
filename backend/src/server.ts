import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import connectDB from './utils/db';
import articleRoutes from './routes/articleRoutes';

const app = express();
app.use(bodyParser.json());
app.use(cors());

const PORT = 3000;

connectDB();

app.use('/api', articleRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
