import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';

import classifyFirstQuestion from '@src/classify_first_question.js';
import classifyFourthQuestion from '@src/classify_fourth_question.js';
import classifySecondQuestion from '@src/classify_second_question.js';
import classifyThirdQuestion from '@src/classify_third_question.js';

import Vote from '@src/models/Vote.js';
import connectDb from '@utils/connect_db.js';

const app = express();
connectDb();

app.use(bodyParser.json({ limit: '2mb' }));
app.use(bodyParser.urlencoded({ limit: '2mb', extended: true }));
app.use(express.json());
app.use(cors());

const answerDictionary = new Map<string, number>();
answerDictionary.set('Socializer', 1);
answerDictionary.set('Explorer', 2);
answerDictionary.set('Achiever', 3);
answerDictionary.set('Killer', 4);

// Endpoints
app.get('/', (request, response) => {
  response.status(200).send('<h1>Hello, Express!</h1>');
});

app.get('/votes', async (request, response) => {
  const votes = await Vote.find({});

  response.status(200).json(votes);
});

app.get('/votes/:id', async (request, response) => {
  const { id } = request.params;
  const [startLevel, startDot] = id.split('.');

  const votes = await Vote.find({ startLevel, startDot });

  response.status(200).json(votes);
});

app.get('/global-votes', async (request, response) => {
  const votes = await Vote.find({ });
  const voteCount = [0, 0, 0, 0];

  votes.forEach((vote) => {
    voteCount[vote.answer - 1] += 1;
  });

  const totalVotes = voteCount.reduce((partialSum, a) => partialSum + a, 0);
  const percentages = voteCount.map((vote) => ((100 * vote) / totalVotes).toFixed(2));

  response.status(200).json(percentages);
});

app.post('/classify-question-1/:id', async (request, response) => {
  const { id } = request.params;
  const startDot = parseInt(id, 10);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
  const classification = await classifyFirstQuestion(request.body.answer);
  const answer = answerDictionary.get(classification.substring(1, classification.length - 1));

  let vote;
  try {
    vote = await Vote.findOne({ startLevel: 1, startDot, answer });
    if (!vote) { throw Error(); }
    vote = await Vote.findOneAndUpdate({ startLevel: 1, startDot, answer }, { $inc: { count: 1 } }, { new: true });
  } catch {
    vote = await Vote.create({
      startLevel: 1, startDot, answer, count: 1,
    });
  }

  response.status(200).send(vote);
});

app.post('/classify-question-2/:id', async (request, response) => {
  const { id } = request.params;
  const startDot = parseInt(id, 10);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
  const classification = await classifySecondQuestion(request.body.answer);
  const answer = answerDictionary.get(classification.substring(1, classification.length - 1));

  let vote;
  try {
    vote = await Vote.findOne({ startLevel: 2, startDot, answer });
    if (!vote) { throw Error(); }
    vote = await Vote.findOneAndUpdate({ startLevel: 2, startDot, answer }, { $inc: { count: 1 } }, { new: true });
  } catch {
    vote = await Vote.create({
      startLevel: 2, startDot, answer, count: 1,
    });
  }

  response.status(200).send(vote);
});

app.post('/classify-question-3/:id', async (request, response) => {
  const { id } = request.params;
  const startDot = parseInt(id, 10);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
  const classification = await classifyThirdQuestion(request.body.answer);
  const answer = answerDictionary.get(classification.substring(1, classification.length - 1));

  let vote;
  try {
    vote = await Vote.findOne({ startLevel: 3, startDot, answer });
    if (!vote) { throw Error(); }
    vote = await Vote.findOneAndUpdate({ startLevel: 3, startDot, answer }, { $inc: { count: 1 } }, { new: true });
  } catch {
    vote = await Vote.create({
      startLevel: 3, startDot, answer, count: 1,
    });
  }

  response.status(200).send(vote);
});

app.post('/classify-question-4/:id', async (request, response) => {
  const { id } = request.params;
  const startDot = parseInt(id, 10);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
  const classification = await classifyFourthQuestion(request.body.answer);
  const answer = answerDictionary.get(classification.substring(1, classification.length - 1));

  let vote;
  try {
    vote = await Vote.findOne({ startLevel: 4, startDot, answer });
    if (!vote) { throw Error(); }
    vote = await Vote.findOneAndUpdate({ startLevel: 4, startDot, answer }, { $inc: { count: 1 } }, { new: true });
  } catch {
    vote = await Vote.create({
      startLevel: 4, startDot, answer, count: 1,
    });
  }

  response.status(200).send(vote);
});

// app.post('/clear-votes', async (request, response) => {
//   await Vote.deleteMany({});

//   response.sendStatus(200);
// });

// Run server
const PORT = process.env.PORT || 3004;
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running on port ${PORT}\nhttp://localhost:${PORT}`);
});
