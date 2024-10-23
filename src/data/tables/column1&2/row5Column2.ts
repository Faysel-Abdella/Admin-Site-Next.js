const demo = [
  {
    id: 1,
    number: 1,
    No: 1,
    dateOfAccess: "YYYY-MM-DD HH:MM:SS",
    name: "홍길동",
    email: "aaa@aa.co.kr",
  },
];

const row5Column2 = [
  ...Array.from({ length: 50 }, (_, index) => ({
    ...demo[0],
    id: index + 1,
    number: index + 1,
    No: index + 1,
  })),
];

export default row5Column2;
