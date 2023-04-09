import getMergeSortAnimations from "../../Sorting_algorithms/mergeSort";
import {
  ANIMATION_SPEED_MS,
  PRIMARY_COLOR,
  SECONDARY_COLOR,
  getArrayBars,
} from "../../store/animationStore";

export default function mergeSort(array) {
  const animations = getMergeSortAnimations(array);
  const arrayBars = getArrayBars();
  for (let i = 0; i < animations.length; i++) {
    // const arrayBars = document.getElementsByClassName("arrayBars");
    const isColorChange = i % 3 !== 2;
    if (isColorChange) {
      const [barOneIdx, barTwoIdx] = animations[i];
      const barOneStyle = arrayBars[barOneIdx].style;
      const barTwoStyle = arrayBars[barTwoIdx].style;
      const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
      setTimeout(() => {
        barOneStyle.backgroundColor = color;
        barTwoStyle.backgroundColor = color;
      }, i * ANIMATION_SPEED_MS);
    } else {
      setTimeout(() => {
        const [barOneIdx, newHeight] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        barOneStyle.height = `${newHeight}px`;
        arrayBars[barOneIdx].innerHTML = newHeight;
      }, i * ANIMATION_SPEED_MS);
    }
  }
}
