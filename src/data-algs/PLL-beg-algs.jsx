const algorithms = [
  { name: "Diagonal", group: "1: Corners", algorithm: "F R U' R' U' R U R' F' R U R' U' R' F R F'", bestTime: null, avgTime: null },
  { name: "Headlights", group: "1: Corners", algorithm: "R U R' U' R' F R2 U' R' U' R U R' F'", bestTime: null, avgTime: null },
  { name: "PLL (H)", group: "2: Edges", algorithm: "M2 U M2 U2 M2 U M2", bestTime: null, avgTime: null },
  { name: "PLL (Ua)", group: "2: Edges", algorithm: "R U' R U R U R U' R' U' R2", bestTime: null, avgTime: null },
  { name: "PLL (Ub)", group: "2: Edges", algorithm: "R2 U R U R' U' R' U' R' U R'", bestTime: null, avgTime: null },
  { name: "PLL (Z)", group: "2: Edges", algorithm: "M' U M2 U M2 U M' U2 M2", bestTime: null, avgTime: null }
];

export default algorithms;
