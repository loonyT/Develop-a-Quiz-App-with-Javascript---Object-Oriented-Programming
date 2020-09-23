function populate () {
    
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        //show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;
        
        //show choices
        
        var choices = quiz.getQuestionIndex().choices;
        for (var i =0; i <choices.length; i++) {
            
           var element = document.getElementById("choices" + i );  
            element.innerHTML = choices[i];
            //detect if the user has clicked correct answer or no
            
         guess("btn" + i,choices [i] );   
            
        }
        
    showProgress();
        
        
    }
};


function guess(id, guess) {
    
    var button = document.getElementById(id);
    button.onclick = function () {
        quiz.guess(guess);
        populate();
    }
    
};


function showProgress() {
    
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question" + currentQuestionNumber + "of " + quiz.questions.length;
    
}





function showScores() {
    
    var gameOverHtml = "<h1>Result</h1>";
    gameOverHtml += "<h2 id ='score'> your scores : " + quiz.scores + " </h2>;
  var element =  document.getElementById("quiz");
    element.innerHTML = gameOverHtml;
} 


var questions = [
     new Question("Which one is not an object oriented programming language?", ["your mum", "C#", "C++", "Python"], "C"),
     new Question("Which languages are used for styling web pages", ["HTML", "Donald Trump", "CSS", "XML"], "CSS"),
     new Question("There are ___  main components of object oriented programming. ", ["1", "666", "2", "4"], "4"),
     new Question("Which language is used for web app", ["PHP", "python", "javascript", "All"], "All"),
     new Question("MVC is a ___", ["language", "Library", "framework", "all"], "Framework")
];


var quiz = new Quiz(questions); 


