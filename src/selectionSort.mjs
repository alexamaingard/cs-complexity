/*
Conceptual description:
The selection sort algorithm sorts an array by repeatedly finding the minimum element 
(considering ascending order) from unsorted part and putting it at the beginning. 
The algorithm maintains two subarrays (one which is already sorted and remaining subarray which 
is unsorted.).

Time Complexity: O(n^2)
Space Complexity: O(n)
*/

import { swap } from "./utils.js";

export const selectionSort = (array) => {
    const sortedArray = [...array];

    for(let i = 0; i < array.length - 1; i++){
        let minIndex = i;

        for(let j = i + 1; j < array.length; j++){
            if(sortedArray[j] < sortedArray[minIndex]){
                minIndex = j;
            }
        }

        swap(sortedArray, minIndex, i);
    }

    return sortedArray;
} 

//selectionSort([1, 6, 4, 78, 45, 56, 34, 7, 23, 9]);
