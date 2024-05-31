import {randomCodeGenerator} from "../utils/hash.js";

const quizRepository = new Map();

export default {
    home: (req, res) => {
        let randomId = randomCodeGenerator();

        // 문제 받아옴
        // let {quiz, answer} = quizRepository.get(randomId);
        let quiz = null;
        let answer = null;

        quizRepository.set(randomId, {quiz, answer});

        res.send({
            "id": randomId
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
