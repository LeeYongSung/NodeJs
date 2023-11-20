const fs = require('fs');

fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  console.log('File content:', data);
});


// const fs = require('fs');
// 👩🏻‍💻파일쓰기
const contentToWrite = 'Hello, Node.js!';

fs.writeFile('newFile.txt', contentToWrite, 'utf8', (err) => {
  if (err) {
    console.error('Error writing file:', err);
    return;
  }
  console.log('File has been written.');
});

// 파일 삭제
fs.unlink('fileToDelete.txt', (err) => {
  if (err) {
    console.error('Error deleting file:', err);
    return;
  }
  console.log('File has been deleted.');
});


// 디렉토리 생성
fs.mkdir('newDirectory', (err) => {
  if (err) {
    console.error('Error creating directory:', err);
    return;
  }
  console.log('Directory has been created.');
});


// 디렉토리 읽기
fs.readdir('./', (err, files) => {
  if (err) {
    console.error('Error reading directory:', err);
    return;
  }
  console.log('Files in the directory:', files);
});


// 파일 이동 또는 이름 변경
fs.rename('oldName.txt', 'newName.txt', (err) => {
  if (err) {
    console.error('Error renaming file:', err);
    return;
  }
  console.log('File has been renamed.');
});