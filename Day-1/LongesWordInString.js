// 4. Find the Longest Word in a Sentence
// Objective:
// To create a program that finds the longest word in a given sentence.

// Program Explanation:
// The program splits the sentence into words and iterates through them, comparing their lengths to find the longest word. If two words have the same length, the program returns the first one it encounters.


function longestWordInSentence(sentence) {

    let sentenceArray = sentence.split(' ');
    let longestString = "";
    let longestLength = -1;
    for (let i = 0; i < sentenceArray.length; i++) {
        if (longestLength < sentenceArray[i].length) {
            longestLength = sentenceArray[i].length;    // llongestLength will update every time if it is shorter than the string from sentenceArray
            longestString = sentenceArray[i];
        }
    }

    console.log("String = " + longestString + " , Length = " + longestLength);


}

let sentence = "I am working in bestpeers with other employees";  // bestpeers and employees has length 9 and it is printing the first word of length 9 i.e. bestpeers

longestWordInSentence(sentence);