export default function getBubbleSortAnimations(array) {
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