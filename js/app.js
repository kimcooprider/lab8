console.log('app.js is connected');


let welcomeMessage = alert('Hello Corgi Enthusiast');
let corgiNum = prompt('How many corgis do you own?');

console.log('User has this number of corgis',corgiNum);


function  getCorgiNum(){
    let greeting;

    if(corgiNum < 2 && corgiNum > 0){
    greeting = 'Good job!  Corgis Rock!';
    } else if(corgiNum === 3 || corgiNum < 5){
    greeting = 'You are on your way!';
    } else if (corgiNum >= 5){
    greeting = 'Wow, that is a lot of corgis!';
    }  else {  
    greeting = 'You should get a Corgi immediately.';
    }
    document.write(greeting);




console.log('proof of life');
}


getCorgiNum();