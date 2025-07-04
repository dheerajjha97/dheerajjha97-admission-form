
function saveAdminSettings() {
  const school = {
    name: document.getElementById('school-name').value,
    address: document.getElementById('school-address').value,
    udise: document.getElementById('udise-code').value,
  };
  localStorage.setItem('schoolInfo', JSON.stringify(school));
  alert("सेटिंग सहेज ली गई है");
}

function saveLocally() {
  const student = {
    name: document.getElementById('student-name').value,
    father: document.getElementById('father-name').value,
    mother: document.getElementById('mother-name').value,
    class: document.getElementById('class-select').value,
    stream: document.getElementById('stream-select').value,
  };
  localStorage.setItem('studentData', JSON.stringify(student));
  alert("डेटा सेव हो गया");
}

function generatePDF() {
  alert("PDF जनरेशन अभी placeholder है — अगले संस्करण में पूरा होगा।");
}
