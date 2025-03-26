let stopwatch;

const StopwatchState = Object.freeze({
    PAUSED: 0,
    RUNNING: 1
});

// function Stopwatch () {
//     // constructor
//     console.log("making stopwatch");
//     this.state = StopwatchState.PAUSED;
//     this.display = {
//         "millisecond": document.getElementById("stopwatch-millisecond"),
//         "second": document.getElementById("stopwatch-second"),
//         "minute": document.getElementById("stopwatch-minute"),
//         "hour": document.getElementById("stopwatch-hour")
//     };
//     this.value = 0;
//     this.laps = [];
// }

// Stopwatch.prototype.formatTime = function () {

// }

// Stopwatch.prototype.start = function () {
//     console.log("starting...");
//     if (this.state == StopwatchState.PAUSED) {
//         this.state = StopwatchState.RUNNING;
//     }
// }

// Stopwatch.prototype.update = function () {
//     if (this.state == StopwatchState.RUNNING) {

//     }
// }

// Stopwatch.prototype.stop = function () {
//     console.log("stopping...");
//     if (this.state == StopwatchState.RUNNING) {
//         this.state = StopwatchState.PAUSED;
//     }
// }

// Stopwatch.prototype.reset = function () {
//     console.log("resetting...");
//     console.log(this.value);
//     console.log(this.display);
//     this.stop();
//     this.value = 0;
//     this.update();
// }

// stopwatch = new Stopwatch();

class Stopwatch {
    constructor() {
        this.state = StopwatchState.PAUSED;
        this.display = {
            "millisecond": document.getElementById("stopwatch-millisecond"),
            "second": document.getElementById("stopwatch-second"),
            "minute": document.getElementById("stopwatch-minute"),
            "hour": document.getElementById("stopwatch-hour")
        };
        this.value = 0;
        this.laps = [];
        console.log("created stopwatch...");
    }

    format() {

    }

    start() {
        console.log("starting...");

        if (this.state == StopwatchState.PAUSED) {
            this.state = StopwatchState.RUNNING;
            console.log("a");
        }
    }

    update() {
        if (this.state == StopwatchState.RUNNING) {

        }
    }

    stop() {
        console.log("stopping...");

        if (this.state == StopwatchState.RUNNING) {
            this.state = StopwatchState.PAUSED;
            console.log("b");
        }
    }

    reset() {
        if (this.state == StopwatchState.PAUSED) {
            this.state = Stopwatch.RUNNING;
        } else {
            this.state = Stopwatch.PAUSED;
        }

        console.log(this.state);
            
        // console.log("resetting...");
        // console.log(this.value);
        // console.log(this.display);
        // stop();
        // this.value = 0;
        // update();
    }
}

stopwatch = new Stopwatch();