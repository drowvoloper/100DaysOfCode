const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// questions
const questions = [
    {
        question: 'What is your class?\n',
        answers: ['barbarian', 'fighter', 'ranger', 'rogue', 'cleric', 'druid', 'monk', 'paladin', 'bard', 'sorcerer', 'warlock', 'wizard'],
        chosen: null
    },
    {
        question: 'What is your race?\n',
        answers: ['human', 'elf', 'dwarf', 'halfling', 'half-elf', 'half-orc', 'gnome', 'dragonborn', 'tiefling'],
        chosen: null
    }
]

// intro 
const intro = `Welcome, adventurer. My name is Mur and I'm here to help you build an awesome, unique character! Are you ready?
a. Yess. Let's do this!
b. No, sorry. Maybe later.\n`;
