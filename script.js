// start the quiz
function lookForButton() {
  $(".startingPoint").on("click", event => {
    console.log("Hello");
    window.location.href="https://Quiz-App-Wireframe.bennettcritch.repl.co/Html's/questionPage.html"
  });
};

// --------------------------------------------------------------------------------------------------

// correct/false answers

function checkCorrectAnswer() {
  $(".answerButton").on("click", event => {
    console.log("answer!");
    window.location.href="https://Quiz-App-Wireframe.bennettcritch.repl.co/Html's/correctOrFalsePage.html"
  });
};

// ---------------------------------------------------------------------------------------------------


function handleFunctions() {
  lookForButton();
  checkCorrectAnswer();
};

$(handleFunctions());