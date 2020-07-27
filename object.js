// 오브젝트는 key value의 집합이다
// object ={key:value}
// 1.Literals and properties
const obj={};
const obj2=new Object();

function print(name,age){
    console.log(name);
    console.log(age);
}

const ellie={name:'ellie',age:4};
print(ellie);

// can add properties later
ellie.hasJob=true;
console.log(ellie.hasJob);

// can delete properties later
delete ellie.hasJob;
console.log(ellie.hasJob);



// 2.Computed properties
// key should be alway string
// 다시받을때
console.log(ellie.name); 
console.log(ellie['name']);
ellie['hasJob']=true;
console.log(ellie.hasJob);

function printValue(obj,key){
    console.log(obj[key]);
}

printValue(ellie,'name');

// 3.Property value shorthand
const person1={name:'bob',age:2};
const person2={name:'steve',age:3};
const person3={name:'dave',age:4};
const person4=new Person('elile',30);
console.log(person4);
// function makePerson(name,age){
//     return{
//         name:name,
//         age:age,
//     };
// }

// 4.Construct function
function Person(name,age){
    this.name=name;
    this.age=age;
}

// 5.in operator:property existence check
console.log('name' in ellie);
console.log('age' in ellie);
console.log('random' in ellie);
console.log(ellie.random);


// 6.for..in vs for..of
console.clear();
for(key in ellie){
    console.log(key);
}

// for(value of iterable)
const array=[1,2,4,5];
for(let i =0;i<array.length;i++){
    console.log(array[i]);
}

for(value of array){
    console.log(value);
}

// 7.Fun cloning
const user={name:'ellie',age:'20'};
const user2=user;

user2.name='coder';
console.log(user);

// old way
const user3={};
for(key in user){
    user3[key]=user[key];
}
console.clear();
console.log(user3);

// object.assign
const user4={};
Object.assign(user4,user);
console.log(user4);

const user5=Object.assign({},user);
console.log(user5);


// another example
const fruit1={color:'red'};
const fruit2={color:'blue',size:'big'};
const mixed=Object.assign({},fruit1,fruit2);
console.log(mixed.color);
console.log(mixed.size);











