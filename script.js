const qList = [
    {
        qxn: "1. When you were arriving, I was lying ..... my back reading my book.",
        a: "to",
        b: "at",
        c: "infront",
        d: "on",
        e: "under",
        answer: "d"

    },{
        qxn: "2. That's really true! Peter saw him staring ..... you!",
        a: "to",
        b: "at",
        c: "besides",
        d: "or",
        e: "from",
        answer: "b"

    },{
        qxn: "3. If I sign contact, I will make sure nothing .... go wrong!",
        a: "will have gone",
        b: " will go",
        c: "goes",
        d: "went",
        e: "to go",
        answer: "b"

    },{
        qxn: "4. Sam and I ... asking .... whether you are .... because of  what you did!",
        a: "were, asking for, ourself, fresh",
        b: "are, yourselves, ready",
        c: " are, ourselves, normal",
        d: "would like to be, for youself, capable",
        e: "are, myself, normal",
        answer: "c"

    },
    {
        qxn: "5. Suppose you are rich enough for launching a huge business, and now you have a speech to thank your friend who gave you all the capital : You: I have started all this ........ my Friend SLinny! ",
        a: "as well as",
        b: " from",
        c: "because of",
        d: "thanks to",
        e: "let us thank",
        answer: "d" 
    }

]
const question = document.getElementById('question');

const list = document.getElementById('list');

const aText = document.getElementById('aText');
const bText = document.getElementById('bText');
const cText = document.getElementById('cText');
const dText = document.getElementById('dText');
const eText = document.getElementById('eText');
const button = document.getElementById('btn2');
const instructionsBtn = document.getElementById('instrbtn');
const startBtn = document.getElementById('btn1');
const boxQuestions = document.getElementById('boxQuestions');
const bleefings = document.getElementById('bleefings');


//BUTTONSSS.................................
    
instructionsBtn.addEventListener("click", () =>{
        instructionsBtn.innerText = "Follow-Ups";
        instructionsBtn.style.color = "green";
        instructionsBtn.style.border = "none";
        instructionsBtn.style.fontSize = "1.2rem";
        instructionsBtn.style.fontWeight = "bolder";
        instructionsBtn.style.background = "none";
        instructionsBtn.style.textDecoration = "underline";
        bleefings.style.display = "flex";
        startBtn.style.display = "flex";

});

startBtn.addEventListener('click', () =>{
        instructionsBtn.style.display = "none";
        boxQuestions.style.display = "flex";
        bleefings.style.display = "none";
        startBtn.style.display = "none";

        secondTimer();// will start to count time after clicking start button
        questionIncrease();
});


//page Question.............................
let firstQuestion = 0;   //increasing page
let score = 0;          // got marks

const deadline =0;

let currentData = qList[firstQuestion];

function questionIncrease(){
    
    

    question.innerText = currentData.qxn;
    
    aText.innerText = currentData.a;
    bText.innerText = currentData.b;
    cText.innerText = currentData.c;
    dText.innerText = currentData.d;
    eText.innerText = currentData.e; 
   
    radioSelect.forEach((radioSelect)=>{
        
        if(radioSelect.checked === true){

            //uncheck the radio whenever I re-click the button::::::::::::::
           
            uncheckAnswers(); //this fxn will unchek/Deselect them 
            
            //about scores:.......
             let getSelected = radioSelect.id;
             let wantedAnswer = currentData.answer;

             if(getSelected === wantedAnswer){
                score = score + 5;
                }
                //increasing of number of questions

            if(currentData !== qList[(qList.length -1)]){
               
                
                     firstQuestion++
                     

                    currentData = qList[firstQuestion]; 
                     question.innerText = currentData.qxn;

                    aText.innerText = currentData.a;
                    bText.innerText = currentData.b;
                    cText.innerText = currentData.c;
                    dText.innerText = currentData.d;
                    eText.innerText = currentData.e;   
                     
            } 
                    // At final, you will submit to get your marks:...........................

            else if( currentData == qList[(qList.length -1)]){ 
                         timer.style.display = "none";
                         question.innerHTML = "Done!!"; 
                         question.style.color = "orange";
                         question.style.display = "none"; /////////tobe finalized/!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                         question.style.justifyContent= "center";
                         question.style.alignItems = "center";
                         question.style.fontSize = "3em";
                         list.style.display = "none";
                         button.innerText = "Submit to see your results";
                         


                         button.addEventListener('click', () => {
               
                                 boxQuestions.innerHTML = `You got: ${ score  } / 25<h1><button onClick ="location.reload()">Reload</button></h1>`;
                                 boxQuestions.classList.add("boxQuestions");
                        });
            }
        } 
    });
  
}

loadQuiz();



//TIME ......KEEPER....................:::::::::::::::

const timer = document.getElementById('timer');


function secondTimer(){
    let seconds = 41;
    

        setInterval(()=>{
            seconds--       //slows down pers SECOND till reaches to zero
                if(seconds >10){     
                
                timer.innerHTML = seconds;
                }else if(seconds <10 && seconds > deadline){
                    timer.innerHTML = "0"+seconds; 
                    timer.style.color = "red";
                }
                if(seconds === deadline){ firstQuestion++         //if Time is over without selecting the answer, you fail that question
                        radioSelect.forEach((radioSelect)=>{
                            if(radioSelect.checked === false){
                            
                                let currentData = qList[firstQuestion];

                                question.innerText = currentData.qxn;
                                
                                aText.innerText = currentData.a;
                                bText.innerText = currentData.b;
                                cText.innerText = currentData.c;
                                dText.innerText = currentData.d;
                                eText.innerText = currentData.e; 
                                
                            }
                    });
                }
            }, 1000);

            
    
    
}


function loadPageTimer(){
        setInterval(()=>{
            secondTimer();
        }, 41000);
    }

loadPageTimer();


       
                   

// Radio html buttons::::
const radioSelect = document.querySelectorAll('.answers');

function uncheckAnswers(){
    radioSelect.forEach((radioSelect) =>{
        radioSelect.checked = false;
        
    })
    secondTimer(); // each new page, also  New time
    
}

function loadQuiz(){
    button.addEventListener('click', () => {
    
        questionIncrease();
    
            });    
}

           







