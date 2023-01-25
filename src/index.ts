import express from 'express';

const app = express();

// Endpoints
app.get('/', (request, response) => {
  response.status(200).send('<h1>Hello, Express!</h1>');
});


// Run server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}\nhttp://localhost:${PORT}`);
});
