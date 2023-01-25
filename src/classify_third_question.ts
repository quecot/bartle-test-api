// The second question is: "WHAT SHOULD HAPPEN FOR YOU TO BE HAPPY?"

import cohere from 'cohere-ai';
import * as dotenv from 'dotenv';

dotenv.config();

const classifyThirdQuestion = async (answer: string): Promise<string> => {
  cohere.init(process.env.COHERE_API_KEY);

  const response = await cohere.classify({
    model: 'large',
    inputs: [answer],
    examples: [
      { text: 'reaching goals', label: 'Achiever' },
      { text: 'achieving success', label: 'Achiever' },
      { text: 'winning', label: 'Achiever' },
      { text: 'making progress', label: 'Achiever' },
      { text: 'overcoming challenges', label: 'Achiever' },
      { text: 'gaining recognition', label: 'Achiever' },
      { text: 'achieving status', label: 'Achiever' },
      { text: 'gaining power', label: 'Achiever' },
      { text: 'accumulating wealth', label: 'Achiever' },
      { text: 'being productive', label: 'Achiever' },
      { text: 'discovering new things', label: 'Explorer' },
      { text: 'experiencing new places', label: 'Explorer' },
      { text: 'learning new skills', label: 'Explorer' },
      { text: 'having new adventures', label: 'Explorer' },
      { text: "expanding one's horizons", label: 'Explorer' },
      { text: 'going on a journey', label: 'Explorer' },
      { text: 'exploring the unknown', label: 'Explorer' },
      { text: 'solving mysteries', label: 'Explorer' },
      { text: 'experiencing different cultures', label: 'Explorer' },
      { text: 'having autonomy over their own experience', label: 'Explorer' },
      { text: 'having strong relationships', label: 'Socializer' },
      { text: 'being part of a community', label: 'Socializer' },
      { text: 'connecting with others', label: 'Socializer' },
      { text: 'helping others', label: 'Socializer' },
      { text: 'being appreciated', label: 'Socializer' },
      { text: 'being loved', label: 'Socializer' },
      { text: 'being accepted', label: 'Socializer' },
      { text: 'being valued', label: 'Socializer' },
      { text: 'receiving support', label: 'Socializer' },
      { text: 'feeling a sense of belonging', label: 'Socializer' },
      { text: 'winning', label: 'Killer' },
      { text: 'dominating', label: 'Killer' },
      { text: 'being in control', label: 'Killer' },
      { text: 'having power', label: 'Killer' },
      { text: 'defeating enemies', label: 'Killer' },
      { text: 'being feared', label: 'Killer' },
      { text: 'having respect', label: 'Killer' },
      { text: 'having authority', label: 'Killer' },
      { text: 'having influence', label: 'Killer' },
      { text: 'having impact', label: 'Killer' },
    ],
  });

  const classifications = JSON.stringify(response.body.classifications[0].prediction);
  return classifications;
};

export default classifyThirdQuestion;
