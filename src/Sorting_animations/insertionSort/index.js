import getInsertionSortAnimations from "../../Sorting_algorithms/insertionSort";
import {
  ANIMATION_SPEED_MS,
  PRIMARY_COLOR,
  SECONDARY_COLOR,
  getArrayBars,
} from "../../store/animationStore";

export default function insertionSort(array) {
  const animations = getInsertionSortAnimations(array);
  const arrayBars = getArrayBars();
  for (let i = 0; i < animations.length; i++) {
    // const arrayBars = document.getElementsByClassName("arrayBars");
    if (animations[i] === "element") {
      const barStyle = arrayBars[animations[i + 1]].style;
      // const color = SECONDARY_COLOR;
      setTimeout(() => {
        barStyle.backgroundColor = "black";
      }, (i + 1) * ANIMATION_SPEED_MS);
    }
    if (animations[i] === "compare") {
      setTimeout(() => {
        const [barOneIdx, barTwoIdx] = animations[i + 1];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = SECONDARY_COLOR;
        barOneStyle.backgroundColor = color;
        barTwoStyle.backgroundColor = color;
      }, (i + 1) * ANIMATION_SPEED_MS);
      setTimeout(() => {
        const [barOneIdx, barTwoIdx] = animations[i + 2];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = PRIMARY_COLOR;
        barOneStyle.backgroundColor = color;
        barTwoStyle.backgroundColor = color;
      }, (i + 2) * ANIMATION_SPEED_MS);
      setTimeout(() => {
        const [barIdx, newHeight] = animations[i + 3];
        const barStyle = arrayBars[barIdx].style;
        barStyle.height = `${newHeight}px`;
        arrayBars[barIdx].innerHTML = newHeight;
      }, (i + 3) * ANIMATION_SPEED_MS);
    }
    if (animations[i] === "found") {
      setTimeout(() => {
        const barStyle = arrayBars[animations[i + 1]].style;
        barStyle.backgroundColor = PRIMARY_COLOR;
      }, (i + 1) * ANIMATION_SPEED_MS);
      setTimeout(() => {
        const [barIdx, newHeight] = animations[i + 2];
        const barStyle = arrayBars[barIdx].style;
        barStyle.height = `${newHeight}px`;
        arrayBars[barIdx].innerHTML = newHeight;
      }, (i + 2) * ANIMATION_SPEED_MS);
    }
  }
}
