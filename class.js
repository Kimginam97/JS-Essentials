'use strict';

// 1.Class declarations
class Person{
    //construct
    constructor(name,age){
        this.name=name;
        this.age=age;
    }

    //methods
    speak(){
        console.log(`${this.name}:hello!`);
    }
}

const ellie =new Person('ellie' ,20);
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();

// 2.Getter and setters
class User{
    constructor(firstName,lastName,age){
        this.firstName=firstName;
        this.lastName=lastName;
        this.age=age;
    }

    get age(){
       return this._age;
    }
    set age(value){
        // if(value<0){
        //     throw Error('age can not be negative');
        // }
        this._age=value<0?0:value;
    }
}

const user1=new User('Steve','job',-1);
console.log(user1.age);



// 3.Fields

class Experiment{
    publicField=2;
    #privateField=0;
}

const experiment=new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);


// 4.Static properties and methods
class Article{
    static publisher='Dream Coding';
    constructor(articleNumber){
        this.articleNumber=articleNumber;
    }

    static printPulisher(){
        console.log(Article.publisher);
    }
}

const article1=new Article(1);
const article2=new Article(2);
console.log(article1.publisher);
console.log(Article.publisher);
Article.printPulisher();

// 5.Inheritance
class Shape{
    constructor(width,height,color){
        this.width=width;
        this.height=height;
        this.color=color;
    }
    draw(){
        console.log(`drawing ${this.color} color of`);
    }
    getArea(){
        return this.width*this.height;
    }
    
}

class Rectangle extends Shape{

}

class Triangle extends Shape{

    draw(){
        super.draw();
        console.log('＆');
    }
    
    getArea(){
        return this.width*this.height / 2;
    }

    toString(){
        return `Triangle: color : ${this.color}`;
    }
}

const rectangle=new Rectangle(20,20,'blue');
rectangle.draw();
console.log(rectangle.getArea());
const triangle=new Triangle(20,20,'red');
triangle.draw();
console.log(triangle.getArea());


// 6.Class checking: instance0f
console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object);
console.log(triangle.toString());
// object 는 모든걸 상속한거
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference


function calculate(command,a,b){
    switch(command){
        case 'add':
            return a+b;
        case 'substract':
            return a-b;
        case 'divide':
             return a/b;
        case 'multiply':
            return a*b;
        case 'remainder':
            return a%b;
        default:
            throw Error('unkonwn command');
    }
}
console.log(calculate('add',2,3));


























