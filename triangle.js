export function create( a, b, c ) {

	a = a || new Float32Array( [ 0, 0, 0 ] )
	b = b || new Float32Array( [ 0, 0, 0 ] )
	c = c || new Float32Array( [ 0, 0, 0 ] )

	return new Float32Array( [
		...a,
		...b,
		...c
	] )
}
