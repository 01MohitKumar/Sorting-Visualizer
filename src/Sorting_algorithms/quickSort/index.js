export default function getQuickSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    quickSort(animations, array);
    return animations;
  
    function pivot(animations, array, start = 0, end = array.length - 1) {
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