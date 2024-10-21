const demo = [
  {
    id: 0,
    number: 0,
    No: 1,
    date: "2024.08.12",
    tourTime: "12:00",
    groupRoom: "대원중학교",
    progress: "진행",
    roomManager: "김나은",
    numberOfPeople: "10",
    rating: "초급",
  },
];

const row5Column5 = [
  ...Array.from({ length: 80 }, (_, index) => ({
    ...demo[0],
    id: index + 1,
    number: index + 1,
    No: index + 1,
  })),
];

export default row5Column5;
