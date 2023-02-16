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

export function getNormal( triangle ) {

	const normal = new Float32Array( [
		( triangle[ 7 ] - triangle[ 4 ] ) * ( triangle[ 2 ] - triangle[ 5 ] ) - ( triangle[ 8 ] - triangle[ 5 ] ) * ( triangle[ 1 ] - triangle[ 4 ] ),
		( triangle[ 8 ] - triangle[ 5 ] ) * ( triangle[ 0 ] - triangle[ 3 ] ) - ( triangle[ 6 ] - triangle[ 3 ] ) * ( triangle[ 2 ] - triangle[ 5 ] ),
		( triangle[ 6 ] - triangle[ 3 ] ) * ( triangle[ 1 ] - triangle[ 4 ] ) - ( triangle[ 7 ] - triangle[ 4 ] ) * ( triangle[ 0 ] - triangle[ 3 ] )
	] )

	const len = normal[ 0 ] * normal[ 0 ] + normal[ 1 ] * normal[ 1 ] + normal[ 2 ] * normal[ 2 ]

	if ( len <= 0 ) {

		return new Float32Array( [ 0, 0, 0 ] )
	}

	return new Float32Array( [
		normal[ 0 ] * 1 / Math.sqrt( len ),
		normal[ 1 ] * 1 / Math.sqrt( len ),
		normal[ 2 ] * 1 / Math.sqrt( len )
	] )
}
