$(".start").on('click', function(){ 
  $(".start").remove();
game.start();
});
$(document).on("click", ".submit", function(){
  game.done();
})
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

var game ={
  correct: 0,
  incorrect: 0,
  counter: 90,
  countdown: function(){
    game.counter --;
    $("#counter").html(game.counter);
    if(game.counter <= 0){
      console.log("Time is up!");
      game.done();
    } 
  },
start: function(){
  timer = setInterval(game.countdown, 1000);
  $(".trivia").prepend("<h2>Time Remaining: <span id='counter'>90</span> Seconds</h2>");
  $(".start").remove();
   for (var i = 0; i < questions.length; i++) {
  questionDiv = $("<div>");
  questionDiv.text(questions[i].question);
  questionDiv.addClass("question" + i);
  $(".trivia").append(questionDiv);

  var radioButtons = createRadios();
  questionDiv.append(radioButtons);

  function createRadios(){
    var radioList =$("<ul>");
    var item;
    var input = "";
  
  for (var j = 0; j < questions[i].options.length; j++) {
    item =$("<li>");

    input= "<input type='radio' name='answer" + i +"'" + "value= '" + j  +"'" + "/>";
    input +=  questions[i].options[j];
    item.append(input);
    radioList.append(item);
  }

  return radioList;
}
};
$(".trivia").append("<br><button class='submit'> Submit </button>");
},
done: function(){
  $.each($('input[name="answer0"]:checked'), function(){
    if($(this).val()==questions[0].correctAnswer){
      game.correct++;
    }else {
      game.incorrect++;
    }
  });
  $.each($('input[name="answer1"]:checked'), function(){
    if($(this).val()==questions[1].correctAnswer){
      game.correct++;
    }else {
      game.incorrect++;
    }
  });
  $.each($('input[name="answer2"]:checked'), function(){
    if($(this).val()==questions[2].correctAnswer){
      game.correct++;
    }else {
      game.incorrect++;
    }
  });
  $.each($('input[name="answer3"]:checked'), function(){
    if($(this).val()==questions[3].correctAnswer){
      game.correct++;
    }else {
      game.incorrect++;
    }
  });
  $.each($('input[name="answer4"]:checked'), function(){
    if($(this).val()==questions[4].correctAnswer){
      game.correct++;
    }else {
      game.incorrect++;
    }
  });
  $.each($('input[name="answer5"]:checked'), function(){
    if($(this).val()==questions[5].correctAnswer){
      game.correct++;
    }else {
      game.incorrect++;
    }
  });
  $.each($('input[name="answer6"]:checked'), function(){
    if($(this).val()==questions[6].correctAnswer){
      game.correct++;
    }else {
      game.incorrect++;
    }
  });
  $.each($('input[name="answer7"]:checked'), function(){
    if($(this).val()==questions[7].correctAnswer){
      game.correct++;
    }else {
      game.incorrect++;
    }
  });
  
  this.result();

},
result: function(){
  clearInterval(timer);
  $(".trivia h2").remove();

  $(".trivia").html("<h2>Here are your results:</h2>");
  $(".trivia").append("<h3>Correct Answers: " + this.correct + "</h3>");
  $(".trivia").append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
  $(".trivia").append("<h3>Unanswered: " + (questions.length-(this.incorrect+this.correct)) + "</h3>");
}
}


