// 1.String concatenation
console.log('my' + 'cat');
console.log('1' + 2);
console.log(`string literals:

''''
1 + 2 = ${1+2}`);

console.log("ellie's \n\tbook");

// 2.Numeric operators
console.log(1+1); //add
console.log(1-1); //substract
console.log(1/1); //divide
console.log(1*1); //multiply
console.log(5%2); //remainder
console.log(2**3); //exponentiation

// 3.Increment and decrement operators
let counter=2;
const preIncrement = ++counter;

console.log(`preIncrement : ${preIncrement}, counter: ${counter}`);

const postIncrement=counter++;

console.log(`postIncrement: ${postIncrement}, couner: ${counter}`);

const preDecrement=--counter;
console.log(`postIncrement: ${preDecrement}, couner: ${counter}`);

const postDecrement=counter--;
console.log(`postIncrement: ${postDecrement}, couner: ${counter}`);

//4.Assignment operators
let x=3;
let y=6;
x+=y;
x-=y;
x*=y;
x/=y;

// 5.Comparison operators
console.log(10<6);
console.log(10<=6);
console.log(10>6);
console.log(10>=6);


// 6.Logical operators
const value1=false;
const value2=4<2;

// ||(or)
// or연산자는 처음에 value1값이 트루면 멈춘다
console.log(`or:${value1 || value2 || check()}`);

// &&(and)
// and연산자는 처음에 value1값이 false 면 멈춘다
// console.log(`and:${value1 && value2 && check()}`);
// if(nullalbeObject !=null){
//     nullableObject.something;
// }


function check(){
    for(let i =0;i<10;i++){
        console.log('♧');
    }
    return true;
}

// !(not)
console.log(!value1);


//7.Equality
const stringFive='5';
const numberFive=5;

// ==loose equality, with type conversion
// ==2개일 경우 타입을 변경해서 검사해준다
console.log(stringFive==numberFive);
console.log(stringFive!=numberFive);

// ===strict quality, no type conversion
// ===3개일 경우 타입을 변경 안해서 검사해준다 왠만하면 이걸로 사용
console.log(stringFive===numberFive);
console.log(stringFive!==numberFive);

// object equality by reference
const ellie1={name:'ellie'};
const ellie2={name:'ellie'};
const ellie3=ellie1;
// ellie1과 ellie2 ref값은 다르다
//  1과 3은 똑같은 ref값을 갖는다
console.log(ellie1==ellie2);
console.log(ellie1===ellie2);
console.log(ellie1===ellie3);




