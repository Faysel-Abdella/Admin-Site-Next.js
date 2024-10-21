const demo = [
  {
    id: 1,
    number: 1,
    evaluationDay: "2024.08.02",
    numberOfEvaluator: "150",
    note: "",
  },
];

const row6Column1 = [
  ...Array.from({ length: 50 }, (_, index) => ({
    ...demo[0],
    id: index + 1,
    number: index + 1,
  })),
];

export default row6Column1;
