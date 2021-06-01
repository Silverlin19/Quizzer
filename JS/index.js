const startButton = document.getElementById('start-btn');
const intro  = document.getElementById("intro") ;
const content = document.getElementById('content');
const body = document.querySelector('body');
let options = "placeholder text";
const card = document.getElementsByClassName('card');
const timeLeftDisplay = document.querySelector('#time-left');
const introCard = document.querySelector('#introCard');
let timeLeft = 10;
let n = -1;
timeLeftDisplay.innerText = timeLeft;





const qLoad = () => {

    if (n >= 0) {
        introCard.style.display = "none";
        let m = n+1;
        console.log('Question # '+ m)
        document.getElementById(n).style.display = "none";
    }
    n++;

     // Card Produced
     const qcard = document.createElement('div');
     qcard.classList= 'Questions card'; 
     qcard.id= n;
     body.appendChild(qcard);
     // Question Produced
     
     const question = document.createElement('p');
     question.innerText = questionsArraray[n].question;
     qcard.appendChild(question);
     
     // Options Wrapper 
     const answers = document.createElement('ul');
     answers.classList= 'answers';
     qcard.appendChild(answers);
     
     // Options produced
     for (let i = 0; i < 4; i++) {
         
     const answer = document.createElement('li');
     answer.classList= 'answer';
     answer.innerText= questionsArraray[n].answers[i];
     answers.appendChild(answer);
              
     }
     
         
         if (n <= 8) {


            const btn = document.createElement('button');
            btn.classList='next-button btn';
            btn.innerText = 'Next';
            btn.addEventListener('click', qLoad);
            qcard.appendChild(btn);

         } else {
            const btn = document.createElement('button');
            btn.classList='next-button btn';
            btn.style.backgroundColor = 'red';
            btn.innerText = 'Done';
            btn.addEventListener('click', console.log("you're done"));
            qcard.appendChild(btn);

        
         }
     
};


// const endCard = ()=> {
//     // Card Produced
//     const qcard = document.createElement('div');
//     qcard.classList= 'Questions card'; 
//     qcard.id= n;
//     body.appendChild(qcard);
//     // Question Produced
    
//     const question = document.createElement('p');
//     question.innerText = questionsArraray[n].question;
//     qcard.appendChild(question);

// };

//Timer function
const countDown = function () {

    let timer = setInterval(second =  () => {
     timeLeftDisplay.innerText = timeLeft;
     if (timeLeft<= 0) {
 clearInterval(timer = 0);
 
     }
     else {
     timeLeft -= 1; 
     }
     clearInterval(timer = 0);        
 
 }, 1000 );
 
 }
 // Timer function ends


 startButton.addEventListener("click", qLoad);
// countDown();









