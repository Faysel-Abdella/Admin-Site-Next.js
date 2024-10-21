const demo = [
  {
    id: 0,
    number: 0,
    tourDate: "2024.08.01",
    day: "목",
    isHolyday: "Y",
    tourTime: "11:00",
    numberOfParticipant: "20",
    numberOfReservation: "10",
  },
];

const row4Column4 = [
  ...Array.from({ length: 80 }, (_, index) => ({
    ...demo[0],
    id: index + 1,
    number: index + 1,
    No: index + 1,
  })),
];

export default row4Column4;
