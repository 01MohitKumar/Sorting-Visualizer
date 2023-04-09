import getQuickSortAnimations from "../../Sorting_algorithms/quickSort";
import {
  ANIMATION_SPEED_MS,
  PRIMARY_COLOR,
  SECONDARY_COLOR,
  getArrayBars,
} from "../../store/animationStore";

export default function quickSort(array) {
  const animations = getQuickSortAnimations(array);
  const arrayBars = getArrayBars();
  for (let i = 0; i < animations.length; i++) {
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
    }
    if (animations[i] === "swap") {
      const [barOneIdx, barOneNewHeight, barTwoIdx, barTwoNewHeight] =
        animations[i + 1];
      const barOneStyle = arrayBars[barOneIdx].style;
      const barTwoStyle = arrayBars[barTwoIdx].style;
      setTimeout(() => {
        barOneStyle.height = `${barOneNewHeight}px`;
        barTwoStyle.height = `${barTwoNewHeight}px`;
        arrayBars[barOneIdx].innerHTML = barOneNewHeight;
        arrayBars[barTwoIdx].innerHTML = barTwoNewHeight;
      }, i * ANIMATION_SPEED_MS);
    }
    if (animations[i] === "pivot") {
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
      const [barOneIdx, barOneNewHeight, barTwoIdx, barTwoNewHeight] =
        animations[i + 3];
      const barOneStyle = arrayBars[barOneIdx].style;
      const barTwoStyle = arrayBars[barTwoIdx].style;
      setTimeout(() => {
        barOneStyle.height = `${barOneNewHeight}px`;
        barTwoStyle.height = `${barTwoNewHeight}px`;
        arrayBars[barOneIdx].innerHTML = barOneNewHeight;
        arrayBars[barTwoIdx].innerHTML = barTwoNewHeight;
      }, i * ANIMATION_SPEED_MS);
    }
  }
}
