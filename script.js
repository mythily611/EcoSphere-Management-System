// Welcome Message
window.onload = function () {
    alert("Welcome to EcoSphere ESG Management Platform!");
};

// Get Started Button
const btn = document.querySelector("button");

btn.addEventListener("click", function () {
    window.location.href = "dashboard.html";
});
// Welcome message
window.onload = function () {
    alert("Welcome to the EcoSphere Dashboard!");
};

// ESG Score Cards
const scoreCards = document.querySelectorAll("section div");

scoreCards.forEach(function(card) {
    card.addEventListener("click", function() {
        const title = card.querySelector("h3").textContent;
        const score = card.querySelector("p").textContent;
// Welcome Message
window.onload = function () {
    alert("Welcome to the Environmental Management Module!");
};

// Sustainability Goals Click
const goals = document.querySelectorAll("ol li");

goals.forEach(function(goal) {
    goal.addEventListener("click", function() {
        alert("Selected Goal: " + goal.textContent);
    });
});

// Carbon Emission Details Click
const details = document.querySelectorAll("ul li");

details.forEach(function(item) {
    item.addEventListener("click", function() {
        alert(item.textContent);
    });
});
        // Welcome Message
window.onload = function () {
    alert("Welcome to the Social Management Module!");
};

// CSR Activities Table
const rows = document.querySelectorAll("table tr");

rows.forEach(function(row, index) {
    if (index > 0) {
        row.addEventListener("click", function() {
            alert("Selected Activity: " + row.cells[0].textContent);
        });
    }
});

// Employee Participation
const employees = document.querySelectorAll("ul li");

employees.forEach(function(employee) {
    employee.addEventListener("click", function() {
        alert(employee.textContent);
    });
});

// Social Performance Cards
const cards = document.querySelectorAll("section div");

cards.forEach(function(card) {
    card.addEventListener("click", function() {
        const title = card.querySelector("h3").textContent;
        const value = card.querySelector("p").textContent;

        alert(title + "\n" + value);
    });
});
        
        

    
