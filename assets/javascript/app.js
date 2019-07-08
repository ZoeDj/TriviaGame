// $(document).ready() {

// global variables __________________________________________________________
// var correctAnswer;
// var wrongAnswer;
// var score=0;


//   function __________________________________________________________

//   main process __________________________________________________________

$(".start").on('click', function(){ 
    $(this).empty();

    var userAnswer;
    var correctAnswerIndex;
    var questionDiv;
    var optionAns;

var questions = [
    {question: "Who does Pam marry?",
    options: ["Roy","Jim","Stanley", "Andy"],
    correctAnswer: 1
    },
    {question: "What’s the name of the company they work at?",
    options: ["Dunder Muffin", "Mifflin Dunder", "Dunder Mifflin", "The Dunder Mifflin"],
    correctAnswer: 2
    },
    {question: "Where is Dunder Mifflin building located?",
    options: ["Indiana", "Illinois", "Pennsylvania", "Ohio"],
    correctAnswer: 2
    },
    {question: "What does the company sell?",
    options: ["Paper", "Toys", "Shoes", "Candy"],
    correctAnswer: 0
    },
    {question: "Who’s stapler does Jim put in Jello?",
    options: ["Toby", "Phyllis", "Darryl", "Dwight"],
    correctAnswer: 3
    },
    {question: "What is Schrute Farms’ main crop?",
    options: ["Corn", "Beets", "Spinach", "Sweet Peas"],
    correctAnswer: 1
    },
    {question: "What kind of car does Michael own?",
    options: ["1982 Ferrari 308", "2004 Chrysler Sebring", "2000 Jeep Wrangler", "1995 Honda Civic"],
    correctAnswer: 1
    },
    {question: "Who becomes the manager in season 8?",
    options: ["Andy", "Jim", "Dwight", "Kevin"],
    correctAnswer: 0
    }
];

    
for (var i=0; i < 8; i++){
    questionDiv = $("<div>");
    questionDiv.text(questions[i].question);
    $(".question").append(questionDiv);
for (var j=0; j < 4; j++){
    optionAns = $("<button>");
    optionAns.text(questions[i].options[j]);
    optionAns.addClass("this-option");
    optionAns.attr({"data-option": j});
    $(".question").append(optionAns);
  };
};  

    
    $(".this-option").click(function(){
        // alert(questions[i].correctAnswer); -how do I get a value of the corect answer?
        
    
    // $(this).attr("data-option") this works


    //    if ($(this).attr("data-option")=== questions[i].correctAnswer){
    //        if (userAnswer === correctAnswerIndex) {
    //         alert("yes!");
    //     }
    //     else {
    //         alert("no!");
    //    }
    //    }
    });
  


    
});
