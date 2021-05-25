'use strict'
let score = 0;
let userName = prompt("Hello! what is your name?")
alert('Hello ' + userName + ' You are welcomed!')
alert("I hope you will have fun browsing this website " + userName);

let introduction = prompt('Do you think I study software development?');
introduction = introduction.toLowerCase();
if(introduction === 'yes' || introduction === 'y')
{
    // console.log('Yes. You are right!')
    alert('Yes. You are right!')
    score++;
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
    score++;

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
score++;

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
            score++;
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
        score++;
    break;
    case 'no':
        // console.log('Yes. You are right')
            alert('We will record your feedback');
    break;
    default :
    // console.log('Yes. You are right')
            alert('You might have made a typo!');

}



let age = prompt('What do you think my age is?')
for(let i = 0; i < 4; i++ ){
    if(Number(age) === 29){
alert('Yes. Corect!')
score++;
break;
}
else if(Number(age) < 29){
    age = prompt('Try a higher number')


}
else if(Number(age) > 29){
    age = prompt('Try a lesser number')


}
 if(i === 3){
   alert('My age is 29')
 }   
}

let languages = prompt('Can you guess one of my favourite numbers?')
let correctAnswers = [1, 2, 3];
for(let i = 0; i < 4; i++ ){
    if(Number(languages) === correctAnswers[0] || Number(languages) === correctAnswers[1] || Number(languages) === correctAnswers[2]){
alert('Yes. Correct!')
score++;
break;
}
else {
    languages = prompt('Try another answer')


}

 if(i === 3){
   alert('My favourites numbers are 1 , 2 and 3')
 }   
}
alert('Your score is ' + score)