
let uploadedResume = "";

document.getElementById("resumeUpload").addEventListener("change", function (e) {
  const file = e.target.files[0];
  const reader = new FileReader();
  reader.onload = function (event) {
    uploadedResume = event.target.result;
    alert("Resume uploaded successfully!");
  };
  reader.readAsText(file);
});

function adaptResume() {
  const jobDesc = document.getElementById("jobDescription").value;
  const adapted = `Adapted Resume for Job:

${uploadedResume}

Matched to:
${jobDesc}`;
  document.getElementById("adaptedResume").innerText = adapted;
  const applyURL = `https://www.linkedin.com/jobs/search/?keywords=${encodeURIComponent(jobDesc.split(' ')[0])}`;
  document.getElementById("applyLink").href = applyURL;
}

function downloadResume() {
  const text = document.getElementById("adaptedResume").innerText;
  const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "adapted_resume.txt";
  link.click();
}
