const express = require("express");
const router = express.Router();
const db = require("../db");

/* 
Data Base Schema

Student(id, first name, last name) [primary key id]

ClassGradea(studentId, class name, grade) [primary key (studentId, className); foreign key studentID referecnes id in Student]


*/

// Add a student
router.post("/add", (req, res) => {
    const { id, first_name, last_name } = req.body;

    const sql = `
        INSERT INTO Students (id, first_name, last_name)
        VALUES (?, ?, ?)
    `; 
    

    db.query(sql, [id, first_name, last_name], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: "Database error" });
        }
        res.json({ message: "Student added successfully" });
    });
});

//Add a class grade for a given student
router.post("/:id/add-class", (req, res) => {
    const student_ID = req.params.id;
    const { class_name, grade } = req.body;

    const sql = `
        INSERT INTO ClassGrades (student_ID, class_name, grade)
        VALUES (?, ?, ?)
    `;

    db.query(sql, [student_ID, class_name, grade], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: "Database error" });
        }
        res.json({ message: "Class added successfully" });
    });
});

//Get student information 
router.get("/:id/report", (req, res) => {
    const student_ID = req.params.id;

    const sql = `
        SELECT s.first_name, s.last_name, c.class_name, c.grade
        FROM Students s
        JOIN ClassGrades c ON s.id = c.student_ID
        WHERE s.id = ?
    `;

    db.query(sql, [student_ID], (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: "Database error" });
        }

        if (results.length === 0) {
            return res.status(404).json({ error: "Student not found" });
        }

        res.json(results);
    });
});

module.exports = router;

