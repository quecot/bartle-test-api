# bartle-test-api

## Current endpoints:

**GET '/':** Hello, world!

**POST '/classify-first-question':** Classifies answers to the question "HOW WOULD YOU DESCRIBE YOURSELF USING A FEW WORDS?" in Bartle's four categories.<br/>
**POST '/classify-second-question':** Classifies answers to the question "HOW DO YOU LIKE TO SPEND YOUR FREE TIME?" in Bartle's four categories.<br/>
**POST '/classify-third-question':** Classifies answers to the question "WHAT SHOULD HAPPEN FOR YOU TO BE HAPPY?" in Bartle's four categories.<br/>
**POST '/classify-fourth-question':** Classifies answers to the question "WHAT ARE YOUR GOALS IN LIFE?" in Bartle's four categories.<br/>

_\*IMPORTANT:_ POST endpoints accept bodies with a JSON like {"answer":"colonizing mars"}

Also, add your COHERE_API_KEY key in .env (get it from [https://midu.link/ia](https://midu.link/ia))
