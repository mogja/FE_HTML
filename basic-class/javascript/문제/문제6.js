//구구단
for (let i = 2; i < 10; i++) {
    for (let j = 1; j < 10; j++) {
      document.write(`${i} X ${j} = ${i*j} <br>`);
    }
  }

  //while문 구구단 안에서 j선언 하는 것이 베스트
  let i=2;
  while(i<10){
      let j=1;
      while(j<10){
            document.write(`${i} X ${j} = ${i*j} <br>`);
            j++;
      }
      i++;
  }

  //5단까지 출력
    let i = 2;
    let j = 1;
    while (i < 10) {
    while (j < 10) {
        console.log(`${i} X ${j} = ${i*j}`);
        if (j == 5){
            break;
        }
        j++;
    }
    i++;
    j = 1;
}

//이거는 틀린 식
let i = 2;
let j = 1;
while (i < 10) {
  if (i == 5){
    break;
  }
  while (j < 10) {
    console.log(`${i} X ${j} = ${i*j}`);
    j++;
  }
  i++;
  j = 1;
}

// outer라는 식별자가 붙은 레이블 for 문
// 현업에서는 객체와 햇갈려서 잘 안쓰는 편
// 쓰지 마세요
// 할꺼면 function으로.
outer: for (var i = 2; i < 10; i++) {
    for (var j = 1; j < 10; j++) {
        // i + j === 3이면 outer라는 식별자가 붙은 레이블 for 문을 탈출한다.
        if (i === 5) break outer;
        console.log(`${i} X ${j} = ${i*j}`);
    }
}

