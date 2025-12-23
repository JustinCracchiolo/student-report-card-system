document.getElementById("classForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const studentID = document.getElementById("student_id").value;

    const classData = {
        class_name: document.getElementById("class_name").value,
        grade: document.getElementById("grade").value
    };

    const response = await fetch(`http://localhost:3000/students/${studentID}/add-class`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(classData)
    });

    const data = await response.json();
    
    if (response.ok && !data.error) {
        document.getElementById("message").textContent = "Successfully added grade to the database";
    } else {
        document.getElementById("message").textContent =
        data.error || "Something went wrong";
    }

});
