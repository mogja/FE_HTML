let text = 'javascript';
//1. 리스트 2개씩 나누기
//i<text.length -1 방식은 학부생들이 쓰는 방식
// for(let i=0; (i<text.length -1); i++){
//     console.log(text[i],text[i+1]);
// }

for(let i=1; (i<text.length); i++){
    console.log(text[i-1],text[i]);
}
