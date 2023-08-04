function calculateBMI() {
    const height = prompt("Please enter your height");
    const weight = prompt("Please enter your weight");
    const BMI = weight / (height * height) * 10000;
    alert("Your BMI is: " + BMI.toFixed(1))
}
