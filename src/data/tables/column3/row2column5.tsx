const demo = [
  {
    id: 0,
    number: 0,
    No: 1,
    courseName: "차이나타운",
    courseNumber: "6",
    courseRoute:
      "개항장거리 - 중구청 - 청일조계지경계계단 - 대불호텔 -  일본 제1은행 - 일본 제18, 58은행 - 아트플랫폼 - ",
    language: "한국어",
  },
];

const row2Column5 = [
  ...Array.from({ length: 80 }, (_, index) => ({
    ...demo[0],
    id: index + 1,
    number: index + 1,
    No: index + 1,
  })),
];

export default row2Column5;
