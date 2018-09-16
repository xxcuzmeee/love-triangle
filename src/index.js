/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
};

function getLoveTrianglesCount(){
  let TrianglesNumber, x, y, z;
  TrianglesNumber=0;
  for (let i = 0; i < preferences.length; i++){
      x = preferences[i]-1;
      y = preferences[x]-1;
      z = preferences[y]-1;
      if ((z === i) && (x !== y) && (y !== z ) &&  (x !== z)) {
          TrianglesNumber++;
      }
  }
  
  if (TrianglesNumber > 0) {
     TrianglesNumber = TrianglesNumber / 3;
  }
  return TrianglesNumber;
};