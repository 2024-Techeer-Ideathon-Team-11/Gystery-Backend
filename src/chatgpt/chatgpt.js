import dotenv from 'dotenv';
import { Configuration, OpenAIApi } from 'openai';

export async function callChatGPT(prompt) {
  dotenv.config();

  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });

  try {
    const openai = new OpenAIApi(configuration);

    const response = await openai.createChatCompletion({
      model: 'gpt-4o',
      messages: [{ role: 'user', content: prompt }],
    });
    return response.data.choices[0].message;
  } catch (error) {
    console.error('Error calling ChatGPT API:', error.response.data);
    return null;
  }
}
