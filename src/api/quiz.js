import { randomCodeGenerator } from '../utils/hash.js';

export const quizRepository = new Map();

export default {
  home: (req, res) => {
    let randomId = randomCodeGenerator();

    // 문제 받아옴
    // let {quiz, answer} = quizRepository.get(randomId);
    let quiz = null;
    let answer = null;
    let hint1 = null;
    let hint2 = null;
    let hint3 = null;

    quizRepository.set(randomId, { quiz, answer, hint1, hint2, hint3 });

    res.send({
      id: randomId,
    });
  },

  // param: (req, res) => {
  //     const param = req.params.param;
  //     res.send(param);
  // },
  //
  // post: (req, res) => {
  //     const body = req.body;
  //     res.send(body);
  // },
};
