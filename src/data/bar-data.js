// const arr0 = [
//   ["letter", "frequency"],
//   ["A", ".06167"],
//   ["B", ".01492"],
//   ["C", ".02782"],
//   ["D", ".08786"],
//   ["E", ".03386"]
// ];

const arr0 = [["letter", "frequency"], ["Q1", "0"], ["Q2", "0"], ["Q3", "0"]];

const arr1 = [
  ["letter", "frequency"],
  ["Q1", ".11"],
  ["Q2", ".22"],
  ["Q3", ".28"]
];

const arr2 = [
  ["letter", "frequency"],
  ["Q1", ".11"],
  ["Q2", ".22"],
  ["Q3", ".28"],
  ["Q4", ".90"]
];

const arr3 = [
  ["letter", "frequency"],
  ["Q1", ".11"],
  ["Q2", ".22"],
  ["Q3", ".28"],
  ["Q4", ".90"]
];

const type = "bar";
const width_svg = 400;
const height_svg = 500;
const margins = { top: 40, bottom: 40, left: 30, right: 30 };
const focusType = "";
const backgroundColor = "white";
const color = "#512cdb";
const colorToFocus = "#e5b443";
const opacity = 1;
const opacityToHide = 0.15;
const duration = 0;
const delay = 0;
const accumedDelay = 0;
const paddingBtwRects = 0.4;
const easing = "easeCubic";
const radius = 10;
const delayType = "accumedDelay";
// const width_rect = 30;

export const chart0 = {
  type,
  rawData: arr0,
  width_svg,
  height_svg,
  margins,

  focusType,
  duration,
  delay,
  accumedDelay,
  easing,
  delayType,

  backgroundColor,
  paddingBtwRects,
  radius,
  color,
  colorToFocus,
  opacity,
  opacityToHide
};

export const chart1 = {
  type,
  rawData: arr1,
  width_svg,
  height_svg,
  margins,

  focusType,
  duration: 1000,
  delay: 0,
  accumedDelay,
  easing: "easeBackOut",
  delayType: "delayInOrder",

  backgroundColor,
  paddingBtwRects,
  radius,
  color,
  colorToFocus,
  opacity: 1,
  opacityToHide: 0.15
};

export const chart2 = {
  type,
  rawData: arr2,
  width_svg,
  height_svg,
  margins,

  focusType: "end",
  duration: 1000,
  delay: 1500,
  accumedDelay,
  easing: "easeBackOut",
  delayType,

  backgroundColor,
  paddingBtwRects,
  radius,
  color,
  colorToFocus,
  opacity: 1,
  opacityToHide: 0.15
};

export const chart3 = {
  type,
  rawData: arr3,
  width_svg,
  height_svg,
  margins,

  focusType: "end",
  duration: 2000,
  delay: 0,
  accumedDelay,
  easing: "easeBackOut",
  delayType,

  backgroundColor,
  paddingBtwRects,
  radius,
  color,
  colorToFocus,
  opacity: 1,
  opacityToHide: 0.15
};

// const csv0 = `letter,frequency
// A,.06167
// B,.01492
// C,.02782
// D,.08786
// E,.03386`;

// const csv1 = `letter,frequency
// A,.08167
// B,.01492
// D,.03386`;

// const csv2 = `letter,frequency
// A,.08167
// B,.01492
// C,.02782
// D,.03386`;

// const csv3 = `letter,frequency
// A,.08167
// B,.01492
// C,.02782
// D,.03386
// E,.01234
// F,.05647`;

// const csv0 = `letter,frequency
// A,.06167`;

// const csv1 = `letter,frequency
// A,.08167
// B,.01492`;

// const csv2 = `letter,frequency
// A,.08167`;

// const csv3 = `letter,frequency
// A,.08167
// B,.02782
// C,.03386`;

// const csv2 = `letter,frequency
// A,.08167
// B,.01492
// C,.02782`;