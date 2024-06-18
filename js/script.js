function openTab(tabName,buttonElement){

   document.querySelectorAll(".tab-content").forEach(function(tab) {
        tab.style.display = "none";
    });

    // Remove the active class from all tab buttons
    document.querySelectorAll(".tab-button").forEach(function(button) {
        button.classList.remove("active");
    });

    // Show the current tab content, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    buttonElement.classList.add("active");
}

// By default, open the Home tab
document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".tab-button").click();
});

