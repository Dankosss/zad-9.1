function getTriangleArea(a, h) {
	if (a>0 && h>0) {
		return (a*h)/2;
    }
	return 'nieprawidlowe dane!'
}
console.log(getTriangleArea(10, 6));
var Triangle1Area = getTriangleArea(10,15);
var Triangle2Area = getTriangleArea(10,4);
var Triangle3Area = getTriangleArea(10,2);
console.log(Triangle1Area);
console.log(Triangle2Area);
console.log(Triangle3Area);