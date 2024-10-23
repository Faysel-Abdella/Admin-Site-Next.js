const demo = [
  {
    id: 1,
    number: 1,
    No: '10',
    NickName: '홍길동',
    email: 'aaa@aa.co.kr',
    phoneNumber: '010-1234-5678',
    dateJoining: '2024.08.01',
    birthYear: '1992',
    gender: '남자',
    status: '탈퇴',
  },
];

const row2Column1 = [
  ...Array.from({ length: 70 }, (_, index) => ({
    ...demo[0],
    id: index + 1,
    number: index + 1,
  })),
];

export default row2Column1;
