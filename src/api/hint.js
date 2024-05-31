import {quizRepository} from "./quiz.js";

export default {
    home: async (req, res) => {
        let {id, num} = req.query;
        let {hintList} = quizRepository.get(id)
        res.send({
            "hint": hintList[num - 1]
        })
    },
}
