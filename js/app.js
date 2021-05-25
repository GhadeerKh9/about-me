'use strict'
let userName = prompt("Hello! what is your name?")
alert('Hello ' + userName + ' You are welcomed!')
alert("I hope you will have fun browsing this website " + userName);

let introduction = prompt('Do you think I study software development?');
introduction = introduction.toLowerCase();
if(introduction === 'yes' || introduction === 'y')
{
    // console.log('Yes. You are right!')
    alert('Yes. You are right!')
} else if (introduction === 'no' || introduction === 'n'){
    // console.log('Your answer is wrong')
alert('Your answer is wrong')
}else {
    // console.log('try one more timet')
    alert('try one more time')

};

let gender = prompt('Do you think I am female?')
gender = gender.toLowerCase();
if (gender === 'yes' || gender ==='y'){
    // console.log('Yes. You are right')
    alert('Yes. You are right!')

}else if (gender === 'no' || gender === 'n'){
    // console.log('NO. Your answers is wrong')
    alert('NO. Your answers is wrong')
}else{
    // console.log(Try one more time)
    alert ('Try one more time')

}

let language = prompt('Do you think I speak Arabic?')
language = language.toLowerCase();
if(language === 'yes' || language === 'y'){
// console.log('Nice guess!')
alert('Nice guess!')

}else if (language ==='no' || language ==='no'){
    // You might want to have another guess!')
alert('You might want to have another guess!')
}else {
    // That is not an expected answer')
    alert('That is not an expected answer')
}




let food = prompt('Do you think I like meat?')
food = food.toLowerCase();
switch(food){
    case 'yes':
        // console.log('Actually, I do not like meat')
        alert('Actually, I do not like meat');
    break;
    case 'no':
        // console.log('Yes. You are right')
            alert('You are right!');
    break;
    default :
    // console.log('Yes. You are right')
            alert('You might have made a typo!');

}
let website = prompt('Do you like this website?')
food = website.toLowerCase();
switch(website){
    case 'yes':
        // console.log('Glad to know that')
        alert('Glad to know that');
    break;
    case 'no':
        // console.log('Yes. You are right')
            alert('We will record your feedback');
    break;
    default :
    // console.log('Yes. You are right')
            alert('You might have made a typo!');

}
