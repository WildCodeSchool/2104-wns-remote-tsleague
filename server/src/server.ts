import express from 'express';
import cors from 'cors';

const port = process.env.PORT || 5000;
const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
