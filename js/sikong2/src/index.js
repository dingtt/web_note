let cosTol = 0.001;
let disTol = 0.001;

function isEqualPoints(point1, point2) {
  return Math.abs(point1.x - point2.x) < disTol && Math.abs(point1.y - point2.y) < disTol
}

function isPointsCollinear(point1, point2, point3) {
  return Math.abs((point2.y - point1.y) * (point3.x - point2.x) - (point2.x - point1.x) * (point3.y - point2.y)) < cosTol;
}

function simplyPolygon(polygon) {
  if (polygon.lengh < 3) {
    return polygon
  }
  const filterPolygon = [];
  const n = polygon.length
  for (let i = 0; i < n; i++) {
    const prePoint = polygon[(i - 1 + n) % n]
    const curPoint = polygon[i]
    const nextPoint = polygon[(i + 1) % n]

    if (isEqualPoints(prePoint, curPoint)) {
      continue
    }
    if (isPointsCollinear(prePoint, curPoint, nextPoint) && !isEqualPoints(curPoint, nextPoint)) {
      continue
    }
    filterPolygon.push(curPoint)
  }
  console.log(polygon, '=>', filterPolygon)
  return filterPolygon
}
