//다음 입사문데 2단계
let value = [1, 4, 6, 8, 13, 17, 20, 21, 28];
let temp = value[1] - value[0]
let result = 0

for (let i = 0; i < value.length - 1; i++) {
    if (temp > (value[i+1] - value[i])){
        temp = value[i+1] - value[i]
        result = i;
    }
}

console.log(value[result], value[result+1]);


//1번째 순회
//이런 식으로 정리하세요 
//initial value : i ==0, temp==3, result ==0