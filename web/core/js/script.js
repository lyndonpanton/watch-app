document.addEventListener("DOMContentLoaded", function(event) {
    setYear();
    setWatchClock();

    let hamburger = document.getElementById("hamburger");
    hamburger.addEventListener("click", toggleSidebar);

    let toggleSections = document.getElementsByClassName("watch-toggle-section");
    
    for (let i = 0; i < toggleSections.length; i++) {
        toggleSections[i].addEventListener("click", toggleWatchSection);
    }

    // let stopwatchPlayPause = document.getElementById("stopwatch-play-pause");
    // let stopwatchPlayPauseInterval;
    // stopwatchPlayPause.addEventListener("click", toggleStopWatch);

    // let stopWatchReset = document.getElementById("stopwatch-reset");
    // stopWatchReset.addEventListener("click", resetStopWatch);

    function resetStopWatch(event) {
        clearInterval(stopwatchPlayPauseInterval);

        let hourElement = document.getElementById("watch-stopwatch-digital-hour");
        let minuteElement = document.getElementById("watch-stopwatch-digital-minute");
        let secondElement = document.getElementById("watch-stopwatch-digital-second");
        let millisecondElement = document.getElementById("watch-stopwatch-digital-millisecond");

        hourElement.textContent = "00";
        minuteElement.textContent = "00";
        secondElement.textContent = "00";
        millisecondElement.textContent = "00";

        let icon = document.getElementById("stopwatch-play-pause").children[0];
        
        icon.classList.add("fa-play");
        icon.classList.remove("fa-pause");
    }

    function setWatchClock() {
        let hourElement = document.getElementById("watch-clock-digital-hour");
        let minuteElement = document.getElementById("watch-clock-digital-minute");
        let secondElement = document.getElementById("watch-clock-digital-second");

        let currentDate = new Date();

        let currentHour = currentDate.getHours() < 10 ?
                "0" + currentDate.getHours()
                : currentDate.getHours();
        let currentMinute = currentDate.getMinutes() < 10 ?
                "0" + currentDate.getMinutes()
                : currentDate.getMinutes();
        let currentSecond = currentDate.getSeconds() < 10 ?
                "0" + currentDate.getSeconds()
                : currentDate.getSeconds();

        hourElement.textContent = currentHour;
        minuteElement.textContent = currentMinute;
        secondElement.textContent = currentSecond;

        setInterval(setWatchClock, 1000);
    }
    
    function setYear() {
        let currentYear = new Date().getFullYear();
        let currentYearElement = document.getElementById("current-year");
        currentYearElement.textContent = currentYear;
    }

    function toggleSidebar(event) {
        let sidebar = document.getElementById("watch-information");

        if (sidebar.classList.contains("sidebar-open")) {
            sidebar.classList.remove("sidebar-open");
        } else {
            sidebar.classList.add("sidebar-open");
        }
    }

    function toggleStopWatch(event) {
        let icon = document.getElementById("stopwatch-play-pause").children[0];

        if (icon.classList.contains("fa-play")) {
            icon.classList.remove("fa-play");
            icon.classList.add("fa-pause");
            
            // stopwatchPlayPauseInterval = setInterval(updateStopWatch, 1);
            startStopWatch();

        } else {
            icon.classList.remove("fa-pause");
            icon.classList.add("fa-play");
            
            // clearInterval(stopwatchPlayPauseInterval);
        }
    }

    function toggleWatchSection(event) {
        event.stopPropagation();
        event.stopImmediatePropagation();

        let toggleSections = document.getElementsByClassName("watch-toggle-section");
        
        for (let i = 0; i < toggleSections.length; i++) {
            let lastHypen = toggleSections[i].id.lastIndexOf("-");
            let suffix = toggleSections[i].id.slice(lastHypen + 1);
            let watchSectionId = "watch-" + suffix;

            if (
                toggleSections[i].id == event.target.id
                || toggleSections[i].id == event.target.parentElement.id
            ) {
                document.getElementById(watchSectionId).classList.remove("watch-hidden");
            } else {
                document.getElementById(watchSectionId).classList.add("watch-hidden");
            }
        }
    }

    function updateStopWatch(element, startTime) {
        // let hourElement = document.getElementById("watch-stopwatch-digital-hour");
        // let minuteElement = document.getElementById("watch-stopwatch-digital-minute");
        // let secondElement = document.getElementById("watch-stopwatch-digital-second");
        // let millisecondElement = document.getElementById("watch-stopwatch-digital-millisecond");

        // let hourDigits = parseInt(hourElement.textContent);
        // let minuteDigits = parseInt(minuteElement.textContent);
        // let secondDigits = parseInt(secondElement.textContent);
        // let millisecondDigits = parseInt(millisecondElement.textContent);

        // if (millisecondDigits != "59") {
        //     millisecondElement.textContent = millisecondElement.textContent + 1;
        // } else if (millisecondDigits == "59")

        // Format with leading 0s after

        console.log(new Date - startTime);
        // element.textContent = new Date() - startTime;
        // console.log(element.textContent);

        setTimeout(updateStopWatch(element, startTime), 0);

        // if (millisecondDigits < 100) {
        //     if (millisecondDigits < 10) {
        //         millisecondElement.textContent = int("0" + millisecondDigits) + 1;
        //     } else {
        //         millisecondElement.textContent = millisecondDigits.slice() + 1;
        //     }
        // } else {
        //     millisecondElement.textContent = "00";

        //     if (secondDigits < 60) {
        //         // if ()
        //         secondElement.textContent = secondDigits + 1;
        //     } else {
        //         secondElement.textContent = 0;
        //     }
        // }
    }

    function startStopWatch(event) {
        let element = document.getElementById("watch-stopwatch-digits");
        let startTime = new Date();

        updateStopWatch(element, startTime);
    }

    /* Stopwatch */
    let startButton = document.getElementById("start");
    startButton.addEventListener("click", start);

    let stopButton = document.getElementById("stop");
    stopButton.addEventListener("click", stop);

    let resetButton = document.getElementById("reset");
    resetButton.addEventListener("click", reset);

    let now;
    let element;
    let isRunning = false;
    let milliseconds;
    let seconds;
    let minutes;
    let hours;
    let millisecondsText;
    let secondsText;
    let minutesText;
    let hoursText;

    function start() {
        isRunning = true;
        element = document.getElementById("stopwatch");
        now = new Date;

        update();
    }

    function stop() {

    }

    function reset() {

    }

    function update() {
        milliseconds = (new Date - now);
        seconds = parseInt(milliseconds / 1000);
        minutes = parseInt(seconds / 60);
        hours = parseInt(minutes / 60);

        millisecondsText = milliseconds % 100;
        secondsText = seconds % 60;
        minutesText = minutes % 60;
        hoursText = hours % 99;

        if (milliseconds > 100) {
            millisecondsText = milliseconds % 100;
        } else if (milliseconds < 10) {
            millisecondsText = "0" + milliseconds;
        }

        if (seconds >= 1) {
            if (minutes >= 1) {
                if (hours >= 1) {
                    element.innerHTML = String(hours).substring(0, 2)
                    + String(minutes).substring(0, 2)
                    + String(seconds).substring(0, 2)
                    + String(new Date - now).substring(0, 2);
                } else {
                    element.innerHTML = String(minutes).substring(0, 2)
                    + ":" + String(seconds).substring(0, 2)
                    + "." + String(new Date - now).substring(1, 3);
                }
            } else {
                if (seconds >= 10) {
                    element.innerHTML = String(seconds).substring(0, 1)
                    + "." + String(new Date - now).substring(1, 2);
                } else {
                    element.innerHTML = String(seconds).substring(0, 2)
                    + "." + String(new Date - now).substring(1, 3);
                }
            }
        } else {
            element.innerHTML = String(new Date - now).substring(1, 3);
        }

        element.innerHTML = hoursText
            + ":" + minutesText
            + ":" + secondsText
            + "." + millisecondsText;

        if (isRunning) {
            setTimeout(update, 0);
        }

    }
});
