const swap = (array, firstIndex, secondIndex) => {
    const aux = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = aux;
}

module.exports = {
    swap
}

// YOLO SORTING
// export const selectionSort = (array) => {
//     const sortedArray = [];
//     const unsortedArray = [...array];

//     for(let i = 0; i < array.length - 1; i++){
//         const minValue = Math.min(...unsortedArray);
//         const minValueIndex = unsortedArray.indexOf(minValue);

//         sortedArray.push(minValue);
//         unsortedArray.splice(minValueIndex, 1);
//     }

//     sortedArray.push(unsortedArray[0]);

//     return sortedArray;
// } 