document.addEventListener("DOMContentLoaded", function () {
    // Funktion för att visa/dölja lunchbuffé-information
    function toggleLunch() {
        let lunchInfo = document.getElementById("lunch-info");
        lunchInfo.style.display = lunchInfo.style.display === "none" ? "block" : "none";
    }

    // Funktion för att filtrera meny
    function filterMenu(category) {
        let menuItems = document.querySelectorAll(".menu-category li");
        
        menuItems.forEach(item => {
            if (category === "all" || item.classList.contains(category)) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });
    }

    // Eventlyssnare på lunch-knappen
    document.querySelector("#lunch button").addEventListener("click", toggleLunch);
    
    // Eventlyssnare på meny-knapparna
    document.querySelectorAll(".filter-buttons button").forEach(button => {
        button.addEventListener("click", function () {
            let category = this.getAttribute("onclick").replace("filterMenu('", "").replace("')", "");
            filterMenu(category);
        });
    });
});