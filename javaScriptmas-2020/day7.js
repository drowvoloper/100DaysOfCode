function countVowelConsonant(str) {
    // a, e, i, o, u - 1 point
    // consonants - 2 points
    const vocals = 'aeiou';
    const splittedString = str.split('');
    
    const sum = splittedString.reduce((total, letter) => {
        if (vocals.includes(letter)) {
            return total + 1;
        }
        
        return total + 2;
    }, 0);
    
    return sum;
  }