/*
Conceptual description:
Insertion sort is a simple sorting algorithm that builds the final sorted array (or list) 
one item at a time.
At each iteration, it removes one element from the input data, finds the location it belongs within 
the sorted list, and inserts it there. It repeats until no input elements remain.

Time Complexity: O(n^2)
Space Complexity: O(n)
*/

import { swap } from "./utils.js";

export const insertionSort = (array) => {
    const sortedArray = [...array];

    for(let i = 1; i < array.length; i++){
        let j = i;

        while(j > 0 && sortedArray[j-1] > sortedArray[j]){
            swap(sortedArray, j-1, j);
            j--;
        }
    }
    
    return sortedArray;
}

//insertionSort([1, 6, 4, 78, 45, 56, 34, 7, 23, 9]);