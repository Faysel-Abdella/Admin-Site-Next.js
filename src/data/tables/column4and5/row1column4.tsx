const demo = [
  {
    id: 0,
    number: 0,
    mainCode: "B002",
    codeName: "회원종류",
    useOrNot: "Y",
    note: "",
    noOfSubCode: "4",
  },
];

const row1Column4 = [
  ...Array.from({ length: 30 }, (_, index) => ({
    ...demo[0],
    id: index + 1,
    number: index + 1,
  })),
];

export default row1Column4;
