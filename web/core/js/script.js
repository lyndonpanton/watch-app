document.addEventListener("DOMContentLoaded", function(event) {
    setYear();
    setWatchClock();

    let hamburger = document.getElementById("hamburger");
    hamburger.addEventListener("click", toggleSidebar);

    let toggleSections = document.getElementsByClassName("watch-toggle-section");
    
    for (let i = 0; i < toggleSections.length; i++) {
        toggleSections[i].addEventListener("click", toggleWatchSection);
    }

    let stopwatchPlayPause = document.getElementById("stopwatch-play-pause");
    let stopwatchPlayPauseInterval;
    stopwatchPlayPause.addEventListener("click", toggleStopWatch);

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
            // start / stop stopwatch
            stopwatchPlayPauseInterval = setInterval(updateStopWatch, 1);

        } else {
            icon.classList.remove("fa-pause");
            icon.classList.add("fa-play");
            // start / stop stopwatch
            clearInterval(stopwatchPlayPauseInterval);
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

    function updateStopWatch() {
        let hourElement = document.getElementById("watch-stopwatch-digital-hour");
        let minuteElement = document.getElementById("watch-stopwatch-digital-minute");
        let secondElement = document.getElementById("watch-stopwatch-digital-second");

        let hourDigits = parseInt(document.getElementById("watch-stopwatch-digital-hour"));
        let minuteDigits = parseInt(document.getElementById("watch-stopwatch-digital-minute"));
        let secondDigits = parseInt(document.getElementById("watch-stopwatch-digital-second"));

        console.log(hourElement.textContent + ", " + minuteElement.textContent + ", " + secondElement.textContent);

        secondElement.textContent = parseInt(secondElement.textContent) + 1;
        
        if (secondDigits == 0) {
            secondElement.textContent = 1;
        } else if (secondDigits < 59) {
            secondElement.textContent = secondDigits + 1;
        } else {
            if (minuteDigits == 0) {
                minuteElement.textContent = 1;
            } else if (minuteDigits < 59) {
                minuteElement.textContent = minuteDigits + 1;
            } else {
                hourElement.textContent = hourDigits + 1;
            }
        }
    }
});
