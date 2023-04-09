import getBubbleSortAnimations from "../../Sorting_algorithms/bubbleSort";
import {
  ANIMATION_SPEED_MS,
  PRIMARY_COLOR,
  SECONDARY_COLOR,
  getArrayBars,
} from "../../store/animationStore";

export default function bubbleSort(array) {
  const animations = getBubbleSortAnimations(array);
  const arrayBars = getArrayBars();
  for (let i = 0; i < animations.length; i++) {
    // const arrayBars = document.getElementsByClassName("arrayBars");
    if (animations[i] === "noSwap") {
      const [barOneIdx, barTwoIdx] = animations[i + 1];
      const barOneStyle = arrayBars[barOneIdx].style;
      const barTwoStyle = arrayBars[barTwoIdx].style;
      const color = SECONDARY_COLOR;
      setTimeout(() => {
        barOneStyle.backgroundColor = color;
        barTwoStyle.backgroundColor = color;
      }, i * ANIMATION_SPEED_MS);
    }
    if (animations[i] === "noSwapToBack") {
      const [barOneIdx, barTwoIdx] = animations[i + 1];
      const barOneStyle = arrayBars[barOneIdx].style;
      const barTwoStyle = arrayBars[barTwoIdx].style;
      const color = PRIMARY_COLOR;
      setTimeout(() => {
        barOneStyle.backgroundColor = color;
        barTwoStyle.backgroundColor = color;
      }, i * ANIMATION_SPEED_MS);
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
  }
}
