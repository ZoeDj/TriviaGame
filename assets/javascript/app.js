$(".start").on('click', function(){ 

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

 
  for (var i = 0; i < questions.length; i++) {
  questionDiv = $("<div>");
  questionDiv.text(questions[i].question);
  questionDiv.addClass("question" + i);
  $(".question").append(questionDiv);

  var radioButtons = createRadios();
  questionDiv.append(radioButtons);

  function createRadios(){
    var radioList =$("<ul>");
    var item;
    var input = "";
  
  for (var j = 0; j < questions[i].options.length; j++) {
    item =$("<li>");

    input= "<input type='radio' name='answer" + i +"'" + "value= " + j  + "/>";
    input +=  questions[i].options[j];
    item.append(input);
    radioList.append(item);
  }

  return radioList;
}
};
$(".question").append("<br><button class='submit'> Submit </button>");

//I've struggled to find a way to submit user answers.
//If every questions got an answer, all answers would be pushed in array called choices.
//Choices array would be compare with the right answers.
//for every correct answer amountCorrect++;


  var choices = [];
  
  $('input[name=answer0]').on('click', function(){ 
    choices.push($('input[name=answer0]:checked').val());
  });
  $('input[name=answer1]').on('click', function(){ 
    choices.push($('input[name=answer1]:checked').val());
  });
  $('input[name=answer2]').on('click', function(){ 
    choices.push($('input[name=answer2]:checked').val());
  });
  $('input[name=answer3]').on('click', function(){ 
    choices.push($('input[name=answer3]:checked').val());
  });
  $('input[name=answer4]').on('click', function(){ 
    choices.push($('input[name=answer4]:checked').val());
  });
  $('input[name=answer5]').on('click', function(){ 
    choices.push($('input[name=answer5]:checked').val());
  });
  $('input[name=answer6]').on('click', function(){ 
    choices.push($('input[name=answer6]:checked').val());
  });
  $('input[name=answer7]').on('click', function(){ 
    choices.push($('input[name=answer7]:checked').val());
  })
  var result = $("<div class=result></div>");
    $(".result").text(choices);

});
