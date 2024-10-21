const demo = [
  {
    id: 0,
    number: 0,
    No: 1,
    title: "제휴 프로모션 이벤트 진행 안내",
    isNotify: "N",
    order: "1",
    date: "2024.08.01",
    weatherPublic: "Y",
  },
];

const row5Column4 = [
  ...Array.from({ length: 80 }, (_, index) => ({
    ...demo[0],
    id: index + 1,
    number: index + 1,
    No: index + 1,
  })),
];

export default row5Column4;
