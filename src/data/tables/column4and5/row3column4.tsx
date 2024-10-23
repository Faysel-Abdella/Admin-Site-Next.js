const demo = [
  {
    id: 0,
    number: 0,
    tourTime: "12:00",
    numberOfParticipant: "10",
  },
];

const row3Column4 = [
  ...Array.from({ length: 30 }, (_, index) => ({
    ...demo[0],
    id: index + 1,
    number: index + 1,
    No: index + 1,
  })),
];

export default row3Column4;
