const demo = [
  {
    id: 0,
    number: 0,
    tourTime: '11:10',
    reservationName: '홍길동',
    phoneNumber: '010-1111-2222',
    tourParticipant: '10',
    tourCourse: '개항장거리 - 차이나타운',
  },
];

const row1Column1 = [
  ...Array.from({ length: 70 }, (_, index) => ({
    ...demo[0],
    id: index + 1,
    number: index + 1,
  })),
];

export default row1Column1;
