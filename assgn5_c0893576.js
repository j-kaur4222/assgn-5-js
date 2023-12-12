document.addEventListener("DOMContentLoaded", function() {
    const num1Input = document.getElementById("num1");
    const num2Input = document.getElementById("num2");
    const num3Input = document.getElementById("num3");
    const findButton = document.getElementById("findButton");
    const resultDiv = document.getElementById("result");

    findButton.addEventListener("click", function() {
        const num1 = parseFloat(num1Input.value);
        const num2 = parseFloat(num2Input.value);
        const num3 = parseFloat(num3Input.value);

        if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
            alert("Please enter valid numbers.");
            return;
        }

        const largest = Math.max(num1, num2, num3);
        
        alert(`${largest} is the highest number.`);
    });
});
