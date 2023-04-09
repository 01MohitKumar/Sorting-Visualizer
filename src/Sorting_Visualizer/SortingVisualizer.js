import { useState, useEffect, useCallback } from "react";
import "./SortingVisualizer.css";
import mergeSort from "../Sorting_animations/mergeSort";
import quickSort from "../Sorting_animations/quickSort";
import insertionSort from "../Sorting_animations/insertionSort";
import bubbleSort from "../Sorting_animations/bubbleSort";
import { NUMBER_OF_ARRAY_BARS, currentYear } from "../store/animationStore";

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
  }, []);

  useEffect(() => {
    resetArray();
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
      <button onClick={() => mergeSort(array)}>Merge Sort</button>
      <button onClick={() => quickSort(array)}>Quick Sort</button>
      <button onClick={() => insertionSort(array)}>Insertion Sort</button>
      <button onClick={() => bubbleSort(array)}>Bubble Sort</button>
      {/* <button onClick={testSortingAlgorithms}>testSortingAlgorithms</button> */}
      <p>
        copyright © {`${currentYear}-${currentYear + 1}`} Mohit Kumar - All
        Rights Rserved
      </p>
    </>
  );
};

export default SortingVisualizer;
