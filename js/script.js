document.getElementById("loanForm").addEventListener("submit", function(e) {
  e.preventDefault();

  // Collect form data
  const formData = {
    fname: document.getElementById("fname").value.trim(),
    lname: document.getElementById("lname").value.trim(),
    email: document.getElementById("email").value.trim(),
    phone: document.getElementById("phone").value.trim(),
    loanAmount: document.getElementById("loanAmount").value.trim(),
    loanType: document.getElementById("loanType").value
  };

  // Basic validation
  if (formData.phone.length !== 10) {
    alert("Phone number must be 10 digits.");
    return;
  }

  if (formData.loanAmount < 1000) {
    alert("Loan amount must be at least 1000.");
    return;
  }

  // Store data locally
  let applications = JSON.parse(localStorage.getItem("loanApplications")) || [];
  applications.push(formData);
  localStorage.setItem("loanApplications", JSON.stringify(applications));

  // Show popup
  document.getElementById("popup").style.display = "flex";

  // Reset form
  document.getElementById("loanForm").reset();
});

// Close popup
function closePopup() {
  document.getElementById("popup").style.display = "none";
}
