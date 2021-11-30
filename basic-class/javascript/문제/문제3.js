let sample=[10, 20, 30, 5, 6, 3, 100, 110, 90, 88];
let temp = sample[0];
//max구하기
// for(let i=0; i<sample.length; i++){
//     if(temp <sample[i]){
//         temp=sample[i];
//     }
// }
// console.log(temp);

//min 구하기
for(let i=0; i<sample.length; i++){
    if(temp >sample[i]){
        temp=sample[i];
    }
}
console.log(temp);
