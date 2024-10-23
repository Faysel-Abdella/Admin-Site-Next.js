const demo = [
  {
    id: 0,
    number: 0,
    title: "게시 2024.08.01",
    startDate: "2024.08.10",
    language: "영어",
  },
];

const row8Column4 = [
  ...Array.from({ length: 30 }, (_, index) => ({
    ...demo[0],
    id: index + 1,
    number: index + 1,
  })),
];

export default row8Column4;
