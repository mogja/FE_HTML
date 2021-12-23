const http = require('http');
const fs = require('fs');
const querystring = require('querystring');

const server = http.createServer(function(req, res){ //서버 객체 생성
    console.log('server가 구동중입니다.');
    // get과 post 둘 다 테스트
    if(req.method == 'GET') {
        fs.readFile('./test.html', 'utf8', (err, data) => {
            console.log(err);
            //writeHead대신 setHeader를 사용하여 type을 보낼 수 있음
            res.writeHead(200, {'Content-Type':'text/html'}); //해더 정보 내보내기
            res.write(data); //콘텐츠 내보내기
            res.end(); // 콘텐츠 출력 완료 응답 종료
        }) 
    } else if(req.method =='POST') {
        req.on('data', function(chunk) { 
            console.log(chunk.toString()); 
            let data = querystring.parse(chunk.toString()); 
            console.log(data);
            res.writeHead(200, {'Content-Type':'text/html'});
            res.write(`id : ${data.id_value}, pw : ${data.pw_value}`);
            res.end(); 
        }); 
    }
});

server.listen(8080); //대기 시작