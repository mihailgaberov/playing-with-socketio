
/*
type Point3D = [number, number, number];

const draw = (...point3D: Point3D) => {
    console.log(point3D);
};

const xyzCoodinate: Point3D = [10, 20, 10];

draw(10,20,10);
draw(xyzCoodinate[0], xyzCoodinate[1], xyzCoodinate[2]);
draw(...xyzCoodinate);

type Point = [number, number?, number?];

const x: Point = [10];
const xy: Point = [10, 20];
const xyz: Point = [10, 20, 10];

console.log(x.length);

console.log(xy.length);
console.log(xyz.length);

type TestScores = [string, ...number[]];

const thaliaTestScore = ["Thalia", ...[100, 98, 99, 100]];
const davidTestScore = ["David", ...[100, 98, 100]];

console.log(thaliaTestScore);
console.log(davidTestScore);


type KnownStructure = { coordinates: { x: any; y: any; z: any } };

let itemLocation: unknown = {
    coordinates: { x: 10, y: "cows", z: true }
};

/!*
const itemLocationCheck = (loc: any): loc is { coordinates: { x: any; y: any; z: any } } => {
    return (
        !!loc &&
        typeof loc === "object" &&
        "coordinates" in loc &&
        "x" in loc.coordinates &&
        "y" in loc.coordinates &&
        "z" in loc.coordinates
    );
};

if (itemLocationCheck(itemLocation)) {
    console.log(itemLocation.coordinates.x);
    console.log(itemLocation.coordinates.y);
    console.log(itemLocation.coordinates.z);
}*!/
console.log((itemLocation as KnownStructure).coordinates.x);
console.log((itemLocation as KnownStructure).coordinates.y);
console.log((itemLocation as KnownStructure).coordinates.z);

const printLocation = (loc: string) => {
    console.log(loc.toLowerCase());
};

printLocation(itemLocation as string);*/
const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/', (req: any, res: any) => {
    res.sendFile(__dirname + '/index.html');
});

io.on('connect', (socket:any) => {
    // sending to all connected clients
    io.emit('broadcast', '[Server]: Welcome stranger!');

    socket.on('chat message', (msg: string) => {
        console.log('message: ' + msg);
        io.emit('chat message', msg);
    });

    socket.on('disconnect', function(){
        io.emit('broadcast', '[Server]: Bye, bye, stranger!');
    });
});


http.listen(3000, () => {
    console.log('listening on *:3000');
});
