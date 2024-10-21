const demo = [
  {
    id: 0,
    number: 0,
    No: 1,
    time: "11:00",
    roomManager: "김나은",
    phoneNumber: "전화 번호",
    groupRoom: "양양초등학교",
    age: "12",
    openPortDistance: "Y",
    chinaTown: "N",
    FairyVillage: "Y",
    freedomPark: "N",
    allSection: "Y",
  },
];

const row1Column3 = [
  ...Array.from({ length: 80 }, (_, index) => ({
    ...demo[0],
    id: index + 1,
    number: index + 1,
    No: index + 1,
  })),
];

export default row1Column3;
