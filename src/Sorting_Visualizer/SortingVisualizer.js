import { useState, useEffect, useCallback } from "react";
import "./SortingVisualizer.css";
import * as SortingAlgorithms from "../Sorting_algorithms/SortingAlgorithms";

// Change this value for the speed of the animations.
const ANIMATION_SPEED_MS = 3;

// Change this value for the number of bars (value) in the array.
const NUMBER_OF_ARRAY_BARS = 30;

// This is the main color of the array bars.
const PRIMARY_COLOR = "#61dafb";
// const PRIMARY_COLOR = "turquoise";

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = "red";

//  This is our arrayBar classes that is given to every bar.
const arrayBars = document.getElementsByClassName("arrayBars");

const SortingVisualizer = () => {
  const [array, setArray] = useState([]);

  const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const resetArray = useCallback(() => {
    const arr = [];

    for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
      arr.push(randomIntFromInterval(5, 500));
    }
    setArray(arr);

    // console.log("here!");
  }, []);

  useEffect(() => {
    resetArray();
    console.log("here!");
  }, [resetArray]);

  // const isEqual = (a, b) => {
  //   if (a.length !== b.length) return false;
  //   for (let i = 0; i < a.length; i++) {
  //     if (a[i] !== b[i]) return false;
  //   }
  //   return true;
  // };

  // const testSortingAlgorithms = () => {
  //   for (let i = 0; i < 100; i++) {
  //     const array = [];
  //     const length = randomIntFromInterval(1, 1000);
  //     for (let i = 0; i < length; i++) {
  //       array.push(randomIntFromInterval(-1000, 1000));
  //     }
  //     const jsSortedArray = array.slice().sort((a, b) => a - b);
  //     const sortedArray = SortingAlgorithms.quickSort(array);
  //     console.log(isEqual(jsSortedArray, sortedArray));
  //   }
  // };

  const mergeSort = () => {
    const animations = SortingAlgorithms.getMergeSortAnimations(array);
    for (let i = 0; i < animations.length; i++) {
      // const arrayBars = document.getElementsByClassName("arrayBars");
      console.log('I"m being checked ', i);
      const isColorChange = i % 3 !== 2;
      console.log("isColorChange being checked ", isColorChange);
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        console.log("color is being checked ", color);
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
  };
  const quickSort = () => {
    const animations = SortingAlgorithms.getQuickSortAnimations(array);
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
  };

  const insertionSort = () => {
    const animations = SortingAlgorithms.getInsertionSortAnimations(array);
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
  };

  const bubbleSort = () => {
    const animations = SortingAlgorithms.getBubbleSortAnimations(array);
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
  };

  return (
    <>
      <div className="arrayContainer">
        {array.map((value, idx) => (
          <div className="arrayBars" style={{ height: `${value}px` }} key={idx}>
            {value}
          </div>
        ))}
      </div>

      <button onClick={resetArray}>Generate new array</button>
      <button onClick={mergeSort}>Merge Sort</button>
      <button onClick={quickSort}>Quick Sort</button>
      <button onClick={insertionSort}>Insertion Sort</button>
      <button onClick={bubbleSort}>Bubble Sort</button>
      {/* <button onClick={testSortingAlgorithms}>testSortingAlgorithms</button> */}

      <p>
        copyright © {`${currentYear}-${currentYear + 1}`} Mohit Kumar - All
        Rights Rserved
      </p>
    </>
  );
};

export default SortingVisualizer;
