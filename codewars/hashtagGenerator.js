function generateHashtag (str) {
    if (str === '') return false;
    let result = "#";
    let wordsArr = str.split(' ').filter(x => x !== '');

    wordsArr.forEach(word => {
        result = result + word.charAt(0).toUpperCase() + word.slice(1);
    });

    if (result.length <= 1 || result.length > 140) return false;

    return result;
}

console.log(generateHashtag(" ".repeat(200)));
