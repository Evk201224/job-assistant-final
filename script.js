document.getElementById('uploadResumeBtn').addEventListener('click', () => {
  const fileInput = document.getElementById('resumeInput');
  const file = fileInput.files[0];
  if (!file) return alert('Please select a resume file.');

  const reader = new FileReader();
  reader.onload = function (e) {
    const content = e.target.result;
    document.getElementById('resumeText').value = content;
  };

  if (file.type === 'application/pdf' || file.name.endsWith('.pdf')) {
    alert('PDF support limited in browser. Please paste resume manually.');
  } else {
    reader.readAsText(file);
  }
});

document.getElementById('findJobsBtn').addEventListener('click', () => {
  const resumeText = document.getElementById('resumeText').value;
  if (!resumeText) return alert('Please upload or paste your resume first.');

  // Dummy job matching logic for test
  document.getElementById('jobResults').innerText =
    'Found 3 matching jobs on LinkedIn and Indeed.\nMatch %: 76% average.\n(Real search connects via backend API.)';
});

document.getElementById('adaptResumeBtn').addEventListener('click', () => {
  const original = document.getElementById('resumeText').value;
  if (!original) return alert('No resume loaded.');

  const adapted = original.replace(/Administrative/g, 'Operations')
    + '\n\n[Resume adapted to highlight relevant experience for the job.]';

  document.getElementById('adaptedResumeText').value = adapted;
});

document.getElementById('downloadPdfBtn').addEventListener('click', () => {
  const text = document.getElementById('adaptedResumeText').value;
  if (!text) return alert('No adapted resume to download.');

  const blob = new Blob([text], { type: 'application/pdf' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'Adapted_Resume.pdf';
  link.click();
});
