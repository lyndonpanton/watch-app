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

    document.getElementById("start").addEventListener("click", stopwatch.start);
    document.getElementById("stop").addEventListener("click", stopwatch.stop);
    document.getElementById("reset").addEventListener("click", stopwatch.reset);
});
