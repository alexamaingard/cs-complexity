/*
Conceptual description:
Counting sort is a sorting technique based on keys between a specific range. 
It works by counting the number of elements having distinct key values and then doing 
some arithmetic to calculate the position of each object in the output sequence.

Time Complexity: O(n + k)
Space Complexity: O(n^2) [Reasoning: O((n+1) * n) => O(n^2 + n) => O(n^2)]
*/


export const countingSort = (array) => {
    const sortedArray = new Array(array.length);

    const minValue = 0;
    const maxValue = Math.max(...array);

    const positions = new Array(maxValue + 1);

    for(let i = minValue; i < positions.length; i++){
        positions[i] = 0;
    }

    for(const value in array){
        positions[array[value]]++;
    }

    for(let i = 1; i < positions.length; i++){
        positions[i] += positions[i-1];
    }

    const aux = [...array].reverse();

    for(const value in aux){
        positions[aux[value]]--;
        sortedArray[positions[aux[value]]] = aux[value];
    }

    return sortedArray;
}

// countingSort([1, 6, 4, 78, 45, 56, 34, 7, 23, 9]);