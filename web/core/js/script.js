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

        hourElement.textContent = currentDate.getHours();
        minuteElement.textContent = currentDate.getMinutes();
        secondElement.textContent = currentDate.getSeconds();

        // setInterval to start the clock…
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
