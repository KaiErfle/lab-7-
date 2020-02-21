// var answer = "B";
var data = {
    qnum:0,
    questions:[
        {
            title:"What comes after A",
            answer:"B",
            bgcolor:"purple"
        },
        {
            title:"Is 5 bigger than 4",
            answer: "yes",
            bgcolor: "blue",
        },
        
        {   title:"What color is a banana",
            answer: "Yellow",
            bgcolor: "Yellow",
        },
        {   title:"What is 5 + 5?",
            answer: "10",
            bgcolor: "pink",
        },
        {   title:"Who is the best",
            answer: "me",
            bgcolor: "green",
        },
    ]
};
var qnum = 0;

var questions = [
    "What comes after A?",
    "Is 5 bigger than 4?",
    "What is the colour of a banana?",
    "What is 5 + 5?",
    "Who is the best"
];

var answers = [
    "B",
    "Yes",
    "Yellow",
    "10",
    "Me"
];

var bgcolor = [
    "purple",
    "blue",
    "yellow"
];

function Start(){
    document.querySelector("#k_q").innerText = data.questions[data.qnum].title;
        document.body.style.backgroundColor = data.questions[data.qnum].bgcolor;
}

function CheckAnswer(){
    var myInp = document.querySelector("#answer").value;
    console.log(myInp);
    if(myInp === data.questions[data.qnum].answer){
        document.querySelector("#k_r").innerHTML = "<h1>Correct!</h1>";

        data.qnum++;
        document.querySelector("#k_q").innerText = data.questions[data.qnum].title;
        document.body.style.backgroundColor = data.questions[data.qnum].bgcolor;
        

    //     if(qnum === 1){
    //         qnum ++;
    //     document.querySelector("#h_q").innerHTML = "is 5 bigger than 4?"
    //     answer = "Yes";
    // } else if(qnum === 2){
    //     qnum ++;
    //     document.querySelector("#h_q").innerHTML = "What colour is a banana?";
    //     answer = "Yellow";
    //     } 
    
    } else{
        document.querySelector("#k_r").innerText = "<h1>Wrong!</h1>";
    }

}

Start()