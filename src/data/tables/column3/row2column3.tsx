const demo = [
  {
    id: 0,
    number: 0,
    date: "2024.08.02",
    numberOfReservation: "4",
    numberOfParticipant: "영어",
    note: "",
  },
];

const row2Column3 = [
  ...Array.from({ length: 30 }, (_, index) => ({
    ...demo[0],
    id: index + 1,
    number: index + 1,
  })),
];

export default row2Column3;
