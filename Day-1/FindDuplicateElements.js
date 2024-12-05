// 2. Find Duplicate Elements in an Array
// Objective:
// To create a program that identifies duplicate elements in an array.

// Program Explanation:
// The program uses a Set to track unique elements and another Set to store duplicates. By iterating through the array, it adds duplicates to the second set when an element has already been seen.

// Output:
// The program outputs an array of all duplicate elements.

function findDuplicateElements(arrayOfDuplicates) {
    arrayOfDuplicates.sort();
    console.log(arrayOfDuplicates);
    let newArray = [];
    for (let i = 1; i < arrayOfDuplicates.length - 1; i++) {
        if (arrayOfDuplicates[i - 1] == arrayOfDuplicates[i])   // using slow and fast pointer approach

            if (newArray[newArray.length - 1] != arrayOfDuplicates[i]) {    // checking if newArray already exist the element checking from arrayOfDuplicates

                newArray.push(arrayOfDuplicates[i]);

            }
    }
    console.log(newArray);
}

let arrayOfDuplicates = [1, 2, 2, 2, 2, 2, 3, 4, 4, 5, 5, 7, 1, 2, 1, 2, 4];
findDuplicateElements(arrayOfDuplicates);
