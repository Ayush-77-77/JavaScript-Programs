// Program Explanation:
// The program removes non-alphanumeric characters and converts the string to lowercase. It then compares the cleaned string with its reverse to determine if it is a palindrome.

// Output:
// The program outputs true if the string is a palindrome and false otherwise.


function palindromeCheck(alphabetString) {

    // checking string palindrome using two pointer approach

    if (alphabetString.length == 0) {
        console.log("String is empty");   // checking for empty string : edge case
        return;
    }

    
    let start = 0;
    let end = alphabetString.length - 1;
    let isPalindrome = true;
    while (start < end) {
        if (alphabetString[start] != alphabetString[end]) {
            isPalindrome = false;
        }
        start++;
        end--;
    }
    if (isPalindrome) {
        console.log("String is Palindrome");
    }
    else {
        console.log("String is not palindrome");
    }

}


function ignoreNumeric(sentence) {
    let alphabetString = ""
    sentence = sentence.toLowerCase();
    for (let i = 0; i < sentence.length; i++) {
        if ((sentence[i] >= 'a' && sentence[i] <= 'z')) {
            alphabetString = alphabetString + sentence[i];
        }
    }
    palindromeCheck(alphabetString);

}


let sentence = "52626"
ignoreNumeric(sentence)