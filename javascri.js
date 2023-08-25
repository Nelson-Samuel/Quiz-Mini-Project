const Quest = [  
    {  
    question: "When was JavaScript introduced?",  
    answers: [  
    {text: "1982", state: false},  
    {text: "1965", state: false},  
    {text: "1995", state: true},  
    {text: "1985", state: false},  
    ]  
    },  
    {  
    question: "Who invented Java Script?",  
    answers: [  
    {text: "W3 Group", state: false},  
    {text: "Brendan Eich", state: true},  
    {text: "Helsinki, Linus", state: false},  
    {text: "James Gosling", state: false},  
    ]  
    },  
    {  
    question: "Which of the following is not javascript data types?",   answers: [  
    {text: " Null type", state: false},  
    {text: "Undefined type", state: false},  
    {text: "Number type", state: false},  
    {text: "All of the mentioned", state: true},   ]  
    },  
     
    {  
    question: "Which of the following scoping type does JavaScript  use?",  
    answers: [  
    {text: "Lexical", state: true},  
    {text: "Local Element", state: false},  
    {text: "Sequential", state: false},  
    {text: "Literal", state: false},  
    ]  
    },  
    {  
    question: "Why JavaScript Engine is needed?", 
    answers: [  
    {text: "Parsing the javascript", state: false},   {text: "Parsing the javascript", state: false},   {text: "Interpreting the JavaScript", state: true},   {text: "Both Compiling & Interpreting", state: false},   ]  
    },  
    {  
    question: "Which of the following is not a framework?",   answers: [  
    {text: "JavaScript .NET", state: false},  
    {text: "JavaScript", state: true},  
    {text: "Cocoa JS", state: false},  
    {text: "jQuery", state: false},  
    ]  
    },  
     
    {  
    question: "Which of the following is not an error in JavaScript?",   answers: [  
    {text: "Missing of Bracket", state: false},  
    {text: "Syntax error", state: false},  
    {text: " Missing of semicolons", state: false},   {text: "Division by zero", state: true},  
    ]  
    },  
    {  
    question: "Who was the Creator of JavaScript?",  
    answers: [  
    {text: "Andrew Tate", state: false},  
    {text: "ElonMusk", state: false},  
    {text: "Tristian Talisman", state: false},  
    {text: "Brendan Erich", state: true},  
    ]  
    },  
    {  
    question: "Which one is also known as Conditional Expression?",   answers: [  
    {text: "Alternative to if-else", state: false},   {text: "immediate if", state: true},  
    {text: "Switch statement", state: false},  
    {text: "If-then-else statement", state: false}, 
    ]  
    },  
    {  
    question: "Which of the following type of a variable is  volatile?",  
    answers: [  
    {text: "Mutable variable", state: true},   {text: "Dynamic variable", state: false},   {text: "Volatile variable", state: false},   {text: "Immutable variable", state: false},   ]  
    }  
   ];  
   var question=document.getElementById("quest");  
   var choice=document.getElementsByName("choice");  var bt1=document.getElementById("bt1");  
   var bt2=document.getElementById("bt2");  
   var bt3=document.getElementById("bt3");  
   var bt4=document.getElementById("bt4");  
   var full=document.getElementById("ani");  
   var pbtn=document.getElementById("pre-btn");  
   var pb1=document.getElementById("pog");  
   var sub=document.getElementById("sub");  
   var nbtn=document.getElementById("next-btn");
   let aw=[2,1,3,0,2,1,3,3,1,0];  
   var currentquest=0;  
   var score=0;  
   var no=1;  
   var ten=0;  
   sub.disabled=true;
   function showQuestion(in1,num){  
   question.innerHTML=num+")"+Quest[in1].question;  
   StoreAnswer(in1);  
   }  
   function StoreAnswer(in1){  
   for(var i=0;i<4;i++){  
   choice[i].value=Quest[in1].answers[i].text;  
    }  
    showAnswer(in1);  
   }  
   function showAnswer(in1){  
    bt1.innerHTML=Quest[in1].answers[0].text;  
    bt2.innerHTML=Quest[in1].answers[1].text;  
    bt3.innerHTML=Quest[in1].answers[2].text; 
    bt4.innerHTML=Quest[in1].answers[3].text;  }  
   function sub1(){  
    showScore(); 
    nbtn.disabled=false;  
   }  
   function showScore(){  
   full.style.display="none";  
   full.style.display="block";  
   question.innerHTML=`Your Score is ${score}`;  if(score<5){  
    full.innerHTML="<strong>Keep Practicing!!</strong>";  }  
    else if(score>5 && score<8){  
    full.innerHTML="<strong>!!Excellent!!</strong>";   } 
    else{  
    full.innerHTML="<strong>Good Job!!!!</strong>";  }  
   }  
   function prebtn1(){  
    if(currentquest==0){  
    alert("There is no previous Section");   }  
    else if(currentquest==10){  
    pbtn.style.cursor.no-drop;  
    alert("Quiz game is over");  
    return 0;  
    score--;
    }  
    else{  
    ten=ten-10;  
    pb1.style="width:"+ten+"%";  
    pb1.innerHTML=ten+"%";  
    currentquest--;  
    no--;  
    pb1.style.width 
    showQuestion(currentquest,no);   }  
   }  
   function nxtbtn1(){  
    var Select=false;  
    for(var j=0;j<4;j++){  
    if (choice[j].checked==true){  
    Select=true;
    }  
    }  
    if(Select==false){  
    alert("Select any option");  
    return;  
    }
    let in2 = currentquest;  
    var j;  
    var t;  
    for (j= 0; j< choice.length; j++) {  
    if(Quest[in2].answers[j].state==true){  
         t=j;  
    }  
    }  
    for (j= 0; j < choice.length; j++) {  
    if (choice[j].checked){  
    if(choice[j].value==Quest[in2].answers[t].text){    
    score++;  
    }  
    else{  
    }  
    }  
    }    
    if(currentquest==9){ 
    currentquest++;  
    ten=ten+10;  
    pb1.style="width:"+ten+"%";  
    pb1.innerHTML=ten+"%";
    alert("After finish All the Question click Submit");
    var j;  
    var t;  
    for (j= 0; j< choice.length; j++) {  
    if(Quest[in2].answers[j].state==true){  
         t=j;  
    }  
    }  
    for (j= 0; j < choice.length; j++) {  
    if (choice[j].checked){  
    if(choice[j].value==Quest[in2].answers[t].text){    
    score++;  
    }  
    else{  
    }  
    }  
    }    
    sub.disabled=false;
    nbtn.disabled=true;
    }  
    else if(currentquest==10){ 
    alert("Thank You!!");  
    }  
    else{  
    currentquest++;  
    no++;  
    ten=ten+10;  
    pb1.style="width:"+ten+"%";  
    pb1.innerHTML=ten+"%";  
    showQuestion(currentquest,no);  
     
    }  
    for(var j=0;j<4;j++){  
    choice[j].checked=false;  
    }  
   }  
   showQuestion(currentquest,no);  
   
