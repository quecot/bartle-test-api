// The first question is: "HOW WOULD YOU DESCRIBE YOURSELF USING A FEW WORDS?"

import cohere from 'cohere-ai';
import * as dotenv from 'dotenv';

dotenv.config();

const classifyFirstQuestion = async (answer: string): Promise<string> => {
  cohere.init(process.env.COHERE_API_KEY);

  const response = await cohere.classify({
    model: 'large',
    inputs: [answer],
    examples: [
      { text: 'driven', label: 'Achiever' },
      { text: 'competitive', label: 'Achiever' },
      { text: 'ambitious', label: 'Achiever' },
      { text: 'successful', label: 'Achiever' },
      { text: 'disciplined', label: 'Achiever' },
      { text: 'hardworking', label: 'Achiever' },
      { text: 'focused', label: 'Achiever' },
      { text: 'motivated', label: 'Achiever' },
      { text: 'goal-oriented', label: 'Achiever' },
      { text: 'organized', label: 'Achiever' },
      { text: 'curious', label: 'Explorer' },
      { text: 'adventurous', label: 'Explorer' },
      { text: 'open-minded,', label: 'Explorer' },
      { text: 'independent', label: 'Explorer' },
      { text: 'innovative', label: 'Explorer' },
      { text: 'experimental', label: 'Explorer' },
      { text: 'fearless', label: 'Explorer' },
      { text: 'knowledgeable', label: 'Explorer' },
      { text: 'resourceful', label: 'Explorer' },
      { text: 'explorative', label: 'Explorer' },
      { text: 'competitive', label: 'Killer' },
      { text: 'ruthless', label: 'Killer' },
      { text: 'aggressive', label: 'Killer' },
      { text: 'decisive', label: 'Killer' },
      { text: 'dominant', label: 'Killer' },
      { text: 'powerful', label: 'Killer' },
      { text: 'assertive', label: 'Killer' },
      { text: 'confrontational', label: 'Killer' },
      { text: 'strategic', label: 'Killer' },
      { text: 'outgoing', label: 'Socializer' },
      { text: 'sociable', label: 'Socializer' },
      { text: 'friendly', label: 'Socializer' },
      { text: 'helpful', label: 'Socializer' },
      { text: 'cooperative', label: 'Socializer' },
      { text: 'communicative', label: 'Socializer' },
      { text: 'empathetic', label: 'Socializer' },
      { text: 'supportive', label: 'Socializer' },
      { text: 'team-oriented', label: 'Socializer' },
      { text: 'charismatic', label: 'Socializer' },
      { text: 'sharing', label: 'Socializer' },
    ],
  });

  const classifications = JSON.stringify(response.body.classifications[0].prediction);
  return classifications;
};

export default classifyFirstQuestion;
