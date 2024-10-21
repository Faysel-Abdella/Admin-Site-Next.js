const demo = [
  {
    id: 0,
    number: 0,
    No: 1,
    courseName: "차이나타운",
    transitPointOrder: "3",
    gpsInfoN: "00.00.00.00N",
    gpsInfoE: "00.00.00.00E",
    language: "한국어",
  },
];

const row3Column5 = [
  ...Array.from({ length: 80 }, (_, index) => ({
    ...demo[0],
    id: index + 1,
    number: index + 1,
    No: index + 1,
  })),
];

export default row3Column5;
