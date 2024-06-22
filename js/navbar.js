
function updateMenu() {
    const screenWidth = window.innerWidth;
    const menuToggle = document.querySelector(".navbar-toggler"); 
    const menuContent = document.getElementById("navbarToggleExternalContent");
    const menuContent2 = document.getElementById("navbarcontent");
    const title = document.getElementById("title1");
    const title2 = document.getElementById("title2");
    if (screenWidth > 750) {
        // Show the menu and hide the toggle button
        menuToggle.style.display = "none";
        menuContent.classList.remove("show");
        title.style.display = "none";
        title2.style.display = "block";
        // Show menuContent2
        menuContent2.style.display = "block";
    } else {
        // Hide the menu and show the toggle button
        menuToggle.style.display = "block";
        menuContent.classList.add("visible");
        title.style.display = "block";
        title2.style.display = "none";
        // Hide menuContent2
        menuContent2.style.display = "none";
    }
}

document.addEventListener("DOMContentLoaded", function() {
    // Your existing code here, including the updateMenu function
    updateMenu();
    window.addEventListener("resize", updateMenu);
});
 