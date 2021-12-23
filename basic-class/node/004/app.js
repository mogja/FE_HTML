// 파일이름 : 003\one.js

import {이름, 나이, 한살더먹음, 값가져와} from './two.js'; //이거는 최신문법
//import * as 개인프로필 from './two.js'; //전체 모듈을 개인프로필이라는 이름으로 가져올 거야
// const 개인프로필 = require('./two');

console.log(개인프로필.이름);
console.log(개인프로필.나이);
한살더먹음();
한살더먹음();
console.log(개인프로필.나이);//이번에는 출력이 되었죠?(옛날문법시 출력 안됨)
console.log(개인프로필.값가져와());