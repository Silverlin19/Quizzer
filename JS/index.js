const startButton = document.getElementById('start-btn');
const intro  = document.getElementById('intro');
const body = document.body
const content = document.getElementById('content')
let options = "placeholder text"

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

    const qcard = document.createElement('div');
qcard.classList= 'Questions card'; 
body.appendChild(qcard);

const createBtn = function() {

    const btn = document.createElement('button');
    btn.classList='next-button btn';
    btn.innerText = 'Next';
    qcard.appendChild(btn)

    console.log('the button works')

return btn;

};






// var li = document.createElement('li');
// li.textContent = options 

// appending function, li would be the children and ul the parent 
function appendChildren (parent, children) {

    children.forEach( function (child) {
parent.appendChild(child)        
    });

}






for (let i = 0; i < questionsArraray.length; i++) {
    let Answer = [1,3,1,2,2,1,2,3,2,2]
    console.log(questionsArraray[i].question);
console.log(questionsArraray[i].correctAnswer(Answer[i]));

}

// console.log(questionsArraray[i].question);
// console.log(questionsArraray[i].correctAnswer(Answer));