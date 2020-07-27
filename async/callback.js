'use strict'


// Synchronous callback
function printImmediately(print){
    print();
}

// Asynchronous callback
function printWithDelay(print,timeout){
    setTimeout(print,timeout);
}

// javascript is synchronous
// hoisting: var, function declaration 선언부분이 자동으로 위로올라가는거

console.log('1');
setTimeout(()=>console.log('2'),1000);
console.log('3');

printImmediately(()=>console.log('hello'));

printWithDelay(()=>console.log('async callback'),2000);




// Callback Hell example
// 읽기가 안되고 가독성이 떨어진다
class UserStorage{
    loginUser(id,password,onSuccess,onError){
        setTimeout(()=>{
            if(
                (id==='ellie' && password==='dream')||
                (id==='coder' && password==='academy')
            ){
                onSuccess(id);
            }else{
                onError(new Error('not found'));
            }
        },2000);
    }

    getRoles(user,onSuccess,onError){
        setTimeout(()=>{
            if(user==='ellie'){
                onSuccess({name:'ellie',role:'admin'});
            }else{
                onError(new Error('no access'));
            }
        },1000);
    }
}

const userStorage = new UserStorage();
const id=prompt('enter your id');
const password=prompt('enter your password');
userStorage.loginUser(
    id,
    password,
    user=>{
        userStorage.getRoles(
            user,
            userWithRole=>{
                alert(`Hello ${userWithRole.name},you have a ${user.role} role`);
            },
            error=>{
                console.log('error')
            }
        );
    },
    error=>{
        console.log(error);
    }
)