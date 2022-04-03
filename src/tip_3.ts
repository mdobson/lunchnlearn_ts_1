//Structural Typing

interface Vector {
  x: number;
}

interface Vector2D extends Vector {
  y: number;
}

interface Vector3D extends Vector2D {
  z: number;
}

function multiply2DVector(vec: Vector2D, scalar: number): Vector2D {
  return {
    x: vec.x * scalar,
    y: vec.y * scalar,
  };
}

const first2dVector: Vector2D = {
  x: 2,
  y: 4,
};

console.log(multiply2DVector(first2dVector, 3));

const second2dVector = {
  x: 3,
  y: 2,
};

console.log(multiply2DVector(second2dVector, 3));

const hmmmA3dVector: Vector3D = {
  x: 3,
  y: 2,
  z: 1,
};

console.log(multiply2DVector(hmmmA3dVector, 2));
