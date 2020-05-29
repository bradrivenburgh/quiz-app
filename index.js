'use strict';

// Store questions and progress tracker data here

const STORE = [
    //1
    {
        question: "What are the three major types of wine?",
        option1: "good wine, mediocre wine, bad wine",
        option2: "table wine, sparkling wine, fortified wine",
        option3: "expensive wine, cheap wine, two-buck chuck",
        option4: "French wine, Italian wine, Argentinian wine",
        answer: option2
    },
    //2
    {
        question: "What grape species is the vast majority of the world's wine made from?",
        option1: "vitis labrusca",
        option2: "vitis riparia",
        option3: "vitis vinifera",
        option4: "vitis rotundifolia",
        answer: option3
    },
    //3
    {
        question: "What country produced the most wine by volume in 2019?",
        option1: "Italy",
        option2: "Spain",
        option3: "France",
        option4: "China",
        answer: option1
    },
    //4
    {
        question: "Which of the following statements below is false?",
        option1: "a bottle of wine is about 85% water",
        option2: "wine will increase HDL and decrease LDL cholesterol when consumed in moderation",
        option3: "the formula for fermentation is sugar + yeast = alcohol + carbon dioxide",
        option4: "table wines have between 17 and 22 percent alcohol",
        answer: option4
    },
    //5
    {
        question: "What does the term \"brix\" refer to in winemaking?",
        option1: "the alcohol level of the wine",
        option2: "the measure of sugar in grapes",
        option3: "the measure of yeast mixed into the wine juice",
        option4: "the name of concrete tanks used to age wine",
        answer: option2
    },
    //6
    {
        question: "When are the majority of grapes typically harvested in the northern hemisphere?",
        option1: "January through March",
        option2: "March through May",
        option3: "May through July",
        option4: "August through October",
        answer: option4
    },
    //7
    {
        question: "What gives wine its color (for example, red vs white)?",
        option1: "the grape skins",
        option2: "food coloring",
        option3: "the yeast used in fermentation",
        option4: "the grape flesh",
        answer: option1
    },
    //8
    {
        question: "What does the term \"vintage\" refer to?",
        option1: "the region where the wine was produced",
        option2: "the volume of wine produced by a winery in a given year",
        option3: "the year the wine was produced",
        option4: "the amount of dust on bottle",
        answer: option3
    },
    //9
    {
        question: "In wine tasting, what is meant by a \"horizontal\"?",
        option1: "tasting wines from different vintages",
        option2: "tasting wines from the same region",
        option3: "tasting wines from the same vintage",
        option4: "tasting wines made from the same varietal",
        answer: option3
    },
    //10
    {
        question: "Which of the following grape varietals can produce a red wine?",
        option1: "albariño",
        option2: "chardonnay",
        option3: "tempranillo",
        option4: "riesling",
        answer: option3
    },
    // Progress Tracker
    {
        currentQuestion: ,
        score: 
    }
];


// Click the start button to begin quiz

function startQuiz() {
    console.log('startQuiz() ran');
    $('#js-start').click(event => {
        renderQuestion();
    });
}

// Render the progress-tracker and first quiz question

function renderQuestion() {
    console.log('renderQuestion() ran');
    
}

// Submit answer and check if it is correct; prevent submission
// of an empty form.

function submitAnswer() {
    console.log('submitAnswer() ran');
}

// Update progress tracker

function updateProgressTracker() {
    console.log('updateProgressTracker() ran');
}

// Display either correct or incorrect content

function renderCorrect() {
    console.log('renderCorrect() ran');
}

function renderIncorrect() {
    console.log('renderIncorrect() ran');
}

// Click on the next question button to proceed to the next question

function renderNextQuestion() {
    console.log('renderNextQuestion() ran');
}

// Repeat steps 3-7 until all 10 questions have been answered

// Display the pass (greater than 60% correct) or fail (less 
// than 60% correct) content that includes a reset button

function renderResults() {
    console.log('renderResults() ran');
}

// If the user clicks the reset button reset their data and load
// the first question

function resetQuiz() {
    console.log('resetQuiz() ran');
}

function handleQuiz() {
    startQuiz();
    renderQuestion();
    submitAnswer();
    updateProgressTracker();
    renderCorrect();
    renderIncorrect();
    renderNextQuestion();
    renderResults();
    resetQuiz();
}

$(handleQuiz);