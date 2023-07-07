/*
        Algorithm for creating my own Quiz App
        
        start  ->   declare the variables needed (
            1. Questionnaire content  (Questions and possible answers and correct answers)
            2. Score 
            3. Total items
            4. Selected answer 
        
            )   
             -> Display the questions, answers (for loop), and the buttons for the user
                
                    *if else statement for verification if the user has selected an answer


             -> Read the users input and save inside a variable  
             -> validate the answer and increment the correct answer counter
             -> repeat until the last item
             ->  Display the correct answer/s submited done
             -> return from the start using button
        end

*/




var x = 0;
var start = true;

var Score = 0;

const Questionnaire = [
    {
        question:"What does HTML stands for?",
        ChoiceA: "Hyper Tag Markup Language",
        ChoiceB: "Hyperlinks Text Mark Language",
        ChoiceC: "Hyper Text Markup Language",
        ChoiceD: "HyperLinking Text Marking Language",
        correct: ChoiceC,
    },
    {
        question:"What symbol indicates a tag?",
        ChoiceA: "Angle Brackets e.g <>",
        ChoiceB: "Curved Brackets e.g {}",
        ChoiceC: "Comma's e.g. `,` ",
        ChoiceD: "Exclamation marks e.g. !",
        correct: ChoiceA,
    },
    {
        question:"Which of these is a genuine tag keyword?",
        ChoiceA: "Header",
        ChoiceB: "Body",
        ChoiceC: "Bold",
        ChoiceD: "Image",
        correct: ChoiceB,
    },
    {
        question:"A CSS file can be applied to only one HTML file?",
        ChoiceA: "True",
        ChoiceB: "False",
        ChoiceC: "Sometimes",
        ChoiceD: "None of the above",
        correct: ChoiceB,
    },
    {
        question:"What is the correct tag for a line break?",
        ChoiceA: " brk / ",
        ChoiceB: "bk /",
        ChoiceC: "line /",
        ChoiceD: "br /",
        correct: ChoiceD,
    },
    {
        question:"What does CSS stand for?",
        ChoiceA: " Computing Style Sheet ",
        ChoiceB: "Cascading Style Sheet",
        ChoiceC: "Creative Style System ",
        ChoiceD: "Creative Styling Sheet",
        correct: ChoiceB,
    },
    {
        question:"Where should a CSS file be referenced in HTML file?",
        ChoiceA: " Before any HTML code",
        ChoiceB: " Inside the head section ",
        ChoiceC: " After all HTML code ",
        ChoiceD: " Inside the body section",
        correct: ChoiceB,
    },
    {
        question:"What is the correct format for aligning written content to the center of the page in CSS?",
        ChoiceA: " Text-align: center; ",
        ChoiceB: "Text: align-center; ",
        ChoiceC: "Font-align: center; ",
        ChoiceD: "Font: align-center;",
        correct: ChoiceA,
    },
    {
        question:"What is the correct format for changing the background colour of a div in CSS?",
        ChoiceA: " Bg-color: red; ",
        ChoiceB: " Background-color: red; ",
        ChoiceC: " Background: red;",
        ChoiceD: "Background-color:red",
        correct: ChoiceD,
    },
    {
        question:"What is the correct format for a div?",
        ChoiceA: " Div-id = example ",
        ChoiceB: " Div = \"example\" ",
        ChoiceC: " Div id=\"example\" ",
        ChoiceD: " Div.example",
        correct: ChoiceC,
    },

]




display(x);

function deselect(){

  var chosen =  document.querySelectorAll(".answer");
    chosen.forEach(chosen => chosen.checked = false);
}



function display(x){
    deselect()
    const question = document.getElementById("Question");
    const opt1 = document.getElementById("ChoiceA")
    const opt2 = document.getElementById("ChoiceB")
    const opt3 = document.getElementById("ChoiceC")
    const opt4 = document.getElementById("ChoiceD")
    

    const label1 = document.getElementById("label1")
    const label2 = document.getElementById("label2")
    const label3 = document.getElementById("label3")
    const label4 = document.getElementById("label4")
    
    question.innerText = Questionnaire[x].question;
    opt1.value = Questionnaire[x].ChoiceA;
    opt2.value = Questionnaire[x].ChoiceB;
    opt3.value = Questionnaire[x].ChoiceC;
    opt4.value = Questionnaire[x].ChoiceD;
    

   label1.innerText = opt1.value;
   label2.innerText = opt2.value;
   label3.innerText = opt3.value;
   label4.innerText = opt4.value;
}

//buttons
const next = document.getElementById("next");
const back = document.getElementById('back');


next.addEventListener('click', ()=> {
  

    if(x < Questionnaire.length){
     
        var selected = document.querySelector('input[name="choices"]:checked');
       
        var right = Questionnaire[x].correct;
        if(selected != null){
                if(selected === right){
                    Score++;
                    console.log(Score);
                    x++;
                    if(x == Questionnaire.length){
                        ShowResult()
                     
                    }
                    display(x);
                
                }
                else{
                    console.log(Score);
                    x++;
                    if(x == Questionnaire.length){
                        ShowResult()
                    }
                    display(x);
                }
              
        }
        else {
            alert("no answer selected");
            return
        }

    }


})


function ShowResult(){
    
    document.getElementById("main").innerHTML =  `<h1> You got the score of  ${Score}  over ${Questionnaire.length} </h1>` ;
    document.getElementById('main').style.textAlign= 'center'
       var reload = document.createElement("button");
       reload.innerHTML= "Reset"
 //   reload.innerText("Retry");
     main.appendChild(reload)
     reload.onclick = function() { location.reload() };
     //  if(reload.click == true){
     // location.reload();
     // }
     // else {
     //     return
     // }
   

}

back.addEventListener('click', ()=> {

    if(x == 0){
        alert("you are in the first page")
        return
    }
    else{
        //clear the selected variable
        if(Score > 0){
            Score--;
            x--;
            display(x);
        }
        else{
            x--;
            display(x);
        }
    }

})

    




//source : https://www.geeksforgeeks.org/how-to-create-a-simple-javascript-quiz/
// Questions which will be asked
// const Questions = [{
//     id: 0,
//     q: "What is capital of India?",
//     a: [{ text: "gandhinagar", isCorrect: false },
//         { text: "Surat", isCorrect: false },
//         { text: "Delhi", isCorrect: true },
//         { text: "mumbai", isCorrect: false }
//     ]

// },
// {
//     id: 1,
//     q: "What is the capital of Thailand?",
//     a: [{ text: "Lampang", isCorrect: false, isSelected: false },
//         { text: "phuket", isCorrect: false },
//         { text: "Ayutthaya", isCorrect: false },
//         { text: "Bangkok", isCorrect: true }
//     ]

// },
// {
//     id: 2,
//     q: "What is the capital of Gujarat",
//     a: [{ text: "surat", isCorrect: false },
//         { text: "vadodara", isCorrect: false },
//         { text: "gandhinagar", isCorrect: true },
//         { text: "rajkot", isCorrect: false }
//     ]

// }

// ]

// // Set start
// var start = true;

// // Iterate
// function iterate(id) {

// // Getting the result display section
// var result = document.getElementsByClassName("result");
// result[0].innerText = "";

// // Getting the question
// const question = document.getElementById("question");


// // Setting the question text
// question.innerText = Questions[id].q;

// // Getting the options
// const op1 = document.getElementById('op1');
// const op2 = document.getElementById('op2');
// const op3 = document.getElementById('op3');
// const op4 = document.getElementById('op4');


// // Providing option text
// op1.innerText = Questions[id].a[0].text;
// op2.innerText = Questions[id].a[1].text;
// op3.innerText = Questions[id].a[2].text;
// op4.innerText = Questions[id].a[3].text;

// // Providing the true or false value to the options
// op1.value = Questions[id].a[0].isCorrect;
// op2.value = Questions[id].a[1].isCorrect;
// op3.value = Questions[id].a[2].isCorrect;
// op4.value = Questions[id].a[3].isCorrect;

// var selected = "";

// // Show selection for op1
// op1.addEventListener("click", () => {
//     op1.style.backgroundColor = "lightgoldenrodyellow";
//     op2.style.backgroundColor = "lightskyblue";
//     op3.style.backgroundColor = "lightskyblue";
//     op4.style.backgroundColor = "lightskyblue";
//     selected = op1.value;
// })

// // Show selection for op2
// op2.addEventListener("click", () => {
//     op1.style.backgroundColor = "lightskyblue";
//     op2.style.backgroundColor = "lightgoldenrodyellow";
//     op3.style.backgroundColor = "lightskyblue";
//     op4.style.backgroundColor = "lightskyblue";
//     selected = op2.value;
// })

// // Show selection for op3
// op3.addEventListener("click", () => {
//     op1.style.backgroundColor = "lightskyblue";
//     op2.style.backgroundColor = "lightskyblue";
//     op3.style.backgroundColor = "lightgoldenrodyellow";
//     op4.style.backgroundColor = "lightskyblue";
//     selected = op3.value;
// })

// // Show selection for op4
// op4.addEventListener("click", () => {
//     op1.style.backgroundColor = "lightskyblue";
//     op2.style.backgroundColor = "lightskyblue";
//     op3.style.backgroundColor = "lightskyblue";
//     op4.style.backgroundColor = "lightgoldenrodyellow";
//     selected = op4.value;
// })

// // Grabbing the evaluate button
// const evaluate = document.getElementsByClassName("evaluate");

// // Evaluate method
// evaluate[0].addEventListener("click", () => {
//     if (selected == "true") {
//         result[0].innerHTML = "True";
//         result[0].style.color = "green";
//     } else {
//         result[0].innerHTML = "False";
//         result[0].style.color = "red";
//     }
// })
// }

// if (start) {
// iterate("0");
// }

// // Next button and method
// const next = document.getElementsByClassName('next')[0];
// var id = 0;

// next.addEventListener("click", () => {
// start = false;
// if (id < 2) {
//     id++;
//     iterate(id);
//     console.log(id);
// }

// })
