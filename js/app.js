console.log('app.js is connected');


let welcomeMessage = alert('Hello Corgi Enthusiast');
// let getNum = true;

// while(getNum){
//  let corgiNum = parseInt(prompt('How many corgis do you own?'));
//  if (corgiNum === 5) {
//     alert('Thank you for the number');
//     getNum = false;
//   } else {
//     alert('Please enter a number');
//     }
//  }

//  function howManyCorgi(){

//   let greeting;
  
//   if(corgiNumParsed < 1){
//     greeting = 'You should get a Corgi immediately.';
//   } else if(corgiNumParsed === 1){
//     greeting = 'Good job!  Corgis Rock!';
//   } else if(corgiNumParsed !== 0 && corgiNumParsed === 5){
//     greeting = 'Good you have atleast one and 5.';
//   } else if(corgiNumParsed === 100 || corgiNumParsed === 50){
//     greeting = 'you should share more.';
//   } else {
//     greeting ='Get yourseld a Corgi, soon.';
//   }
//   console.log('this is the greeting ',greeting);
//   document.write(greeting);
  
//   }
//   howManyCorgi();
 
  
//  grab ul with image section id from index.html
 let imageElement = document.getElementById('corgiPic');
console.log('here is the corgi pic',imageElement);

 let userInput = prompt('How many images would you like to see?');
 console.log('Our user input is of type: ',typeof(userInput));
 
 
 let userInputParsed = parseInt(userInput);
 console.log('user input parsed to int: ', userInputParsed)
 
 if(!isNaN(userInputParsed)){
   console.log('we have a valid number for input');
 } else {
   userInputParsed = parseInt(prompt('How many images? Enter a Number.'));
 }
 console.table(typeof(userInput));


 for(let i = 1; i <= userInputParsed; i++){
  console.log('proof of life', i);
  let listImage = document.createElement('li');
  // listImage.textContent = `corgi ${i}`;
  listImage.textContent = 'corgi ' + i;
  let image = document.createElement('img');
  image.setAttribute('src', 'images/IMG_6287.jpg');
  listImage.appendChild(image);
  console.log(listImage);
  imageElement.appendChild(listImage);
}


// function  getCorgiNum(){
//     let greeting;

//     if(corgiNum < 2 && corgiNum > 0){
//     greeting = 'Good job!  Corgis Rock!';
//     } else if(corgiNum === 3 || corgiNum < 5){
//     greeting = 'You are on your way!';
//     } else if (corgiNum >= 5){
//     greeting = 'Wow, that is a lot of corgis!';
//     }  else {  
//     greeting = 'You should get a Corgi immediately.';
//     }
//     document.write(greeting);




// console.log('proof of life');}


// getCorgiNum();