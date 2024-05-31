import quizRepository from './quiz';

export default {
  home: (req, res) => {
    const { quizId, hintId } = req.params;

    if (quizRepository.has(quizId)) {
      const quizData = quizRepository.get(quizId);
      let hint;

      switch (hintId) {
        case '1':
          hint = quizData.hint1;
          break;
        case '2':
          hint = quizData.hint2;
          break;
        case '3':
          hint = quizData.hint3;
          break;
        default:
          return res.status(400).send({ message: 'Invalid hint number' });
      }

      res.send({ hint });
    } else {
      res.status(404).send({ message: 'Quiz not found' });
    }
  },
};
