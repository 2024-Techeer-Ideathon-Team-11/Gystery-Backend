import {randomCodeGenerator} from "../utils/hash.js";
import {답변응답, 정답응답, 퀴즈생성} from "../chatgpt/chatgpt.js";

export const quizRepository = new Map();

export default {
    home: async (req, res) => {
        let randomId = randomCodeGenerator();

        // 문제 받아옴
        let {quiz, hintList} = await 퀴즈생성();

        quizRepository.set(randomId, {quiz, hintList});

        console.log(quizRepository);

        res.send({
            "id": randomId,
            quiz
        })
    },

    question: async (req, res) => {
        let {id, question} = req.body;
        let {quiz} = quizRepository.get(id);

        let answer = await 답변응답(quiz, question);
        res.send({
            answer
        })
    },

    answer: async (req, res) => {
        let {id, answer} = req.body;
        let {quiz} = quizRepository.get(id);
        let response = await 정답응답(quiz, answer);

        let isCorrect = response.startsWith("예");

        res.send({
            isCorrect,
            answer: response,
        })
    }


    // param: (req, res) => {
    //     const param = req.params.param;
    //     res.send(param);
    // },
    //
    // post: (req, res) => {
    //     const body = req.body;
    //     res.send(body);
    // },
}
