const twoByTwoOLLAlgorithms = [
  { name: "H", shape: "0 Corners", algorithm: "R2 U2 R U2 R2", bestTime: null, avgTime: null },
  { name: "Pi", shape: "0 Corners", algorithm: "R U2 R2 U' R2 U' R2 U2 R", bestTime: null, avgTime: null },
  { name: "Antisune", shape: "1 Corner", algorithm: "R U2 R' U' R U' R'", bestTime: null, avgTime: null },
  { name: "Sune", shape: "1 Corner", algorithm: "R U R' U R U2 R'", bestTime: null, avgTime: null },
  { name: "L", shape: "2 Corners", algorithm: "F R' F' R U R U' R'", bestTime: null, avgTime: null },
  { name: "T", shape: "2 Corners", algorithm: "R U R' U' R' F R F'", bestTime: null, avgTime: null },
  { name: "U", shape: "2 Corners", algorithm: "F R U R' U' F'", bestTime: null, avgTime: null }
];

export default twoByTwoOLLAlgorithms;
