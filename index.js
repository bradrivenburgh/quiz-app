'use strict';

// ----DATA----

// Global object that stores questions, answer choices, correct answers, and the progress tracker
const STORE = {
    questions: [
    //1
    {
        question: "What are the three major types of wine?",
        option1: "good wine, mediocre wine, bad wine",
        option2: "table wine, sparkling wine, fortified wine",
        option3: "expensive wine, cheap wine, two-buck chuck",
        option4: "French wine, Italian wine, Argentinian wine",
        answer: 'option2'
    },
    //2
    {
        question: "What grape species is the vast majority of the world's wine made from?",
        option1: "vitis labrusca",
        option2: "vitis riparia",
        option3: "vitis vinifera",
        option4: "vitis rotundifolia",
        answer: 'option3'
    },
    //3
    {
        question: "What country produced the most wine by volume in 2019?",
        option1: "Italy",
        option2: "Spain",
        option3: "France",
        option4: "China",
        answer: 'option1'
    },
    //4
    {
        question: "Which of the following statements below is false?",
        option1: "a bottle of wine is about 85% water",
        option2: "wine will increase HDL and decrease LDL cholesterol when consumed in moderation",
        option3: "the formula for fermentation is sugar + yeast = alcohol + carbon dioxide",
        option4: "table wines have between 17 and 22 percent alcohol",
        answer: 'option4'
    },
    //5
    {
        question: "What does the term \"brix\" refer to in winemaking?",
        option1: "the alcohol level of the wine",
        option2: "the measure of sugar in grapes",
        option3: "the measure of yeast mixed into the wine juice",
        option4: "the name of concrete tanks used to age wine",
        answer: 'option2'
    },
    //6
    {
        question: "When are the majority of grapes typically harvested in the northern hemisphere?",
        option1: "January through March",
        option2: "March through May",
        option3: "May through July",
        option4: "August through October",
        answer: 'option4'
    },
    //7
    {
        question: "What gives wine its color (for example, red vs white)?",
        option1: "the grape skins",
        option2: "food coloring",
        option3: "the yeast used in fermentation",
        option4: "the grape flesh",
        answer: 'option1'
    },
    //8
    {
        question: "What does the term \"vintage\" refer to?",
        option1: "the region where the wine was produced",
        option2: "the volume of wine produced by a winery in a given year",
        option3: "the year the wine was produced",
        option4: "the amount of dust on bottle",
        answer: "option3"
    },
    //9
    {
        question: "In wine tasting, what is meant by a \"horizontal\"?",
        option1: "tasting wines from different vintages",
        option2: "tasting wines from the same region",
        option3: "tasting wines from the same vintage",
        option4: "tasting wines made from the same varietal",
        answer: "option3"
    },
    //10
    {
        question: "Which of the following grape varietals can produce a red wine?",
        option1: "albariño",
        option2: "chardonnay",
        option3: "tempranillo",
        option4: "riesling",
        answer: "option3"
    }
    ],
    //Progress tracker data
    currentQuestion: 0,
    score: 0
};


// ----Functions----

// Start the quiz
function startQuiz() {
    $('#js-start').click(event => {
        renderQuestion();
    });
}

// Render a question to the html document
function renderQuestion() {
    $('.wrapper').html(getQuestion(STORE));
}

// Render the question template and populate it with data from the STORE array
function getQuestion(STORE) {
    return `
    <section class="js-progress-tracker">
    <span id="js-question-tracker">Question: ${STORE.currentQuestion + 1} / ${STORE.questions.length}</span>
    <span id="js-score"> Score: ${STORE.score}</span>
</section>
<section class="js-quiz-wrapper">
    <form action="" method="POST" class="js-form">
        <fieldset>
            <legend>${STORE.questions[STORE.currentQuestion].question}</legend>
                <span class="flex-input">
                    <input id="option1" type="radio" name="answer" value="option1">
                    <label for="option1">${STORE.questions[STORE.currentQuestion].option1}</label>
                </span>
                <span class="flex-input">
                    <input id="option2" type="radio" name="answer" value="option2">
                    <label for="option2">${STORE.questions[STORE.currentQuestion].option2}</label>
                </span>
                <span class="flex-input">
                    <input id="option3" type="radio" name="answer" value="option3">
                    <label for="option3">${STORE.questions[STORE.currentQuestion].option3}</label>
                </span>
                <span class="flex-input">
                    <input id="option4" type="radio" name="answer" value="option4">
                    <label for="option4">${STORE.questions[STORE.currentQuestion].option4}</label>
                </span>
        </fieldset>
        <button type="submit">Submit</button>
    </form>
</section>
`
}

// Update Progress tracker data

// Increment the question number
function updateQuestionNumber() {
    STORE.currentQuestion++;
}

// Increment the score
function updateScore() {
    STORE.score++;
}

// Submit the answer
function submitAnswer() {
    $('.wrapper').submit(function(event) {
        event.preventDefault();
        checkAnswer(event);        
    });
}

// Check if it is correct; prevent submission of an empty input. 
function checkAnswer(event) {
    let correctAnswer = STORE.questions[STORE.currentQuestion].answer;
    
    if ($("input[name='answer']:checked").val() === undefined) {
        alert("Please select an answer");
    } else if ($("input[name='answer']:checked").val() != correctAnswer) {
        renderIncorrect(correctAnswer);
    } else {
        updateScore();
        renderCorrect();
    }
}

// Display a 'correct answer' screen if submitted answer is correct; increment question number
function renderCorrect() {
    $('.wrapper').html(`            
    <section class="js-progress-tracker">
    <span id="js-question-tracker">Question: ${STORE.currentQuestion + 1} / ${STORE.questions.length}</span>
    <span id="js-score"> Score: ${STORE.score}</span>
    </section>
    <p>Cheers! That's the right answer.</p>
    <img src="images/cheers-correct.svg" alt="champagne flutes clinking in celebration">
    <p>You might be an oenophile!</p>
    <button id="js-nextQ">Next Question</button>
`);
    updateQuestionNumber();
}

// Display an 'incorrect answer' screen if submitted answer is incorrect; increment question number
function renderIncorrect(correctAnswer) {
    $('.wrapper').html(`            
    <section class="js-progress-tracker">
    <span id="js-question-tracker">Question: ${STORE.currentQuestion + 1} / ${STORE.questions.length}</span>
    <span id="js-score"> Score: ${STORE.score}</span>
    </section>
    <p>That's the wrong answer.</p>
    <img src="images/broken-glass-incorrect.png" alt="cracked wine glass">
    <p>The right answer was:</p>
    <p><em>${STORE.questions[STORE.currentQuestion][correctAnswer]}</em></p>
    <button id="js-nextQ">Next Question</button>
`);
    updateQuestionNumber();
}

// Proceed to the next question or end quiz and display results if no questions are left
function renderNextQuestion() {
    $('.wrapper').on('click', '#js-nextQ', event => { 
        ((STORE.currentQuestion + 1) <= STORE.questions.length) ? renderQuestion() : renderResults();
    });
}

// Render the results content. Display the pass screen if the score is greater than or equal to 60%. 
// Display the fail screen if the score is less than 60%.  Provide a reset button. 
function renderResults() {
    if (STORE.score >= 6) {
        $('.wrapper').html(
            `<section class="js-progress-tracker">
            <span id="js-question-tracker">Question: ${STORE.currentQuestion} / ${STORE.questions.length}</span>
            <span id="js-score"> Score: ${STORE.score}</span>
            </section>
        
            <p>You sure know a lot about wine!</p>
            <img src="images/champagne-win.svg" alt="champagne bottle popping its cork">
            <p>Your score was <span id="js-score">${STORE.score} / ${STORE.questions.length}</span></p>
            <button id="js-restart" type="button">Restart Quiz</button>
            `);
    } else {
        $('.wrapper').html(
            `<section class="js-progress-tracker">
            <span id="js-question-tracker">Question: ${STORE.currentQuestion} / ${STORE.questions.length}</span>
            <span id="js-score"> Score: ${STORE.score}</span>
            </section>
        
            <p>You must be more of a beer person...</p>
            <img src="images/beer-lose.svg" alt="image of generic beer can">
            <p>Your score was <span id="js-score">${STORE.score} / ${STORE.questions.length}</span></p>
            <button id="js-restart" type="button">Restart Quiz</button>
            `);
    }
}

// Reset the quiz
function restartQuiz() {
    $('.wrapper').on('click', '#js-restart', event => {
        STORE.currentQuestion = 0;
        STORE.score = 0;
        renderQuestion();
    });
}

// Calls primary functions to run quiz
function handleQuiz() {
    startQuiz();
    submitAnswer();
    renderNextQuestion();
    restartQuiz();
}

$(handleQuiz);