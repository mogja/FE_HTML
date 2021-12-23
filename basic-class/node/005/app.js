// 파일이름 : 005_path\app.js

// 공식문서 링크  : https://nodejs.org/dist/latest-v16.x/docs/api/path.html
const path = require('path');

//구분자는 OS마다 다르기 때문에 알아야 한다.
console.log(`구분자 : ${path.sep}`);
console.log(`디렉토리 : ${path.dirname(__filename)}`);
console.log(`파일이름 : ${path.basename(__filename)}`);
console.log(`확장자 : ${path.extname(__filename)}`);

console.log(__filename);
console.log(__dirname);
console.table(path.parse(__filename));
console.table(path.parse(__filename).name);
console.log(path.join(__dirname, 'source')) //이렇게 사용해야 함
console.log(path.join(__dirname +'/node')) // 절대 사용하면 안됨. 에러