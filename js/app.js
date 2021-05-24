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
    // console.log('Yes. You are right')
    alert('Yes. You are right!')

}else if (gender === 'no' || gender === 'n'){
    alert('NO. Your answers is wrong')
}else{
    alert ('Try one more time')

}

let language = prompt('Do you think I speak Arabic?')
language = language.toLowerCase();
if(language === 'yes' || language === 'y'){
// console.log('Nice guess!')
alert('Nice guess!')

}else if (language ==='no' || language ==='no'){
alert('You might want to have another guess!')
}else {
    alert('That is not an expected answer')
}

let userName = prompt("Hello! what is your name?")
alert('Hello ' + userName + ' You are welcomed!')
alert("I hope you will have fun browsing this website " + userName)


let food = prompt('Do you think I like meat?')
food = food.toLowerCase();
switch(food){
    case 'Yes':
        alert('Actually, I do not like meat');
        break;
}