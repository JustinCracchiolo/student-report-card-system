document.getElementById("loadBtn").addEventListener("click", async () => {
    const id = document.getElementById("student_id").value;

    const response = await fetch(`http://localhost:3000/students/${id}/report`);
    const data = await response.json();

    if (data.error) {
        document.getElementById("studentName").textContent = data.error;
        return;
    }

    // Set student name
    document.getElementById("studentName").textContent =
        `${data[0].first_name} ${data[0].last_name}`;

    // Fill table
    const tbody = document.querySelector("#reportTable tbody");
    tbody.innerHTML = "";

    data.forEach(row => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${row.class_name}</td>
            <td>${row.grade}</td>
        `;
        tbody.appendChild(tr);
    });
   
});
