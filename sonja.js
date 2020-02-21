
    var qnum[]

    var questions = [ 
        "What is my favourite animal?",
        "wht is my least favourite animal?",
    ];

    var answers = [
        "Horses",
        "Spiders",
    ];

    var data = {
        qnum = 0, 
        questions:[
            {
                title: "What is my favourite animal?",
                answer: "Horses";
                bgcolor: "blue";
            },
            {
                title: "What is my lease favourite animal?",
                answer: "Spiders";
                bgcolor: "red";
            },
        ]
    }

function CheckAnswer(){
    var myInp = document.querySelector("#answer").value;

    if (myInp === answer [qnum]){
    //}
        //Answer = "Horses"
        document.querySelector("#answer").innerHTML = "correct";
        qnum ++;
        document.querySelector("alt").innertext = questions[qnum];
        //answer= "spiders";
   // } else {
        //document.querySelector("#alt").innertext = "wrong";
   // }
//}