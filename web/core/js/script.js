document.addEventListener("DOMContentLoaded", function(event) {
    setYear();

    let hamburger = document.getElementById("hamburger");
    hamburger.addEventListener("click", toggleSidebar);
    
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
