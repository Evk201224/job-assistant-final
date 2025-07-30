
function adaptResume() {
  const jobDesc = document.getElementById("jobDescription").value;
  const adaptedText = "Adapted resume based on job description:\n" + jobDesc;
  document.getElementById("adaptedResume").textContent = adaptedText;
}

function downloadPDF() {
  const content = document.getElementById("adaptedResume").textContent;
  const blob = new Blob([content], { type: "application/pdf" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "adapted_resume.pdf";
  link.click();
}

function applyNow() {
  alert("Application has been submitted.");
}
