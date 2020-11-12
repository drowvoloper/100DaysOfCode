const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// variables
//const steps = ['race', 'class', 'alignment', 'scores', 'skills', 'equipment', 'name'];
const stepsList = ['race', 'class'];
let indexStep = 0;
let currentStep = stepsList[indexStep];
const steps = {
    race: [
        {
            question: 'What is your race?\n',
            answers: ['human', 'elf']
        }
    ],
    class: [
        {
            question: 'What is your class?\n',
            answers: ['rogue', 'ranger']
        },
        {
            question: 'What is your background?\n',
            answers: ['black', 'white']
        }
    ]
};
let indexQuestion = 0;
let currentQuestion = steps[currentStep][indexQuestion].question;
let possibleAnswers = steps[currentStep][indexQuestion].answers;


// intro 
const intro = `Welcome, adventurer. My name is Mur and I'm here to help you build an awesome, unique character! Are you ready?
a. Yess. Let's do this!
b. No, sorry. Maybe later.\n`;

rl.question(intro, (answer) => {
    if (answer.trim().toLowerCase() === 'a') {
        //console.log('yayy');
        console.log(currentQuestion);
        rl.on('line', (answer) => {
            console.log(possibleAnswers);

            if (indexQuestion < steps[currentStep].length) {
                ++indexQuestion;
                currentQuestion = steps[currentStep][indexQuestion].question;
                possibleAnswers = steps[currentStep][indexQuestion].answers;
            } else {
                ++indexStep;
                currentStep = stepsList[indexStep];
                indexQuestion = 0;
                currentQuestion = steps[currentStep][indexQuestion].question;
                possibleAnswers = steps[currentStep][indexQuestion].answers;
            }

            console.log(currentQuestion);
        });
    } else {
        rl.close();
    }
});

// app closed
rl.on('close', () => console.log('bye, bye :('));
