document.addEventListener("DOMContentLoaded", function(event) {
    setYear();
    
    function setYear() {
        let currentYear = new Date().getFullYear();
        let currentYearElement = document.getElementById("current-year");
        currentYearElement.textContent = currentYear;
    }
});
