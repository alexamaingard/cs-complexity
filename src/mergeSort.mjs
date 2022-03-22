/*
Conceptual description:
Merge Sort divides the input array into two halves, calls itself for the two halves, 
and then merges the two sorted halves. 
It divides the unsorted list into n sublists, each containing one element (considered sorted).
Repeatedly merge sublists to produce new sorted sublists until there is only one sublist remaining. 
This will be the sorted list.

Time Complexity: O(n log(n)) 
Space Complexity: O(n) [Reasoning: O(n + log(n)) => O(n) ]
*/

const merge = (left, right) => {
    const sortedArray = [];

    let leftIndex = 0;
    let rightIndex = 0;

    while(leftIndex < left.length && rightIndex < right.length){
        if(left[leftIndex] < right[rightIndex]){
            sortedArray.push(left[leftIndex]);
            leftIndex++;
        }
        else {
            sortedArray.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return sortedArray.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

export const mergeSort = (array) => {
    if (array.length < 2){
        return array;
    }

    //To calculate the middle point I'm assuming the starting point is always zero
    // => 0 + (length - 0)/2 = length/2
    const midIndex = Math.floor(array.length / 2);

    const left = array.slice(0, midIndex);
    const right = array.slice(midIndex, array.length);

    return merge(mergeSort(left), mergeSort(right));
} 


// const result = mergeSort([1, 6, 4, 78, 45, 56, 34, 7, 23, 9]);
// console.log(result);
