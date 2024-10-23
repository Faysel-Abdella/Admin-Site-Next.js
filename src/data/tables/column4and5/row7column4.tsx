const demo = [
  {
    id: 0,
    number: 0,
    title: "회원 가입 방법",
    startDate: "2024.08.10",
    language: "영어",
  },
];

const row7Column4 = [
  ...Array.from({ length: 30 }, (_, index) => ({
    ...demo[0],
    id: index + 1,
    number: index + 1,
  })),
];

export default row7Column4;
