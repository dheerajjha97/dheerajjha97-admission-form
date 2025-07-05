document.addEventListener('DOMContentLoaded', function() {
    // Initialize database
    if (!localStorage.getItem('students')) {
        localStorage.setItem('students', JSON.stringify([]));
    }

    // Tab navigation
    document.querySelectorAll('.tab-btn').forEach(button => {
        button.addEventListener('click', () => {
            document.querySelectorAll('.tab-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            button.classList.add('active');
            
            document.querySelectorAll('.screen').forEach(screen => {
                screen.classList.remove('active');
            });
            document.getElementById(button.dataset.target).classList.add('active');
        });
    });

    // Navigation buttons
    document.querySelectorAll('[data-target]').forEach(button => {
        if (button.dataset.target) {
            button.addEventListener('click', () => {
                document.querySelectorAll('.screen').forEach(screen => {
                    screen.classList.remove('active');
                });
                document.getElementById(button.dataset.target).classList.add('active');
                
                document.querySelectorAll('.tab-btn').forEach(btn => {
                    btn.classList.remove('active');
                    if (btn.dataset.target === button.dataset.target) {
                        btn.classList.add('active');
                    }
                });
            });
        }
    });

    // Form submission
    document.getElementById('admissionForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(this);
        const studentData = Object.fromEntries(formData.entries());
        
        // Generate admission number
        const admissionNumber = 'ADM-' + new Date().getFullYear() + '-' + Math.floor(1000 + Math.random() * 9000);
        studentData.admissionNumber = admissionNumber;
        studentData.admissionDate = new Date().toLocaleDateString();
        
        // Save to local storage
        const students = JSON.parse(localStorage.getItem('students'));
        students.push(studentData);
        localStorage.setItem('students', JSON.stringify(students));
        
        alert('Admission saved successfully!');
        this.reset();
        document.querySelector('[data-target="students"]').click();
        loadStudents();
    });

    // Load students
    function loadStudents() {
        const students = JSON.parse(localStorage.getItem('students'));
        const studentList = document.getElementById('studentList');
        studentList.innerHTML = '';
        
        students.forEach(student => {
            const li = document.createElement('li');
            li.className = 'student-item';
            li.innerHTML = `
                <div class="student-info">
                    <h3>${student.studentNameEnglish}</h3>
                    <p>${student.admissionNumber} | ${student.admissionDate}</p>
                </div>
                <div class="student-actions">
                    <button class="action-btn view-btn" data-id="${student.admissionNumber}">
                        <i class="fas fa-eye"></i>
                    </button>
                </div>
            `;
            studentList.appendChild(li);
        });
    }

    // Initial load
    loadStudents();
});