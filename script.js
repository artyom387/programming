var matrix = [];
var grassArr = [];
var grassEaterArr = [];
var predatorArr = [];
var lavaArr = [];
var hunterArr = [];
var side = 30;


function setup() {
    function matrixGenerator(matrixSize, grassCount, grassEaterCount, predatorCount, lavaCount, hunterCount) {
        for (let i = 0; i < matrixSize; i++) {
            matrix[i] = []
            for (let o = 0; o < matrixSize; o++) {
                matrix[i][o] = 0;
            }
        }
        for (let i = 0; i < grassCount; i++) {
            let x = Math.floor(random(matrixSize));
            let y = Math.floor(random(matrixSize));
            matrix[y][x] = 1;
        }
        for (let i = 0; i < grassEaterCount; i++) {
            let x = Math.floor(random(matrixSize));
            let y = Math.floor(random(matrixSize));
            matrix[y][x] = 2;
        }
        for (let i = 0; i < predatorCount; i++) {
            let x = Math.floor(random(matrixSize));
            let y = Math.floor(random(matrixSize));
            matrix[y][x] = 3;
        }
        for (let i = 0; i < lavaCount; i++) {
            let x = Math.floor(random(matrixSize));
            let y = Math.floor(random(matrixSize));
            matrix[y][x] = 4;
        }
        for (let i = 0; i < hunterCount; i++) {
            let x = Math.floor(random(matrixSize));
            let y = Math.floor(random(matrixSize));
            matrix[y][x] = 5;
        }
    }
    matrixGenerator(20, 50, 20, 20, 2, 12)
    frameRate(1.5);
    var myCanvas = createCanvas(matrix[0].length * side + 1, matrix.length * side + 1);
    myCanvas.parent("canvas");
    background('#AAB7B8');

    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                let gr = new Grass(x, y);
                grassArr.push(gr);
            }
            else if (matrix[y][x] == 2) {
                let eater = new GrassEater(x, y);
                grassEaterArr.push(eater);
            }
            else if (matrix[y][x] == 3) {
                let pre = new Predator(x, y);
                predatorArr.push(pre);
            }
            else if (matrix[y][x] == 4) {
                let lava = new Lava(x, y);
                lavaArr.push(lava);
            }
            else if (matrix[y][x] == 5) {
                let hunter = new Hunter(x, y);
                hunterArr.push(hunter);
            }
        }
    }
}

function draw() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("#1E8449");
            }
            else if (matrix[y][x] == 2) {
                fill("#F1C40F");
            }
            else if (matrix[y][x] == 3) {
                fill("#B03A2E");
            }
            else if (matrix[y][x] == 4) {
                fill("#BA4A00");
            }
            else if (matrix[y][x] == 5) {
                fill("#2874A6");
            }
            else if (matrix[y][x] == 0) {
                fill("#AAB7B8");
            }
            rect(x * side, y * side, side, side);

        }
    }

    for (let i = 0; i < grassArr.length; i++) {
        const grass = grassArr[i];
        grass.mul();
    }
    for (let i = 0; i < grassEaterArr.length; i++) {
        const eater = grassEaterArr[i];
        eater.eat();
    }
    for (let i = 0; i < predatorArr.length; i++) {
        const predator = predatorArr[i];
        predator.eat();
    }
    for (let i = 0; i < hunterArr.length; i++) {
        const hunter = hunterArr[i];
        hunter.eat();
    }
    for (let i = 0; i < lavaArr.length; i++) {
        const lava = lavaArr[i];
        lava.eat();
    }
}
