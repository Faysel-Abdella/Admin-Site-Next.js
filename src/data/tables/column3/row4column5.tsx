const demo = [
  {
    id: 0,
    number: 0,

    problem: "개항장거리",
    transitPointOrder: "4",
    transitPointName: "중구청",
    language: "한국어",
  },
];

const row4Column5 = [
  ...Array.from({ length: 30 }, (_, index) => ({
    ...demo[0],
    id: index + 1,
    number: index + 1,
  })),
];

export default row4Column5;
