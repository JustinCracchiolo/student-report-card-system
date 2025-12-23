document.getElementById("studentForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const student = {
        id: document.getElementById("id").value,
        first_name: document.getElementById("first_name").value,
        last_name: document.getElementById("last_name").value
    };

    const response = await fetch("http://localhost:3000/students/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(student)
    });

    const data = await response.json();
    if (response.ok && !data.error) {
        document.getElementById("message").textContent = "Sucessfully added " + student.first_name + " " + student.last_name + " to the database.";
    } else {
        document.getElementById("message").textContent =
        data.error || "Something went wrong";
    }

});
