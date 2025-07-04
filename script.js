
document.getElementById("classSelect").addEventListener("change", function() {
  const subjectSection = document.getElementById("subjectSection");
  subjectSection.style.display = this.value === "11" ? "block" : "none";
});

document.getElementById("admissionForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("फॉर्म सफलतापूर्वक सबमिट हुआ!");
});
