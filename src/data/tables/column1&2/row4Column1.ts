const demo = [
  {
    id: 1,
    number: 1,
    No: '10',
    evaluationItem: '주변 사람에게 추천할 의향이 있나요?',
    duplicateAnswer: 'N',
    including: 'N',
    weatherToUse: 'Y',
    language: '한국어',
  },
];

const row2Column1 = [
  ...Array.from({ length: 40 }, (_, index) => ({
    ...demo[0],
    id: index + 1,
    number: index + 1,
  })),
];

export default row2Column1;
