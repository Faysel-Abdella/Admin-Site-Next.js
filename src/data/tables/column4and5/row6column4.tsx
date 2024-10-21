const demo = [
  {
    id: 0,
    number: 0,
    No: 1,
    title: "회원 가입 방법",
    registerDate: "2024.08.10",
  },
];

const row6Column4 = [
  ...Array.from({ length: 30 }, (_, index) => ({
    ...demo[0],
    id: index + 1,
    number: index + 1,
    No: index + 1,
  })),
];

export default row6Column4;
