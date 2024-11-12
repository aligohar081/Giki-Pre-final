// Function to calculate the total and display results
function calculateTotal() {
    try {
        // Retrieve weights
        const quizWeight = parseFloat(document.getElementById('quizWeight').value);
        const assignmentWeight = parseFloat(document.getElementById('assignmentWeight').value);
        const midWeight = parseFloat(document.getElementById('midWeight').value);

        // Retrieve total marks
        const totalQuizMarks = document.getElementById('totalQuizMarks').value.split(',').map(Number);
        const totalAssignmentMarks = document.getElementById('totalAssignmentMarks').value.split(',').map(Number);
        const totalMidMarks = parseFloat(document.getElementById('totalMidMarks').value);

        // Retrieve obtained marks
        const obtainedQuizMarks = document.getElementById('obtainedQuizMarks').value.split(',').map(Number);
        const obtainedAssignmentMarks = document.getElementById('obtainedAssignmentMarks').value.split(',').map(Number);
        const obtainedMidMarks = parseFloat(document.getElementById('obtainedMidMarks').value);

        // Calculations for quizzes
        const quizTotal = totalQuizMarks.reduce((a, b) => a + b, 0);
        const quizObtained = obtainedQuizMarks.reduce((a, b) => a + b, 0);
        const quizPercentage = (quizObtained / quizTotal) * 100;
        const quizWeighted = (quizPercentage * quizWeight) / 100;

        // Calculations for assignments
        const assignmentTotal = totalAssignmentMarks.reduce((a, b) => a + b, 0);
        const assignmentObtained = obtainedAssignmentMarks.reduce((a, b) => a + b, 0);
        const assignmentPercentage = (assignmentObtained / assignmentTotal) * 100;
        const assignmentWeighted = (assignmentPercentage * assignmentWeight) / 100;

        // Calculations for midterm
        const midPercentage = (obtainedMidMarks / totalMidMarks) * 100;
        const midWeighted = (midPercentage * midWeight) / 100;

        // Total weighted percentage
        const totalPercentage = quizWeighted + assignmentWeighted + midWeighted;

        // Display result
        document.getElementById('result').innerHTML = `
            <h3>Results</h3>
            <p>Quiz Percentage: ${quizPercentage.toFixed(2)}%</p>
            <p>Assignment Percentage: ${assignmentPercentage.toFixed(2)}%</p>
            <p>Mid Percentage: ${midPercentage.toFixed(2)}%</p>
            <p>Total Weighted Percentage: ${totalPercentage.toFixed(2)}%</p>
        `;

    } catch (error) {
        alert("Please check your inputs for correctness!");
    }
}

// Function to download results as a PDF
function downloadPDF() {
    const { jsPDF } = window.jspdf;
    const pdf = new jsPDF();

    // Fetch results from the result div
    const resultElement = document.getElementById('result');
    const results = resultElement.innerText; // Get text content of the results

    // Format the PDF content
    pdf.text("Prefinal Marks Calculator Results", 10, 10);
    pdf.text(results, 10, 20);

    // Save the PDF with a title
    pdf.save("Prefinal_Marks_Results.pdf");
}
