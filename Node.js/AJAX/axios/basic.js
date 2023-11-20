// axios 라이브러리 가져오기
// npm install axios
const axios = require('axios');
// import axios from 'axios'

// GET 요청 보내기
axios.get('https://httpbin.org/get')
  .then(response => {
    // 성공적인 응답 처리
    console.log(response.data);
  })
  .catch(error => {
    // 오류 처리
    console.error('Request failed:', error);
  });