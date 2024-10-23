const demo = [
  {
    id: 0,
    number: 0,
    No: 1,
    name: "홍길동",
    currentCourse: "개항장거리",
    currentTransitPoint: "대불호텔",
    email: "aaa@aaa.com",
    phoneNumber: "010-0000-0000",
  },
];

const row5Column52 = [
  ...Array.from({ length: 80 }, (_, index) => ({
    ...demo[0],
    id: index + 1,
    number: index + 1,
    No: index + 1,
  })),
];

export default row5Column52;
