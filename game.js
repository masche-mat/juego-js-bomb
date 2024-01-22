//selecciono del html el id = game
const canvas = document.querySelector('#game');
const game = canvas.getContext('2d');//investigar

let canvasSize;//una variable para definir tamaño de canvas
let elementsSize;//variable para def tamaño elementos

//cuando carga la pagina se ejecuta la funcion start..
window.addEventListener('load', setCanvasSize);
//cuando cambia tamaño ejecuta funcion
window.addEventListener('resize', setCanvasSize);

function setCanvasSize() {
    //hace el canvas responsive
    if (window.innerHeight > window.innerWidth) {
        canvasSize = window.innerWidth * 0.8;
    } else {
        canvasSize = window.innerHeight * 0.8;
    }

    canvas.setAttribute('width', canvasSize);
    canvas.setAttribute('height', canvasSize);

    elementsSize = (canvasSize / 10) * 0.97;//el ancho y alto dividido 10, sera el lugar para los elementos dentro del cnvas

    startGame();
}

function startGame() {

    game.font = elementsSize + 'px Verdana';
    //game.textAlign = 'end';

    //variables para dibujar los diferentes mapas en el canvas
    const map = maps[0]; //toma el array de maps.js
    const mapFilas = map.trim().split('\n');//trim limpia espacios, split genrea un nuevo array con saltos de linea de map.
    const mapCol = mapFilas.map(row => row.trim().split(''));

    console.log({ map, mapFilas, mapCol });

    for (let fila = 0; fila < 10; fila++) {
        for (let col = 0; col < 10; col++) {
            game.fillText(emojis[mapCol[fila][col]], (elementsSize * col), (elementsSize * fila) + 45);//no entiendo porque le sume 45//asigna el lugar del elemento en canvas, game.fillText(emojis['X'], x, y), x(fila), y(col) ejes del lienzo
        }
    }
}