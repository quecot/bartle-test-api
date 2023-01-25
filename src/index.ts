import bodyParser from 'body-parser';
import express from 'express';
import classifyFirstQuestion from '@src/classify_first_question.js';

const app = express();

app.use(bodyParser.json({ limit: '2mb' }));
app.use(bodyParser.urlencoded({ limit: '2mb', extended: true }));
app.use(express.json());

// Endpoints
app.get('/', (request, response) => {
  response.status(200).send('<h1>Hello, Express!</h1>');
});

app.post('/classify-first-question', async (request, response) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
  const classification = await classifyFirstQuestion(request.body.answer);
  response.status(200).send(classification);
});

// Run server
const PORT = process.env.PORT || 3004;
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running on port ${PORT}\nhttp://localhost:${PORT}`);
});
