import express from 'express';
import quiz from "./api/quiz.js";

const router = express.Router();

router.get('/quiz', quiz.home);
// router.get('/param/:param', home.param);
// router.post('/post', home.post);

export default router;