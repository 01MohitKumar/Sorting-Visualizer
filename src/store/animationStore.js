//  This is our arrayBar classes that is given to every bar.
export function getArrayBars() {
  return document.getElementsByClassName("arrayBars");
}

// Change this value for the speed of the animations.
export const ANIMATION_SPEED_MS = 3;

// This is the main color of the array bars.
export const PRIMARY_COLOR = "#61dafb";

// This is the color of array bars that are being compared throughout the animations.
export const SECONDARY_COLOR = "red";

// Change this value for the number of bars (value) in the array.
export const NUMBER_OF_ARRAY_BARS = 30;

export const currentYear = new Date().getFullYear();
