import express from 'express';
import home from "./api/home.js";

const router = express.Router();

router.get('/', home.home);
router.get('/param/:param', home.param);
router.post('/post', home.post);

export default router;