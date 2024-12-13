const pllAlgorithms = [
  { name: "Aa", shape: "Adjacent Corner Swap", algorithm: "x L2 D2 L' U' L D2 L' U L'", bestTime: null, avgTime: null },
  { name: "Ab", shape: "Adjacent Corner Swap", algorithm: "x' L2 D2 L U L' D2 L U' L", bestTime: null, avgTime: null },
  { name: "F", shape: "Adjacent Corner Swap", algorithm: "R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R", bestTime: null, avgTime: null },
  { name: "Ga", shape: "Adjacent Corner Swap", algorithm: "R2 U R' U R' U' R U' R2 U' D R' U R D'", bestTime: null, avgTime: null },
  { name: "Gb", shape: "Adjacent Corner Swap", algorithm: "R' U' R U D' R2 U R' U R U' R U' R2 D", bestTime: null, avgTime: null },
  { name: "Gc", shape: "Adjacent Corner Swap", algorithm: "R2 U' R U' R U R' U R2 U D' R U' R' D", bestTime: null, avgTime: null },
  { name: "Gd", shape: "Adjacent Corner Swap", algorithm: "R U R' U' D R2 U' R U' R' U R' U R2 D'", bestTime: null, avgTime: null },
  { name: "Ja", shape: "Adjacent Corner Swap", algorithm: "x R2 F R F' R U2 r' U r U2", bestTime: null, avgTime: null },
  { name: "Jb", shape: "Adjacent Corner Swap", algorithm: "R U R' F' R U R' U' R' F R2 U' R'", bestTime: null, avgTime: null },
  { name: "Ra", shape: "Adjacent Corner Swap", algorithm: "R U' R' U' R U R D R' U' R D' R' U2 R'", bestTime: null, avgTime: null },
  { name: "Rb", shape: "Adjacent Corner Swap", algorithm: "R2 F R U R U' R' F' R U2 R' U2 R", bestTime: null, avgTime: null },
  { name: "T", shape: "Adjacent Corner Swap", algorithm: "R U R' U' R' F R2 U' R' U' R U R' F'", bestTime: null, avgTime: null },
  { name: "E", shape: "Diagonal Corner Swap", algorithm: "x' L' U L D' L' U' L D L' U' L D' L' U L D", bestTime: null, avgTime: null },
  { name: "Na", shape: "Diagonal Corner Swap", algorithm: "R U R' U R U R' F' R U R' U' R' F R2 U' R' U2 R U' R'", bestTime: null, avgTime: null },
  { name: "Nb", shape: "Diagonal Corner Swap", algorithm: "R' U R U' R' F' U' F R U R' F R' F' R U' R", bestTime: null, avgTime: null },
  { name: "V", shape: "Diagonal Corner Swap", algorithm: "R' U R' U' y R' F' R2 U' R' U R' F R F", bestTime: null, avgTime: null },
  { name: "Y", shape: "Diagonal Corner Swap", algorithm: "F R U' R' U' R U R' F' R U R' U' R' F R F'", bestTime: null, avgTime: null },
  { name: "H", shape: "Edges Only", algorithm: "M2 U M2 U2 M2 U M2", bestTime: null, avgTime: null },
  { name: "Ua", shape: "Edges Only", algorithm: "M2 U M U2 M' U M2", bestTime: null, avgTime: null },
  { name: "Ub", shape: "Edges Only", algorithm: "M2 U' M U2 M' U' M2", bestTime: null, avgTime: null },
  { name: "Z", shape: "Edges Only", algorithm: "M' U M2 U M2 U M' U2 M2 U'", bestTime: null, avgTime: null }
];

export default pllAlgorithms;
