function printHello(){
    console.log('Hello');
}
printHello();

function log(message){
    console.log(message);
}

log('Hellow@');

log(1234);

// 타입스크립트
// function log(meesage:string):number{
//     console.log(message);
//     return 0;
// }

// 2.Parameters
function changeName(obj){
    obj.name='coder';
}

const ellie={name:'ellie'};
changeName(ellie);
console.log(ellie);

// 3.Default parameters
function showMessage(message,from){
    console.log(`${message} by ${from}`);
}
showMessage('Hi!');

// 4.Rest parameter 
function printAll(...args){
    for(let i=0;i<args.length;i++){
        console.log(args[i]);
    }

    for(const arg of args){
        console.log(arg);
    }

    args.forEach((arg)=>console.log(arg));
}

printAll('dream','coding','ellie');


// 5.Local scope
let globalMessage='global';
function printMessage(){
    let message='hello';
    console.log(message);
    console.log(globalMessage);

    function printAnother(){
        console.log(message);
        let childMessage='Hello';
        console.log(childMessage);
    }
}
printMessage();

// 6.Return a value
function sum(a,b){
    return a+b;
}

const result=sum(1,2);
console.log(`sum: ${sum(1,2)}`);


// 7.Early return, early exit
// bad
function upgradeUser(user){
    if(user.point>10){

    }
}

// good
function upgradeUser(user){
    if(user.point<=10){
        return;
    }
}


// 8.function expression
const print=function(){
    console.log('print');
};
print();
const printAgain=print;
printAgain();
const sumAgain=sum;
console.log(sumAgain(1,3));
// sum 함수에 선언이 호출되기전에 선언이 된다.


// callback function using function expression
function randomQuiz(answer,printYes,printNo){
    if(answer==='love you'){
        printYes();
    }else {
        printNo();
    }
}

// anonymous function
const printYes =function(){
    console.log('yes!');
}

// named function
const printNo=function print(){
    console.log('no!');
    // print();
}

randomQuiz('wrong',printYes,printNo);
randomQuiz('love you',printYes,printNo);


// Arrow function
// const simplePrint=function(){
//     console.log('simplePrint!');
// };

const simplePrint=()=>console.log('simplePrint!');
const add=(a,b)=>a+b;
const simpleMultiply=(a,b)=>{

    return a*b;
}


// IIFE
(function hello(){
    console.log('IIFE');
})();




































