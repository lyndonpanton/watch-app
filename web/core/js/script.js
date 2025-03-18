document.addEventListener("DOMContentLoaded", function(event) {
    setYear();
    setWatchClock();

    let hamburger = document.getElementById("hamburger");
    hamburger.addEventListener("click", toggleSidebar);

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
});
