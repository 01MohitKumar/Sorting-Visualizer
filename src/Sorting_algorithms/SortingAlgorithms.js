export function getMergeSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return array;
  const auxiliaryArray = array.slice();
  mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
  return animations;
}

function mergeSortHelper(
  mainArray,
  startIdx,
  endIdx,
  auxiliaryArray,
  animations
) {
  if (startIdx === endIdx) return;
  const middleIdx = Math.floor((startIdx + endIdx) / 2);
  mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
  mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
  doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
}

function doMerge(
  mainArray,
  startIdx,
  middleIdx,
  endIdx,
  auxiliaryArray,
  animations
) {
  let k = startIdx;
  let i = startIdx;
  let j = middleIdx + 1;
  while (i <= middleIdx && j <= endIdx) {
    // These are the values that we're comparing; we push them once
    // to change their color.
    animations.push([i, j]);
    // These are the values that we're comparing; we push them a second
    // time to revert their color.
    animations.push([i, j]);
    if (auxiliaryArray[i] <= auxiliaryArray[j]) {
      // We overwrite the value at index k in the original array with the
      // value at index i in the auxiliary array.
      animations.push([k, auxiliaryArray[i]]);
      mainArray[k++] = auxiliaryArray[i++];
    } else {
      // We overwrite the value at index k in the original array with the
      // value at index j in the auxiliary array.
      animations.push([k, auxiliaryArray[j]]);
      mainArray[k++] = auxiliaryArray[j++];
    }
  }
  while (i <= middleIdx) {
    // These are the values that we're comparing; we push them once
    // to change their color.
    animations.push([i, i]);
    // These are the values that we're comparing; we push them a second
    // time to revert their color.
    animations.push([i, i]);
    // We overwrite the value at index k in the original array with the
    // value at index i in the auxiliary array.
    animations.push([k, auxiliaryArray[i]]);
    mainArray[k++] = auxiliaryArray[i++];
  }
  while (j <= endIdx) {
    // These are the values that we're comparing; we push them once
    // to change their color.
    animations.push([j, j]);
    // These are the values that we're comparing; we push them a second
    // time to revert their color.
    animations.push([j, j]);
    // We overwrite the value at index k in the original array with the
    // value at index j in the auxiliary array.
    animations.push([k, auxiliaryArray[j]]);
    mainArray[k++] = auxiliaryArray[j++];
  }
}

export function getBubbleSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return array;
  bubbleSort(array, animations);
  return animations;

  function bubbleSort(array, animations) {
    let noSwap;
    for (let i = array.length; i > 0; i--) {
      noSwap = true;
      for (let j = 0; j < i - 1; j++) {
        animations.push("noSwap");
        animations.push([j, j + 1]);
        animations.push("noSwapToBack");
        animations.push([j, j + 1]);
        if (array[j] > array[j + 1]) {
          animations.push("swap");
          animations.push([j, array[j + 1], j + 1, array[j]]);
          [array[j], array[j + 1]] = [array[j + 1], array[j]];
          noSwap = false;
        }
      }
      if (noSwap) break;
    }
    return;
  }
}
export function getInsertionSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return array;
  insertionSort(array, animations);
  return animations;

  function insertionSort(array, animations) {
    for (let i = 1; i < array.length; i++) {
      // ELEMENT WHICH WE'LL COMPARE TO  IT'S LEFT ELEMENTS; WE PUSH IT TO CHANGE IT'S COLOR
      animations.push("element");
      animations.push(i);
      let currentVal = array[i];
      let j = i - 1;
      while (j >= 0 && array[j] > currentVal) {
        // NOW WE'LL COMPARE ELEMENTS AND OVER WRITE; WE PUSH THEM TO
        // CHANGE THEIR COLOR AND PUSH AGAIN TO REVERT COLOR
        // THEN PUSH ONCE AGAIN TO CHANGE CHANGE THE BAR HEIGHT
        animations.push("compare");
        animations.push([j + 1, j]);
        animations.push([j + 1, j]);
        animations.push([j + 1, array[j]]);
        array[j + 1] = array[j];
        j--;
      }
      // FIRST WE PUSH INDEX 'i' TO REVERT IT'S COLOR
      // THEN WE PUSH INDEX NUMBER AND VALUE TO CHANGE BAR HEIGHT
      animations.push("found");
      animations.push(i);
      animations.push([j + 1, currentVal]);
      array[j + 1] = currentVal;
    }
    return array;
  }
}

export function getQuickSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return array;
  quickSort(animations, array);
  return animations;

  function pivot(animations, array, start = 0, end = array.length - 1) {
    console.log(animations, "from pivot");
    let pivot = array[start];
    let pivotIdx = start;
    let i = start + 1;
    while (i <= end) {
      // for (let i = start + 1; i <= end; i++) {
      animations.push("compare");
      animations.push([array.indexOf(pivot), i]);
      animations.push([array.indexOf(pivot), i]);
      if (pivot > array[i]) {
        pivotIdx++;
        animations.push("swap");
        // animations.push([j, array[j + 1], j + 1, array[j]]);
        // [array[j], array[j + 1]] = [array[j + 1], array[j]];
        animations.push([pivotIdx, array[i], i, array[pivotIdx]]);
        console.log("hello");
        let temp = array[pivotIdx];
        array[pivotIdx] = array[i];
        array[i] = temp;
        // [array[pivotIdx], array[i]] = [array[i],array[pivotIdx]];
        // i++;
      }
      i++;
    }
    animations.push("pivot");
    animations.push([start, pivotIdx]);
    animations.push([start, pivotIdx]);
    animations.push([start, array[pivotIdx], pivotIdx, array[start]]);
    let temp = array[start];
    array[start] = array[pivotIdx];
    array[pivotIdx] = temp;
    // [(array[start], array[pivotIdx])] = [array[pivotIdx], array[start]];
    return pivotIdx;
  }

  function quickSort(animations, array, left = 0, right = array.length - 1) {
    if (left < right) {
      let pivotIdx = pivot(animations, array, left, right);

      // LEFT
      // animations.push('leftStart')
      // animations.push([0,pivotIdx - 1])
      // animations.push([0,pivotIdx - 1])
      quickSort(animations, array, left, pivotIdx - 1);
      // RIGHT
      // animations.push('rightStart')
      // animations.push([pivotIdx + 1,array.length - 1])
      // animations.push([pivotIdx + 1,array.length - 1])
      quickSort(animations, array, pivotIdx + 1, right);
    }
    return array;
  }
}
