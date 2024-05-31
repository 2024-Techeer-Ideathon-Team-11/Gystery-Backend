import express from 'express';
import bodyParser from 'body-parser';
import router from './src/router.js';
import cors from 'cors';
// import env from 'dotenv';

// env.config();

const app = express();

app.use(cors());

// 강제로 500 에러를 발생시키는 라우트 예제
app.get('/error', (req, res, next) => {
    const err = new Error('Something went wrong!');
    err.status = 500;
    next(err);
});

// 에러 핸들링 미들웨어
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(err.status || 500).json({
        message: err.message,
        error: process.env.NODE_ENV === 'development' ? err : {}
    });
});

// 서버 정적 파일 경로 설정
app.use(express.static('public'));

// url encoding의 확장을 할 수 있도록 extended:true라는 option을 설정
app.use(bodyParser.urlencoded({extended: true}));

// request body에 오는 데이터를 json 형식으로 변환
app.use(bodyParser.json());


app.use('/api/v1', router);

app.listen(8000, () => {
    console.log('Example app listening on port 8000!');
});
