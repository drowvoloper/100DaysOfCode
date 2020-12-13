/*
DESCRIPTION:
In this challenge a casino has asked you to make an online dice that works just like 
it would in real life. Using the pre-made dice face that represents ‘one’, make the 
faces for ‘two’, ‘three’, ‘four’, ‘five’ and ‘six’. Now when the users clicks the 
dice on the screen the dice is expected to show one of the faces randomly.

event listeners, Math.random()

*/

// Write your code here 👇
const roll = () => {
    return Math.floor(Math.random() * 6) + 1;
}

const dice = document.querySelector('.dice');
const dots = document.querySelector('.dot');

dice.addEventListener('click', () => {
    dots.className = 'dot';
    const result = roll();
    let className = '';
    
    switch(result) {
        case 2: className = 'dot--2'; break;
        case 3: className = 'dot--3'; break;
        case 4: className = 'dot--4'; break;
        case 5: className = 'dot--5'; break;
        case 6: className = 'dot--6'; break;
        default: className = ''; break;
    }
    
    if (className !== '') {
        dots.classList.add(className);
    }
})

/*

DETAILED INSTRUCTIONS
1. pick out the neccesary elements from the HTML
2. Create other 5 dice faces in CSS
3. use eventlisteners on the appropriate div
4. Display dice faces randomly on click

STRETCH GOALS:
- Can you show the number you rolled as a integer along-side the dice face?
- Can you improve the overall design?
*/