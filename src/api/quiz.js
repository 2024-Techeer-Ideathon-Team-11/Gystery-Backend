import {randomCodeGenerator} from "../utils/hash.js";

const quiz_repository = new Map();

export default {
    home: (req, res) => {
        let randomId = randomCodeGenerator();
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
