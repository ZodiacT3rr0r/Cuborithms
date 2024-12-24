const algorithms = [
  { name: "Diagonal", shape: "1: Corners", algorithm: "F R U' R' U' R U R' F' R U R' U' R' F R F'", bestTime: null, avgTime: null },
  { name: "Headlights", shape: "1: Corners", algorithm: "R U R' U' R' F R2 U' R' U' R U R' F'", bestTime: null, avgTime: null },
  { name: "PLL (H)", shape: "2: Edges", algorithm: "M2 U M2 U2 M2 U M2", bestTime: null, avgTime: null },
  { name: "PLL (Ua)", shape: "2: Edges", algorithm: "R U' R U R U R U' R' U' R2", bestTime: null, avgTime: null },
  { name: "PLL (Ub)", shape: "2: Edges", algorithm: "R2 U R U R' U' R' U' R' U R'", bestTime: null, avgTime: null },
  { name: "PLL (Z)", shape: "2: Edges", algorithm: "M' U M2 U M2 U M' U2 M2", bestTime: null, avgTime: null }
];

export default algorithms;
