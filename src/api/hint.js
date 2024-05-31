const quiz_repository = new Map();

export default {
    home: (req, res) => {
        let requestId = req.params.id;
        res.send({
            "message": `${requestId} 이 사람은 먹어봤음?`,
            "answer": "네"
        })
    },
}
