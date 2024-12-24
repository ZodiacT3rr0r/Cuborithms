const twoByTwoPBLAlgorithms = [
  { name: "Adj/Adj", shape: "Adjacent D", algorithm: "R2 U' B2 U2 R2 U' R2", bestTime: null, avgTime: null },
  { name: "Adj/Diag", shape: "Diagonal D", algorithm: "R U' R F2 R' U R'", bestTime: null, avgTime: null },
  { name: "Diag/Diag", shape: "Diagonal D", algorithm: "R2 F2 R2", bestTime: null, avgTime: null },
  { name: "Adj U", shape: "Solved D", algorithm: "R U R' U' R' F R2 U' R' U' R U R' F'", bestTime: null, avgTime: null },
  { name: "Diag U", shape: "Solved D", algorithm: "F R U' R' U' R U R' F' R U R' U' R' F R F'", bestTime: null, avgTime: null }
];

export default twoByTwoPBLAlgorithms;
