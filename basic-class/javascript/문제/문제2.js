// Google 전화 문제.
// 1부터 10,000까지 8이라는 숫자가 총 몇번 나오는가?

// 8이 포함되어 있는 숫자의 갯수를 카운팅 하는 것이 아니라 8이라는 숫자를 모두 카운팅 해야 한다.
// (※ 예를들어 8808은 3, 8888은 4로 카운팅 해야 함)

//1.텍스트로 변환
let text = '' ;
for(let i = 0; i<1001; i++){
    text +=i;
}
console.log(text); 
// 여기서 8의 개수 다 세면 됨


let test='';
let count = 0;
for(let i=0; i<text.length; i++){
    if(text[i]=='8'){
        count+=1;
    }
        
}

console.log(count);

//2.
text.match((/8/g) || []).length;