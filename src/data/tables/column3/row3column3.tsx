const demo = [
  {
    id: 0,
    number: 0,
    date: "2024.08.02",
    name: "최선길",
    amount: "320,000",
    room: "대원중학교",
    personnel: "20",
    method: "고객",
  },
];

const row3Column3 = [
  ...Array.from({ length: 80 }, (_, index) => ({
    ...demo[0],
    id: index + 1,
    number: index + 1,
  })),
];

export default row3Column3;
