let 이름 ="예은";
let 나이 =24;
function 한살더먹음(){
    나이+=1;
}
function 값가져오기(){
    return 나이 //한살 더 먹은 나이를 리턴
}

module.exports.이름 = 이름; //이름이라는 변수를  이름으로 밖으로 빼내주겠다.
module.exports.나이 = 나이;
module.exports.한살더먹음 = 한살더먹음;
module.exports.값가져오기 = 값가져오기;