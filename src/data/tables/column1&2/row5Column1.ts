const demo = [
  {
    id: 1,
    number: 1,
    dateAccess: '2024.08.02',
    pageViews: '150',
    note: '',
    
  },
];

const row2Column1 = [
  ...Array.from({ length: 50 }, (_, index) => ({
    ...demo[0],
    id: index + 1,
    number: index + 1,
  })),
];

export default row2Column1;
