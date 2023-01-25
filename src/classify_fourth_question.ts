// The second question is: "WHAT ARE YOUR GOALS IN LIFE?"

import cohere from 'cohere-ai';
import * as dotenv from 'dotenv';

dotenv.config();

const classifyFourthQuestion = async (answer: string): Promise<string> => {
  cohere.init(process.env.COHERE_API_KEY);

  const response = await cohere.classify({
    model: 'large',
    inputs: [answer],
    examples: [
      { text: 'reaching the top of their chosen field', label: 'Achiever' },
      { text: 'becoming financially successful', label: 'Achiever' },
      { text: 'gaining recognition and status', label: 'Achiever' },
      { text: 'achieving high levels of power and influence', label: 'Achiever' },
      { text: 'building a legacy', label: 'Achiever' },
      { text: 'making a significant impact in their community', label: 'Achiever' },
      { text: 'achieving personal and professional milestones', label: 'Achiever' },
      { text: 'setting and achieving challenging goals', label: 'Achiever' },
      { text: 'becoming the best in their field', label: 'Achiever' },
      { text: 'continuously improving myself', label: 'Achiever' },
      { text: 'discovering new places, cultures, and experiences', label: 'Explorer' },
      { text: 'learning new skills and acquiring knowledge', label: 'Explorer' },
      { text: 'having new adventures and taking risks', label: 'Explorer' },
      { text: 'facing new challenges', label: 'Explorer' },
      { text: 'pushing personal boundaries', label: 'Explorer' },
      { text: 'seeking out new opportunities', label: 'Explorer' },
      { text: 'finding new passions and interests', label: 'Explorer' },
      { text: 'living a life of variety and change', label: 'Explorer' },
      { text: 'being free to pursue their own interests and passions', label: 'Explorer' },
      { text: "expanding one's understanding of the world", label: 'Explorer' },
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
      { text: 'achieving a sense of dominance and superiority over others', label: 'Killer' },
      { text: 'crushing the competition', label: 'Killer' },
      { text: 'being the top in their field', label: 'Killer' },
      { text: 'achieving a sense of victory and conquest', label: 'Killer' },
      { text: 'building strong relationships', label: 'Socializer' },
      { text: 'being part of a community', label: 'Socializer' },
      { text: 'connecting with others', label: 'Socializer' },
      { text: 'helping others', label: 'Socializer' },
      { text: 'making a positive impact on the lives of others', label: 'Socializer' },
      { text: 'being appreciated, loved, and accepted', label: 'Socializer' },
      { text: 'being valued', label: 'Socializer' },
      { text: 'receiving support', label: 'Socializer' },
      { text: 'feeling a sense of belonging', label: 'Socializer' },
      { text: 'fostering a sense of connection and community', label: 'Socializer' },
      { text: 'developing deep and meaningful relationships', label: 'Socializer' },
    ],
  });

  const classifications = JSON.stringify(response.body.classifications[0].prediction);
  return classifications;
};

export default classifyFourthQuestion;
