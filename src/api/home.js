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
        res.send(body);
    },
}
