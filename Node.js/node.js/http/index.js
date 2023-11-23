const http = require('http');

http.createServer((req, res) => {
    // writeHead(상태코드, 헤더정보)
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });

    // setHeader헤더 정보 등록
    // res.setHeader('Content-Type', 'text/html; charset=utf-8');

    // write('데이터') - 응답 본문 등록
    res.write('<h1 style="color: red; font-weight: bold;">Hello Node!</h1>');

    // end('데이터') - 응답 전송
    res.end('<p>Hello Server!</p>');
})
// listen(포트번호, 콜백함수) - 요청 대기
  .listen(8080, () => { // 서버 연결
    console.log('8080번 포트에서 서버 대기 중입니다!');
  });