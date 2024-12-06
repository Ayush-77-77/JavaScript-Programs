// Program to check if string is palindrome using recursion

function stringPalindrome(string, index) {

    if (string === "") {
        return false;
    }
    if (index >= string.length / 2) {
        return true;
    }


    if (string[index] !== string[string.length - 1 - index]) {
        return false;
    }
    return stringPalindrome(string, index + 1);




}


console.log(stringPalindrome("MAAADAAA1M", 0));
