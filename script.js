let weight = document.querySelector(".weight");
let height = document.querySelector(".height");
let txt = document.querySelector(".txt");


const calculateBmi = () => {
    // BMI formula BMI=kg/m*m
    let kg = weight.value;
    let m = height.value;
    let powerM = Math.pow(m, 2);
    let bmi = kg / powerM;

    if (bmi > 16.0 || bmi < 18.5) {
        txt.innerHTML = `Your BMI is ${bmi} You're Underweight`;
        
    } else if (bmi > 18.5 || bmi < 25.0) {
        txt.innerHTML = `Your BMI is ${bmi} You're Normal`;
    } else if (bmi > 25.0 || bmi < 40.0) {
        txt.innerHTML = `Your BMI is ${bmi} You're Overweight`;
    }else{
        txt.innerHTML=`Your BMI is ${bmi}`
    }

}