import {randomCodeGenerator} from "../utils/hash.js";
import {답변응답, 정답응답, 정답해설, 퀴즈생성} from "../chatgpt/chatgpt.js";

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

        let quiz = "이상한 문제";

        if (quizRepository.has(id)) {
            quiz = quizRepository.get(id).quiz;
            let answer = await 답변응답(quiz, question);
            res.send({
                answer
            })
        }

        res.send({
            quiz
        })
    },

    answer: async (req, res) => {
        let {id, answer} = req.body;
        if(quizRepository.has(id)){
            let {quiz} = quizRepository.get(id);
            let response = await 정답응답(quiz, answer);

            let isCorrect;

            if (!(response.startsWith("예") || response.startsWith("아니"))) {
                isCorrect = false;
            } else {
                isCorrect = response.startsWith("예");
            }


            res.send({
                isCorrect,
                answer: response,
            })
        }

        res.send({
            "isCorrect": false,
            "answer": "퀴즈가 없습니다."
        })
    },

    comment: async (req, res) => {
        let {id} = req.body;
        if(quizRepository.has(id)){
            let {quiz} = quizRepository.get(id);

            let response = await 정답해설(quiz);

            res.send({
                "comment": response,
            })
        }

        res.send({
            "comment": "퀴즈가 없습니다."
        })
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
}
