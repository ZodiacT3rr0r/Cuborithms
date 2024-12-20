const twoByTwoOLLAlgorithms = [
  { name: "H", group: "0 Corners", algorithm: "R2 U2 R U2 R2", bestTime: null, avgTime: null },
  { name: "Pi", group: "0 Corners", algorithm: "R U2 R2 U' R2 U' R2 U2 R", bestTime: null, avgTime: null },
  { name: "Antisune", group: "1 Corner", algorithm: "R U2 R' U' R U' R'", bestTime: null, avgTime: null },
  { name: "Sune", group: "1 Corner", algorithm: "R U R' U R U2 R'", bestTime: null, avgTime: null },
  { name: "L", group: "2 Corners", algorithm: "F R' F' R U R U' R'", bestTime: null, avgTime: null },
  { name: "T", group: "2 Corners", algorithm: "R U R' U' R' F R F'", bestTime: null, avgTime: null },
  { name: "U", group: "2 Corners", algorithm: "F R U R' U' F'", bestTime: null, avgTime: null }
];

export default twoByTwoOLLAlgorithms;
