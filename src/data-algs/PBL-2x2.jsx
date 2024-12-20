const twoByTwoPBLAlgorithms = [
  { name: "Adj/Adj", group: "Adjacent D", algorithm: "R2 U' B2 U2 R2 U' R2", bestTime: null, avgTime: null },
  { name: "Adj/Diag", group: "Diagonal D", algorithm: "R U' R F2 R' U R'", bestTime: null, avgTime: null },
  { name: "Diag/Diag", group: "Diagonal D", algorithm: "R2 F2 R2", bestTime: null, avgTime: null },
  { name: "Adj U", group: "Solved D", algorithm: "R U R' U' R' F R2 U' R' U' R U R' F'", bestTime: null, avgTime: null },
  { name: "Diag U", group: "Solved D", algorithm: "F R U' R' U' R U R' F' R U R' U' R' F R F'", bestTime: null, avgTime: null }
];

export default twoByTwoPBLAlgorithms;
