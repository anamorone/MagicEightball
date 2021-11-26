
const button = document.querySelector("button");
const answer = document.querySelector("#answer");
const input = document.querySelector(".myinput");

button.addEventListener("click", function() {

let randomNumber = Math.floor(Math.random()*12);

let eightBall = "";

switch(randomNumber){
  case 0:
  eightBall = 'I don\'t care';
  break;
  case 1:
  eightBall = 'It is certain';
  break;
  case 2:
  eightBall = 'It is decidedly so';
  break;
  case 3:
  eightBall = 'Reply hazy try again';
  break;
  case 4:
  eightBall = 'Cannot predict now';
  break;
  case 5:
  eightBall = 'Do not count on it';
  break;
  case 6:
  eightBall = 'My sources say no';
  break;
  case 7:
  eightBall = 'Outlook not so good';
  break;
  case 8: 
  eightBall = 'Signs point to yes';
  break;
  case 9: 
  eightBall = 'Without a doubt';
  break;
  case 10:
  eightBall = 'Definitely';
  break;
  case 11:
  eightBall = 'I don\'t think so';
  break;
}

answer.innerHTML = eightBall;
});

input.addEventListener("keyup", (e) => {
  const value =  e.currentTarget.value;
    if(value === "") {
      button.disabled = true;
    }else {
      button.disabled = false;
    }
  });


