const startButton = document.getElementById('start-btn');
const intro  = document.getElementById("intro") ;
const content = document.getElementById('content');
const body = document.querySelector('body');
let options = "placeholder text";
const card = document.getElementsByClassName('card')
const timeLeftDisplay = document.querySelector('#time-left')
let timeLeft = 10;
let n = -1;

timeLeftDisplay.innerHTML=timeLeft;

// Questions and answers 
let questionsArraray = [

    {
    title : 'Question #1',
    question : "Inside which HTML element do we put the JavaScript?" ,
    answers : ["<logic>","<script>","<java>","<js>"],
    correctAnswer: function() {
        x = this.answers[1];
        return x
    } 
    },
    {
    title : 'Question #2',
    question : "What does CSS stand for?" ,
    answers : ["Content and style system","Content Style Sheet","Content Standard System","Cascading Style Sheet"],
    correctAnswer: function() {
        x = this.answers[3];
        return x
    } 
    },
    {
    title : 'Question #3',
    question : "what is the 'alt' function in an image tag used for?" ,
    answers : ["Providing a backup image", "Providing an image description", "Placing a link to another page", "Both A and B"],
    correctAnswer: function() {
        x = this.answers[1];
        return x
    } 
    },
    {
    title : 'Question #4',
    question : "What is the correct JavaScript syntax to write 'Hello Wolrd' ?" ,
    answers : ['response.write("Hello World")','"Hello Wolrd','document.write("Hello World)','("Hello World")'],
    correctAnswer: function() {
        x = this.answers[2];
        return x
    } 
    },
    {
    title : 'Question #5',
    question : "What is best practice for writing Javascript and CSS?" ,
    answers : ["Write code directly on the HTML sheet", "Inline", "Use a separate Style and JS sheet", "Both A and B" ],
    correctAnswer: function() {
        x = this.answers[2] ;
        return x
    } 
    },
    
    {
        title : 'Question #6',
        question : "Inside which HTML element do we place CSS code?" ,
        answers : ["<CSS>", "<Style>","<Design>","<Art>"],
        correctAnswer: function() {
            x = this.answers[1];
            return x
        } 
        },
        {
        title : 'Question #7',
        question : "How do you add 2 classes to an HTML element?" ,
        answers : ["Class = A Class = B","Class = A & B", "Class = A B", "Class(2) = A B"],
        correctAnswer: function() {
            x = this.answers[2];
            return x
        } 
        },
        {
        title : 'Question #8',
        question : "You've added and commited your changes, how do you send those changes to Github? (Assume you're on the right branch) " ,
        answers : ["Git push origin main","Git push commit Source", "git push origin master", "A & B can be correct " ],
        correctAnswer: function() {
            x = this.answers[3];
            return x
        } 
        },
        {
        title : 'Question #9',
        question : "What does git clone do?" ,
        answers : ["Duplicates your repository on github","Duplicates your repository on your computer","Copies an existing repo into a new directory on your computer", "Both A & B" ],
        correctAnswer: function() {
            x = this.answers[2];
            return x
        } 
        },
        {
        title : 'Question #10',
        question : "What does cd stand for in termninal?" ,
        answers : ["Change Disk", "Compact Disk", "Change Directory","Change Destination"],
        correctAnswer: function() {
            x = this.answers[2];
            return x
        } 
        },
    
    
    ]

    // Questions and Answers End 

endCard

const qLoad = () => {

    if (n >= 0) {
        let m = n+1;
        console.log('Question # '+ m)
        document.getElementById(n).style.display = "none"
    }
    n++

     // Card Produced
     const qcard = document.createElement('div');
     qcard.classList= 'Questions card'; 
     qcard.id= n;
     body.appendChild(qcard);
     // Question Produced
     
     const question = document.createElement('p')
     question.innerText = questionsArraray[n].question
     qcard.appendChild(question)
     
     // Options Wrapper 
     const answers = document.createElement('ul')
     answers.classList= 'answers'
     qcard.appendChild(answers)
     
     // Options produced
     for (let i = 0; i < 4; i++) {
         
     const answer = document.createElement('li')
     answer.classList= 'answer'
     answer.innerText= questionsArraray[n].answers[i]
     answers.appendChild(answer)
              
     }
     
         
         if (n <= 8) {


            const btn = document.createElement('button');
            btn.classList='next-button btn';
            btn.innerText = 'Next';
            btn.addEventListener('click', qLoad)
            qcard.appendChild(btn)

         } else {
            const btn = document.createElement('button');
            btn.classList='next-button btn';
            btn.style.backgroundColor = 'red'
            btn.innerText = 'Done';
            btn.addEventListener('click', console.log("you're done"))
            qcard.appendChild(btn)

        
         }
     
}


const startBtn = function() {


    intro.style.display = 'none';

   qLoad();
   
}
// startBtn()


//Timer function
const countDown = function () {

   let timer = setInterval(second =  () => {
    timeLeftDisplay.innerText = timeLeft;
    if (timeLeft<= 0) {
clearInterval(timer = 0)        
    }
    else {
    timeLeft -= 1; 
    }
    clearInterval(timer = 0)        

}, 1000 );

}
// Timer function ends


function appendChildren (parent, children) {

    children.forEach( function (child) {
parent.appendChild(child)        
    });

}





// Database runthrough
// for (let i = 0; i < questionsArraray.length; i++) {
//     let Answer = [1,3,1,2,2,1,2,3,2,2]
//     console.log(questionsArraray[i].question);
// console.log(questionsArraray[i].answers[Answer[i]]);

// }

