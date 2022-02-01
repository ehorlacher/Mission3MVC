const getGrade = () => {

    let assignments = $("#assignments").val();
    let project = $("#project").val();
    let quizzes = $("#quizzes").val();
    let exams = $("#exams").val();
    let intex = $("#intex").val();

//This is the variable that is the sum of all percentages from different subjects
    let percentage = parseFloat(assignments) * .55 +
        (parseFloat(project) * .05) +
        (parseFloat(quizzes) * .1) +
        (parseFloat(exams) * .2) +
        (parseFloat(intex) * .1);

//This is the loop that assign grades based on percentages
    if (percentage <= 100 && percentage >= 90) {
        grade = "A";
    } else if (percentage <= 89 && percentage >= 80) {
        grade = "B";
    } else if (percentage <= 79 && percentage >= 70) {
        grade = "C";
    } else if (percentage <= 69 && percentage >= 60) {
        grade = "D";
    } else {
        grade = "F";
    }

//This is the output variable, which gets sent to the alert
    let output = ("Your final grade in IS 413 is " + percentage +
        ", which results in a(n) " +
        grade + " grade.");
    
    alert(output);
    
}
    
    
