import express from 'express';
import quiz from './api/quiz.js';
import hint from './api/hint.js';

const router = express.Router();

router.get('/quiz', quiz.home);
router.get('/hint/:id', hint.home);
// router.get('/param/:param', home.param);
// // router.post('/post', home.post);

// router.post('/test', home.test);

export default router;
