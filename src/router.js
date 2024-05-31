import express from 'express';
import quiz from './api/quiz.js';
import hint from './api/hint.js';

const router = express.Router();

router.get('/quiz', quiz.home);
router.post('/question', quiz.question);
router.post('/answer', quiz.answer);
router.post('/comment', quiz.comment);
router.get('/hint', hint.home);
// router.get('/param/:param', home.param);
// // router.post('/post', home.post);

// router.post('/test', home.test);

export default router;
