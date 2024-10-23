const demo = [
  {
    id: 0,
    number: 0,
    No: "1",
    date: "2024.08.15",
    holydayName: "광복절",
    useOrNot: "Y",
    note: "",
  },
];

const row1Column4 = [
  ...Array.from({ length: 30 }, (_, index) => ({
    ...demo[0],
    id: index + 1,
    number: index + 1,
    No: index + 1,
  })),
];

export default row1Column4;
