//문제 1
let array=[10, 20, 30, 10, 20, 30, 40, 10];
let average=0;
let variance=0;
let newArray=[]
for (let j=0; j<array.length; j++){
    average+=array[j];
};
average=average/(array.length);
for (let k=0; k<array.length; k++){
    newArray[k]= (array[k]-average)**2;
};

for (let z=0; z<newArray.length; z++){
    variance+=newArray[z];
}
variance=variance/(newArray.length);
console.log(`평균은 ${average}입니다.`);
console.log(`분산은 ${variance}입니다.`);


// 문제2- 다음 string의 평균 값을 구하세요

let s='5,4,10,2,5';
s= s.split(',');
let sum=0;
for (let i=0; i<s.length; i++){
    sum+=parseInt(s[i],10);
}
console.log(sum);
console.log(sum/(s.length));

//문제3 - 
let array=[11, 22, 33, 111, 2];
let sum=0;
for (let i=0; i<array.length; i++){
    array[i]=array[i].toString();
};
console.log(array);


for (let k=0; k<array.length; k++){
   
    sum+=(parseInt(array[k]/100)  + parseInt((array[k] % 100)/10)+ (array[k]%10));
};
console.log(sum);

//문제3 답안
let a = [11, 22, 33, 111, 2];
let s = [11, 22, 33, 111, 2].join('');
console.log(s);
let sum = 0;
for (var variable in s) {
  console.log(parseInt(s[variable], 10));
  sum += parseInt(s[variable], 10);
}
console.log(sum);