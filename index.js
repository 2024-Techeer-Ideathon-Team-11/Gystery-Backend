import express from 'express';
import bodyParser from 'body-parser';
import router from './src/router.js';
// import env from 'dotenv';

// env.config();


const app = express();

// 서버 정적 파일 경로 설정
app.use(express.static('public'));

// url encoding의 확장을 할 수 있도록 extended:true라는 option을 설정
app.use(bodyParser.urlencoded({extended: true}));

// request body에 오는 데이터를 json 형식으로 변환
app.use(bodyParser.json());


app.use('/api/v1', router);

app.listen(8000, () => {
    console.log('Example app listening on port 3000!');
});
