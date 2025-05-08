import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();
const PORT = 5000; 

app.use(cors());
app.use(express.json());

app.post('/report', (req: Request, res: Response) => {
  const { userId, location, type, description, timestamp } = req.body;

  if (!userId || !location || !type || !description || !timestamp) {
    return res.status(400).json({ error: 'Missing required fields.' });
  }

  console.log('📢 Incident reported:', { userId, location, type, description, timestamp });
  res.status(200).json({ message: 'Incident reported successfully!' });
});

app.listen(PORT, () => {
  console.log(`✅ Incident Reporting service running at http://localhost:${PORT}`);
});
