// 모듈 import
const express = require('express');
// const router = require('express');
const morgan = require('morgan');
const pug = require('pug');
const path = require('path');
const dotenv = require('dotenv');
const { sequelize } = require('./models');

dotenv.config();

// 👩‍💻 라우터 모듈 import
const indexRouter = require('./routes/index');
const boardRouter = require('./routes/board');

// 미들웨어 설정
const app = express();
const port = 3000;
app.set('port', port);

sequelize.sync({ force: false})
    .then(() => {
        console.log('데이터베이스 연결 성공');
    })
    .catch((err) => {
        console.log(err);
    });

// 템플릿 설정
app.set('view engine', 'pug')

app.use(express.json());
app.use(express.urlencoded({ extended: false })); 
// 👩‍💻 라우터 설정
app.use('/', indexRouter);
app.use('/board', boardRouter);

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));

// 위의 매핑되지 않은 나머지 요청
app.use((req, res, next) => {
    const error = new Error(`${req.method} ${req.url} 라우터가 없습니다.`);
    error.status = 404;
    next(error);
  });

// 에러 핸들러
app.use((err, req, res, next) => {
    res.locals.message = err.message;
    res.locals.error = process.env.NODE_ENV !== 'production' ? err : {};
    res.status(err.status || 500);
    res.render('error');
  });


// 포트 설정 및 요청 대기
// app.get('port') 대신 위에 선언 한 port 변수 사용해도 됨
app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 대기 중');
});