/*
Conceptual description:
Bucket sort is a sorting algorithm that works by distributing the elements of an array into a number of 
empty buckets with elements belonging to a specific range. Each bucket is then sorted individually and 
they all get chained together at the end.

Time Complexity: O(n^2)
Space Complexity: O(n + k) considering we have dynamic arrays, worst case would be O(n^2) otherwise.
*/

export const bucketSort = (array) => {
    const t0 = performance.now();

    const sortedArray = [];

    const n = array.length;
    const maxValue = Math.max(...array);

    let buckets = new Array(n+1);

    for (let i = 0; i < n+1; i++){
        buckets[i] = [];
    }
    
    for(let i = 0; i < n; i++){
        const bucket = Math.floor(n*(array[i]/maxValue));
        buckets[bucket].push(array[i]);
    }

    for(let i = 0; i < n+1; i++){
        buckets[i].sort((a, b) => (a - b));
    }

    for(let i = 0; i < n+1; i++){
        for(let j = 0; j < buckets[i].length; j++){
            sortedArray.push(buckets[i][j]);
        }
    }

    const t1 = performance.now();
    console.log(`Call to bucketSort took ${t1 - t0} milliseconds.`)

    return sortedArray;
}