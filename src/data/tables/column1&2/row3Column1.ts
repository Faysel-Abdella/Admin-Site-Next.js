const demo = [
  {
    id: 0,
    number: 0,
    No: '10',
    title: '가입정보를 확인해 주세요?',
    author: '최나영',
    dateWriting: '2024.08.01',
    dateReplay: '2024.08.01',
    responseStatus: '미완료',
  },
];

// Helper function to randomly select '완료' or '미완료'
// const getRandomStatus = () => (Math.random() > 0.5 ? '완료' : '미완료');

// Helper function to randomly return a date or an empty string for dateReplay
// const getRandomDateReplay = () => (Math.random() > 0.5 ? '2024.08.01' : '');
// responseStatus: getRandomStatus(),
// dateReplay: getRandomDateReplay(),
const row1Column1 = [
  ...Array.from({ length: 70 }, (_, index) => ({
    ...demo[0],
    id: index + 1,
    number: index + 1,
  })),
];

export default row1Column1;
