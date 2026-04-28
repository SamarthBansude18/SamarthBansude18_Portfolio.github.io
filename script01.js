// Function to open the full-screen image view and display the selected image
function openFullScreen(src) {
    document.getElementById("fullScreenImg").src = src; // Set the source of the full-screen image
    document.getElementById("fullScreenView").style.display = "flex"; // Show the full-screen view
}