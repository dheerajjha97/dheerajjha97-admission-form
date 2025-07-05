
const subjectList = {
  "arts": {
    compulsory: ["Hindi", "English"],
    elective: ["History", "Geography", "Political Science"],
    additional: ["Home Science", "Music"]
  },
  "science": {
    compulsory: ["Hindi", "English"],
    elective: ["Physics", "Chemistry", "Biology", "Maths"],
    additional: ["Computer Science"]
  },
  "commerce": {
    compulsory: ["Hindi", "English"],
    elective: ["Business Studies", "Accountancy", "Economics"],
    additional: ["Maths", "Computer Science"]
  }
};

function saveAdminSettings() {
  const settings = {
    school: document.getElementById('schoolName').value,
    address: document.getElementById('schoolAddress').value,
    udise: document.getElementById('udiseCode').value
  };
  localStorage.setItem("adminSettings", JSON.stringify(settings));
  alert("Admin settings saved");
}

function toggleStream() {
  const cls = document.getElementById("classSelect").value;
  document.getElementById("streamGroup").style.display = cls === "11" ? "block" : "none";
  loadSubjects();
}

function loadSubjects() {
  const stream = document.getElementById("streamSelect").value;
  const containerIds = ["compulsory", "elective", "additional"];
  containerIds.forEach(id => {
    const div = document.getElementById(id + "Subjects");
    div.innerHTML = "";
    if (subjectList[stream] && subjectList[stream][id]) {
      subjectList[stream][id].forEach((subj, i) => {
        const input = document.createElement("input");
        input.type = "checkbox";
        input.name = id;
        input.value = subj;
        input.id = id + "_" + i;
        const label = document.createElement("label");
        label.htmlFor = input.id;
        label.innerText = subj;
        div.appendChild(input);
        div.appendChild(label);
      });
    }
  });
}

function saveForm() {
  const data = {
    name: document.getElementById("studentName").value,
    class: document.getElementById("classSelect").value,
    stream: document.getElementById("streamSelect").value,
    subjects: {}
  };
  ["compulsory", "elective", "additional"].forEach(type => {
    const inputs = document.querySelectorAll("input[name=" + type + "]:checked");
    data.subjects[type] = Array.from(inputs).map(i => i.value);
  });
  localStorage.setItem("studentForm", JSON.stringify(data));
  alert("Form saved locally!");
}

function generatePDF() {
  alert("PDF generation is not yet implemented.");
}

window.onload = () => {
  toggleStream();
  loadSubjects();
};
