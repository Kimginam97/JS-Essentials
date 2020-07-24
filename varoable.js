// 1.Use strict
'use strict'

// 2.Variable
let globalName='global name';
{
    let name='ellie';
    console.log(name);
    name='hello';
    console.log(name);
}
console.log(name);
console.log(globalName);

// var  선언하기도 전에 쓸수 있어서 위험하다
// var hoisting -- 어디에 선언에 상관없이 제 위로 끌어 올려주다
// block scope를 철저히 무시한다.
{
    age=4;
    var age;
}
console.log(age);


// 3.contants 
// 한번 설정되면 값이 변하지 않는다
// 왠만하면 설정하고 값이 변하지않는걸로 사용한다
// 1.보완상의 이유
// 2.동시에 값 변경을 막아준다
// 3.실수를 줄여준다
// Mutable = let     Immutable=const
const daysInWeek=7;
const maxNumber=5;

// 4.Variable types
// primitive타입 더이상 작은걸로 나누어 지지않는다
// single item: number , string , boolean , null , symbol
// object타입 한박스 단위로 나누어준다
// function  , first-class function
const count=14;
const size=14.1;
console.log(`value : ${count},type:${typeof count}`);
console.log(`value : ${size},type:${typeof size}`);


// 무한대 숫자 Infinity
const infinity=1/0;
//  -Infinity
const negativeInfinity=-1/0;
// 숫자가 아닌값을 출력할때는 NaN으로 출력
const nAn='not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);


// bigInt
const bigInt=123456789456123123456789789456123n;
console.log(`vale: ${bigInt} , type:${typeof bigInt}`);

// string
const char='c';
const brendan='brendan';
const greeting='hello' +brendan;
console.log(`value : ${greeting} , type : ${typeof greeting}`);
const helloBob=`hi ${brendan}!`;
console.log(`value : ${helloBob},type : ${typeof helloBob}`);
console.log(`value:` + helloBob + 'type:' + typeof helloBob); 

// boolean
// fale: 0,null,undefined,NaN,''
// true: any other value
const canRead=true;
const test=3<1; //false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value:${test}, type: ${typeof test}`);


// null
let nothing=null;
console.log(`value: ${nothing}, type:${typeof nothing}`);

// undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`);

// symbol, create unique identifiers for object
const symbol1=Symbol('id');
const symbol2=Symbol('id');
console.log(symbol1===symbol2);

const gSymbol1=Symbol.for('id');
const gSymbol2=Symbol.for('id');
console.log(gSymbol1===gSymbol2);

console.log(`value ${symbol2.description}, type:${typeof symbol2}`)


// 5.Dynamic typing : dynamically typed language
let text='hello';
console.log(text.charAt(0)); //h
console.log(`value: ${text}, type: ${typeof text}`);
text=1;
console.log(`value: ${text}, type: ${typeof text}`);
text='7'+5;
console.log(`value: ${text}, type: ${typeof text}`);
text='8'/'2';
console.log(`value: ${text}, type: ${typeof text}`);
// console.log(text.charAt(0));  //타입스크립트가 나오게 된다.


// object
const ellie={name:'ellie' , age:20};
console.log(`value: ${ellie}`);
ellie.age=21;