/*
Conceptual description:
Bubble Sort works by repeatedly swapping the adjacent elements if they are in wrong order.
After the data is sorted, the algorithm needs one final whole pass without any swap to know it is sorted.

Time Complexity: O(n^2)
Space Complexity: O(n) [Reasoning: O(n + 1) => O(n)]
*/

import { swap } from "./utils.js";

export const bubbleSort = (array) => {
    const t0 = performance.now();
    const sortedArray = [...array];

    for(let i = 0; i < array.length; i++){
        for (let j = 0; j < array.length; j++){
            if(sortedArray[j] > sortedArray[j+1]){
                swap(sortedArray, j, j+1);
            }
        }
    }
    const t1 = performance.now();
    console.log(`Call to bubbleSort took ${t1 - t0} milliseconds.`)
    return sortedArray;
}

// bubbleSort([1, 6, 4, 78, 45, 56, 34, 7, 23, 9]);