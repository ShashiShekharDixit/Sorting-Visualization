import swap from './swap';

/**
 * Heap sort
 * @see https://en.wikipedia.org/wiki/Heapsort
 * @param {Array} array
 * @return {Array}
 */
function heapSort(array: Array<number>): Array<number> {
    array = array.slice();

    for (let i: number = Math.floor(array.length / 2 - 1); i >= 0; i--) {
        shiftDown(array, i, array.length);
    }

    for (let i: number = array.length - 1; i >= 1; i--) {
        swap(array, 0, i);
        shiftDown(array, 0, i);
    }

    return array;
}

/**
 * @param  {Array} array
 * @param  {Number} i
 * @param  {Number} j
 */
function shiftDown(array: Array<number>, i: number, j: number): void {
    let done: boolean = false;
    let maxChild: number;

    while ((i * 2 + 1 < j) && !done) {
        if (i * 2 + 1 === j - 1) {
            maxChild = i * 2 + 1;
        } else if (array[i * 2 + 1] > array[i * 2 + 2]) {
            maxChild = i * 2 + 1;
        } else {
            maxChild = i * 2 + 2;
        }

        if (array[i] < array[maxChild]) {
            swap(array, i, maxChild);
            i = maxChild;
        } else {
            done = true;
        }
    }
}

export default heapSort;