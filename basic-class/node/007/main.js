// 방법1
// const http = require('http');
// const server = http.createServer(function(req, res){
//     console.log('server가 구동중입니다.');
//     console.log(req.headers);
//     console.log(req.method);
//     console.log(req.url);
//     res.write('hello world');
//     res.end();
// });

// 방법2
// server.listen(8080);
// const http = require('http');
// const server = http.createServer(function(req, res){
//     console.log('server가 구동중입니다.');
//     console.log(req.headers);
//     console.log(req.method);
//     console.log(req.url);
//     res.write(`
//     <h1>hello world</h1>
//     <p>hello world</p>
//     `);
//     res.end();
// });

// server.listen(8080);


// 방법3
const http = require('http'); //모듈을 가져옴. 모듈의 종류는? 3개 (3개: 직접만들기, 내부, 외부 -> http는 내부.)
const server = http.createServer(function(req, res){
    console.log('server가 구동중입니다.');
    console.log(req);
    // console.log(req.headers);
    console.log(req.method);
    console.log(req.url);
    // get과 post 둘 다 테스트
    // post에 관련된 내용은 아래 공식문서 링크 참고
    // https://nodejs.org/ko/docs/guides/anatomy-of-an-http-transaction/
    // write 여러줄에 end 마지막 한 줄 가능합니다.
    res.write(`
    <!DOCTYPE html>
    <html>
    <head>
        <title>test</title>
    </head>
    <body>
        <form action="/" method="post">
            id : <input type="text" name='id_value'><br>
            pw : <input type="password" name='pw_value'><br>
            <input type="submit" value="login">
        </form>
    </body>
    </html>
    `);
    res.end();
});

server.listen(8080);