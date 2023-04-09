export default function getInsertionSortAnimations(array) {
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