/*
 * Complete the solution so that it strips all text 
 * that follows any of a set of comment markers 
 * passed in. Any whitespace at the end of the line 
 * should also be stripped out. 
 * 
 * Example:
 * 
 * input -> apples, pears # and bananas
 * output -> apples, pears
*/

function solution(input, markers) {

    // split the string into an array
    // to separate the lines
    let linesArray = input.split('\n');

    // loop through the array 
    // searching for the comment markers
    for (let i = 0; i < linesArray.length; i++) {
        let markerPosition = -1;
        let currentLine = linesArray[i];

        // is there a marker?
        let counter = 0;
        while (counter < markers.length && 
                markerPosition < 0) {

            markerPosition = currentLine.indexOf(markers[counter]);
            
            ++counter;
        }

        // if there is a marker
        // slice the comment from the line
        if (markerPosition >= 0) {
            linesArray[i] = currentLine.slice(0, markerPosition).trimRight();
        }
        //console.log(linesArray[i]);
    };
    
    // join the array elements into a string
    let result = linesArray.join('\n');
    console.log(result);

    return result;
};

solution("a\nc\nd $e f g", ["%", "$"]);