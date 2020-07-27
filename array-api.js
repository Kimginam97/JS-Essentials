// Q1 Make a String out of an array     Join
{
    const fruits=['apple','banana','orange'];
    const result=fruits.join('|');
    console.log(result);
}

// Q2 make an array out of a string      Split
{
    const fruits='☆,★,◆,■';
    const result=fruits.split(',',2);
    console.log(result);
}


// Q3 make this array look like this:[5 , 4, 3 ,2, 1]      reverse
{
    const array=[1,2,3,4,5];
    const result=array.reverse();
    console.log(result);
    console.log(array);
}
// 배열자체를 변화

// Q4 make new array withot the first two elements      Slice
{
    const array=[1,2,3,4,5];
    const result=array.splice(2,5);
    console.log(result);
    console.log(array);
}

class Student{
    constructor(name,age,enrolled,score){
        this.name=name;
        this.age=age;
        this.enrolled=enrolled;
        this.score=score;
    }
}
const students=[
    new Student('A',29,true,45),
    new Student('B',28,false,80),
    new Student('C',30,true,90),
    new Student('D',40,false,66),
    new Student('E',18,true,88),
];

// Q5 find a student with the score 90           find
{
    const result=students.find((student)=>student.score===90);
    console.log(result);
}


//  Q6 make an array of enrolled students           filter
{
    const result=students.filter((student)=>student.enrolled);
    console.log(result);
}

//  Q7 make an array containing only the students' scores
// result should be:[45,80,90,66,88]                        map
{
    const result=students.map((student)=>student.score);
    console.log(result);
}

// Q8 check if there is a student with the score lower than 50        sum  every
{
    console.clear();
    const result=students.some((student)=>student.score<50);
    console.log(result);

    const result2=!students.every((student)=>student.score>=50);
    console.log(result2);
}
console.clear();
// Q9 compute student average score                reduce  reduceright 는 뒤에서 시작
{
    const result=students.reduce((prev,curr)=>{
        console.log('-------------');
        console.log(prev);
        console.log(curr);
        return prev+curr.score;
    },0);
    console.log(result/students.length);
}

console.clear();
// Q10 make a string containing all the scores
// result should be:'45,80,90,66,88'
{
    const result=students
    .map((student)=>student.score)
    .filter((score)=>score>=50)
    .join();
    console.log(result);
}

// result should be:'45,66,80,88,90               sort
{
    const result=students.map(student=>student.score)
    .sort((a,b)=>a-b)
    .join();
    console.log(result);
}














