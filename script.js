// Welcome Message
window.onload = function () {
    alert("Welcome to EcoSphere ESG Management Platform!");
};

// Get Started Button
const btn = document.querySelector("button");

btn.addEventListener("click", function () {
    window.location.href = "dashboard.html";
});