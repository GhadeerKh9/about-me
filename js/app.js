'use strict'
let introduction = prompt('Do you think I study software development?');
introduction = introduction.toLowerCase();
if(introduction === 'yes' || introduction === 'y')
{
    // console.log('Yes. You are right!')
    alert('Yes. You are right!')
} else if (introduction === 'no' || introduction === 'n'){
alert('Your answer is wrong')
}else {
    alert('try one more time')

};

let gender = prompt('Do you think I am female?')
gender = gender.toLowerCase();
if (gender === 'yes' || gender ==='y'){
    console.log('Yes. You are right')
    alert('Yes. You are right!')

}else if (gender === 'no' || gender === 'n'){
    alert('NO. Your answers is wrong')
}else{
    alert ('Try one more time')
}

let userName = prompt("Hello! what is your name?")
alert('Hello ' + userName + ' You are welcomed!')
alert("I hope you will have fun browsing this website " + userName)

