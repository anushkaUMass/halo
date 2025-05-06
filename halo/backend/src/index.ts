import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

app.post('/sos', (req: Request, res: Response) => {
  const { userId, location, timestamp } = req.body;

  if (!userId || !location || !timestamp) {
    res.status(400).json({ error: 'Missing required fields.' });
  }

  console.log('🚨 SOS received:', { userId, location, timestamp });
  res.status(200).json({ message: 'SOS alert received!' });
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
