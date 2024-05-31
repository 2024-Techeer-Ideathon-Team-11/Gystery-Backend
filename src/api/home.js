import { callChatGPT } from '../chatgpt/chatgpt.js';

export default {
  home: (req, res) => {
    res.send('Hello World');
  },

  param: (req, res) => {
    const param = req.params.param;
    res.send(param);
  },

  post: (req, res) => {
    const body = req.body;
    console.log(1111);
    res.send(body);
  },

  test: async (req, res) => {
    const prompt = req.body.prompt;
    const response = await callChatGPT(prompt);

    if (response) {
      res.json({ response: response });
    } else {
      res.status(500).json({ error: 'Failed to get response from ChatGPT API' });
    }
  },
};
