const demo = [
  {
    id: 0,
    number: 0,
    No: 1,
    tourDate: "2024.08.12",
    tourTime: "5:00",
    gRoom: "양양초등학교",
    progress: "진행",
    roomManager: "김나은",
    email: "aaa@aaa.com",
    phoneNumber: "010-0000-0000",
    paymentmethod: "고객",
    note: "",
  },
];

const row1Column5 = [
  ...Array.from({ length: 80 }, (_, index) => ({
    ...demo[0],
    id: index + 1,
    number: index + 1,
    No: index + 1,
  })),
];

export default row1Column5;
