const demo = [
  {
    id: 1,
    number: 1,
    No: 1,
    name: "그렇다",
    email: "aaa@aa.co.kr",
    question1: "그렇다",
    question2: "매우 그렇다",
    question3: "그렇다",
    question4: "보통이다",
    question5: "그렇다",
    question6: "매우 그렇다",
    question7: "아니다",
    question8: "그렇다",
    question9: "그렇다",
    question10: "그렇다",
  },
];

const row6Column2 = [
  ...Array.from({ length: 50 }, (_, index) => ({
    ...demo[0],
    id: index + 1,
    number: index + 1,
    No: index + 1,
  })),
];

export default row6Column2;
