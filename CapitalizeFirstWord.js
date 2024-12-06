// 3. Capitalize the First Letter of Each Word
// Objective:
// To write a program that capitalizes the first letter of each word in a given sentence.

// Program Explanation:
// The program splits the sentence into individual words, capitalizes the first letter of each word, and rejoins them to form the updated sentence.

function capitalizeFirstWord(sentence)
{
    
    let sentenceArray = sentence.split(' ');
    let newString ="";
    for(let i =0; i<sentenceArray.length;i++)
    {
        let firstCharacter=sentenceArray[i].charAt(0);
     
        sentenceArray[i]= sentenceArray[i].replace(firstCharacter, firstCharacter.toUpperCase()); // Replacing the first character to its UpperCase
        newString = newString + sentenceArray[i] + " ";
        
    }
    
    console.log(newString.trim());   // it will trim the last space


}

let sentence = "I am working in Bestpeers";
capitalizeFirstWord(sentence);