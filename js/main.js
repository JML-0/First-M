window.addEventListener("load", event => main());
window.addEventListener("resize", event => resize());

const resize = () => {

	console.log("resize", window.innerWidth, window.innerHeight);

};

const createCube = (color, x, y, z) => {

	// create cube geom and material
	var geometry = new THREE.BoxGeometry(x, y, z);
	var material = new THREE.MeshBasicMaterial( { color: color } );
	var cube = new THREE.Mesh( geometry, material );
	return cube;
};


const main = () => {

	console.log("hello world");

	var renderer = new THREE.WebGLRenderer();
	renderer.setSize( window.innerWidth, window.innerHeight );
	document.body.appendChild( renderer.domElement );

	var scene = new THREE.Scene();

	var camera = new THREE.PerspectiveCamera( 5, window.innerWidth / window.innerHeight, 1, 1000 );

	var controls = new THREE.OrbitControls( camera, renderer.domElement );

	//controls.update() must be called after any manual changes to the camera's transform
	camera.position.set( 0, 20, 100 );
	/* Les flèches du clavier bouge l'objet -> enableKeys = true */
	controls.update();
	
	var cube = createCube("#FF0000", 3, 2, 1);
	// add cube to scene
	scene.add( cube );

	/*var recube = createCube("#00FF00", 1, 1, 1);
	// add cube to scene
	scene.add( recube );*/

	animate();

	// animate loop
	function animate() {
		requestAnimationFrame( animate ); // request next frame

		// move cube
		cube.rotation.x += 0.01;
		cube.rotation.y += 0.01;
		//cube.rotation.z += 0.01;

		// move cube
		/*recube.rotation.x -= 0.01;
		recube.rotation.y -= 0.01;*/

		// render !
		controls.update();
		renderer.render( scene, camera );
		
	}
};