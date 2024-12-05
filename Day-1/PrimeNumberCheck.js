// 1. Find Prime Numbers up to a Given Number
// Objective:
// To write a program that identifies all prime numbers up to a given number.

// Program Explanation:
// A prime number is a number greater than 1 that is divisible only by 1 and itself. The program iterates through numbers from 2 to the given number, checking each one for primality. A helper function determines if a number is prime by ensuring it has no divisors other than 1 and itself.

// Output:
// The program lists all prime numbers up to the given number.

function printAllPrimeNumbers(number) {
    let isPrimeNumber = true;
    if(number<=1)
    {
        console.log("Invalid Input!!!! please input value greater than 1 ");  // Handling Edge case
    }
    else{

        for (let i = 2; i <= number; i++) {
            isPrimeNumber = true;
            for (let j = 2; j * j <= i; j++) {
                if (i % j == 0) {
                    isPrimeNumber = false;
                    break;
                }
                
            }
            if (isPrimeNumber) {
                console.log(i);
            }
        }
    }
        
}

const number = 100;
printAllPrimeNumbers(number);