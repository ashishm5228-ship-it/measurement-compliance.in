function login() {

    let role = document.getElementById("role").value;

    if (role === "owner") {
        window.location.href = "owner-dashboard.html";
    } 
    else {
        window.location.href = "officer-dashboard.html";
    }
}


function registerInstrument() {

    alert("Instrument registered successfully!");

    window.location.href = "owner-dashboard.html";
}


function submitApplication(event) {

    const applicationForm = document.getElementById("verification-application");

    if (!applicationForm.checkValidity()) {
        alert("Please complete all required fields before submitting your application.");
        return false;
    }

    alert("Verification application submitted successfully!");

    window.location.href = "owner-dashboard.html";

    return false;
}


function submitInspection() {

    alert("Inspection result submitted successfully!");

    window.location.href = "certificate.html";
}
