# bartle-test-api

## Current endpoints:

**GET '/':** Hello, world!<br/>
**GET '/votes':** Get all votes<br/>
**GET '/votes/:id':** Get votes from node. For example, `:id = 1.1` (level.nodeNumber)<br/>

**POST '/classify-question-1/:id':** Classifies answers to the question "HOW WOULD YOU DESCRIBE YOURSELF USING A FEW WORDS?" in Bartle's four categories.<br/>
**POST '/classify-question-2/:id':** Classifies answers to the question "HOW DO YOU LIKE TO SPEND YOUR FREE TIME?" in Bartle's four categories.<br/>
**POST '/classify-question-3/:id':** Classifies answers to the question "WHAT SHOULD HAPPEN FOR YOU TO BE HAPPY?" in Bartle's four categories.<br/>
**POST '/classify-question-4/:id':** Classifies answers to the question "WHAT ARE YOUR GOALS IN LIFE?" in Bartle's four categories.<br/>

_\*IMPORTANT:_ POST endpoints accept bodies with a JSON like `{"answer":"colonizing mars"}`, `:id` parameter represents the node number

Also, add your COHERE_API_KEY key in .env (get it from [https://midu.link/ia](https://midu.link/ia))
