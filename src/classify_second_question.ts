// The second question is: "HOW DO YOU LIKE TO SPEND YOUR FREE TIME?"

import cohere from 'cohere-ai';
import * as dotenv from 'dotenv';

dotenv.config();

const classifySecondQuestion = async (answer: string): Promise<string> => {
  cohere.init(process.env.COHERE_API_KEY);

  const response = await cohere.classify({
    model: 'large',
    inputs: [answer],
    examples: [
      { text: 'pursuing personal and professional goals', label: 'Achiever' },
      { text: 'improving skills', label: 'Achiever' },
      { text: 'working on projects', label: 'Achiever' },
      { text: 'setting and achieving challenging targets', label: 'Achiever' },
      { text: 'competing in sports or games', label: 'Achiever' },
      { text: 'exercising', label: 'Achiever' },
      { text: 'planning and organizing', label: 'Achiever' },
      { text: 'reading about successful people and their stories', label: 'Achiever' },
      { text: 'seeking out new opportunities', label: 'Achiever' },
      { text: 'learning new things', label: 'Achiever' },
      { text: 'traveling', label: 'Explorer' },
      { text: 'exploring new places', label: 'Explorer' },
      { text: 'trying new things', label: 'Explorer' },
      { text: 'having adventures', label: 'Explorer' },
      { text: 'learning new skills', label: 'Explorer' },
      { text: 'experimenting', label: 'Explorer' },
      { text: 'discovering new cultures', label: 'Explorer' },
      { text: 'being outdoors', label: 'Explorer' },
      { text: 'seeking new experiences and activities', label: 'Explorer' },
      { text: 'going on an journey or a quest', label: 'Explorer' },
      { text: 'competing', label: 'Killer' },
      { text: 'playing and winning games', label: 'Killer' },
      { text: 'practicing combat sports', label: 'Killer' },
      { text: 'watching action movies or playing video games', label: 'Killer' },
      { text: 'strategizing', label: 'Killer' },
      { text: 'planning and analyzing', label: 'Killer' },
      { text: 'seeking out opponents to defeat', label: 'Killer' },
      { text: 'training and improving physical strength', label: 'Killer' },
      { text: 'participating in war games or simulations', label: 'Killer' },
      { text: 'watching sports', label: 'Killer' },
      { text: 'training my mind and body to be the best', label: 'Killer' },
      { text: 'spending time with friends and family', label: 'Socializer' },
      { text: 'participating in group activities', label: 'Socializer' },
      { text: 'joining clubs and organizations', label: 'Socializer' },
      { text: 'volunteering', label: 'Socializer' },
      { text: 'hosting or attending social gatherings', label: 'Socializer' },
      { text: 'chatting and connecting with others', label: 'Socializer' },
      { text: 'helping others', label: 'Socializer' },
      { text: 'being part of a community', label: 'Socializer' },
      { text: 'participating in cultural events', label: 'Socializer' },
      { text: 'working on group projects', label: 'Socializer' },
    ],
  });

  const classifications = JSON.stringify(response.body.classifications[0].prediction);
  return classifications;
};

export default classifySecondQuestion;
