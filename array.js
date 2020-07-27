'use strict';

// Array

// 1.Declaration
const arr1=new Array();
const arr2=[1,2];

// 2.index position
const fruits=['＆','＊'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[fruits.length-1]);

// 3.Looping over an array
console.clear();

// for
for(let i=0;i<fruits.length;i++){
    console.log(fruits[i]);
}

// for of
for(let fruit of fruits){
    console.log(fruit);
}

// foreach
fruits.forEach((fruit,index)=>{
    console.log(fruit,index);
})
fruits.forEach((fruit)=>console.log(fruit));


// 4.Addtion, deletion , copy
// push: add an item to the end 
fruits.push('＠','§');
console.log(fruits);

// pop:remove and item from the end
fruits.pop();
fruits.pop();
console.log(fruits);

// unshift: add an item to the benigging
fruits.unshift('＊','★');
console.log(fruits);

// shift :remove an item from the benigging;
fruits.shift();
fruits.shift();
console.log(fruits);

// note shift, unshitf are slower than pop,push
// 가능하면 pop push
// splice: remove an item by index position
fruits.push('★','○','■');
console.log(fruits);
fruits.splice(1,1);
console.log(fruits);
fruits.splice(1,1,'▲','◀');
console.log(fruits);


// combine two arrays
const fruits2=['㏘','㏂'];
const newFruits=fruits.concat(fruits2);
console.log(newFruits);


// 5.Serching
console.clear();
console.log(fruits);
console.log(fruits.indexOf('■'));
console.log(fruits.indexOf('ㅁ'));
console.log(fruits.includes('■'));
console.log(fruits.includes('ㅁ'));

// lastindexof
console.clear();
fruits.push('■');
console.log(fruits);
console.log(fruits.indexOf('■'));
console.log(fruits.lastIndexOf('■'));














