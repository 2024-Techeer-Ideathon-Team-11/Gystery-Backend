import {quizRepository} from "./quiz.js";

export default {
    home: async (req, res) => {
        let {id, num} = req.query;
        if(quizRepository.has(id)){
            let {hintList} = quizRepository.get(id)
            res.send({
                "hint": hintList[num - 1]
            })
        }

        res.send({
            "hint": "힌트가 없습니다."
        })
    },
}
