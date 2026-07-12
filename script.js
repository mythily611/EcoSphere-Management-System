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
        // governance.js
// EcoSphere ESG Management Platform

let governanceScore = 0;

// Calculate Governance Score
function calculateGovernance() {

    let compliance = Number(document.getElementById("compliance").value);
    let audit = Number(document.getElementById("audit").value);
    let security = Number(document.getElementById("security").value);
    let ethics = Number(document.getElementById("ethics").value);

    governanceScore = (compliance + audit + security + ethics) / 4;

    document.getElementById("govScore").innerHTML =
        governanceScore.toFixed(1) + " / 100";

    showGovernanceStatus();
}

// Show Governance Status
function showGovernanceStatus() {

    let status = "";

    if (governanceScore >= 90) {
        status = "Excellent Governance";
    } else if (governanceScore >= 75) {
        status = "Good Governance";
    } else if (governanceScore >= 60) {
        status = "Average Governance";
    } else {
        status = "Needs Improvement";
    }

    document.getElementById("govStatus").innerHTML = status;
}

// Compliance Check
function checkCompliance() {

    let compliance = Number(document.getElementById("compliance").value);

    if (compliance >= 80) {
        alert("Compliance Status: Passed");
    } else {
        alert("Compliance Status: Failed");
    }
}

// Audit Report
function generateAuditReport() {

    let report =
        "Governance Report\n\n" +
        "Compliance : " + document.getElementById("compliance").value + "\n" +
        "Audit : " + document.getElementById("audit").value + "\n" +
        "Security : " + document.getElementById("security").value + "\n" +
        "Ethics : " + document.getElementById("ethics").value + "\n\n" +
        "Governance Score : " + governanceScore.toFixed(1);

    alert(report);
}

// Reset Form
function resetGovernance() {

    document.getElementById("compliance").value = "";
    document.getElementById("audit").value = "";
    document.getElementById("security").value = "";
    document.getElementById("ethics").value = "";

    document.getElementById("govScore").innerHTML = "0 / 100";
    document.getElementById("govStatus").innerHTML = "-";

    governanceScore = 0;
}

// Auto Update Score
document.addEventListener("input", function () {

    if (
        document.getElementById("compliance") &&
        document.getElementById("audit") &&
        document.getElementById("security") &&
        document.getElementById("ethics")
    ) {
        calculateGovernance();
    }
});
        // reports.js
// EcoSphere ESG Management Platform

let reportData = [];

// Save Report
function saveReport() {

    const report = {
        date: new Date().toLocaleDateString(),
        environmental: Number(document.getElementById("environmentScore").value),
        social: Number(document.getElementById("socialScore").value),
        governance: Number(document.getElementById("governanceScore").value)
    };

    report.total =
        ((report.environmental +
          report.social +
          report.governance) / 3).toFixed(2);

    reportData.push(report);

    displayReports();
}

// Display Reports
function displayReports() {

    const table = document.getElementById("reportTable");

    if (!table) return;

    table.innerHTML = "";

    reportData.forEach(function(report, index) {

        let row = `
        <tr>
            <td>${index + 1}</td>
            <td>${report.date}</td>
            <td>${report.environmental}</td>
            <td>${report.social}</td>
            <td>${report.governance}</td>
            <td>${report.total}</td>
        </tr>`;

        table.innerHTML += row;
    });
}

// Generate ESG Report
function generateReport() {

    if (reportData.length === 0) {
        alert("No reports available.");
        return;
    }

    alert("ESG Report Generated Successfully!");
}

// Download Report
function downloadReport() {

    if (reportData.length === 0) {
        alert("No data available to download.");
        return;
    }

    let content = "EcoSphere ESG Report\n\n";

    reportData.forEach(function(report, index) {

        content +=
            "Report " + (index + 1) + "\n" +
            "Date : " + report.date + "\n" +
            "Environmental : " + report.environmental + "\n" +
            "Social : " + report.social + "\n" +
            "Governance : " + report.governance + "\n" +
            "Total ESG Score : " + report.total + "\n\n";
    });

    const blob = new Blob([content], { type: "text/plain" });

    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "EcoSphere_ESG_Report.txt";
    link.click();

    URL.revokeObjectURL(link.href);
}

// Delete All Reports
function clearReports() {

    if (confirm("Delete all reports?")) {
        reportData = [];
        displayReports();
    }
}

// Search Report
function searchReport() {

    const keyword = document
        .getElementById("searchReport")
        .value
        .toLowerCase();

    const rows = document.querySelectorAll("#reportTable tr");

    rows.forEach(function(row) {

        if (row.textContent.toLowerCase().includes(keyword)) {
            row.style.display = "";
        } else {
            row.style.display = "none";
        }

    });
}

// Export JSON
function exportJSON() {

    const data = JSON.stringify(reportData, null, 2);

    const blob = new Blob([data], { type: "application/json" });

    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "EcoSphere_Report.json";
    link.click();

    URL.revokeObjectURL(link.href);
}
        
        

    
