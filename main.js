document.getElementById('nutrition-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const age = parseInt(document.getElementById('age').value);
    const gender = document.getElementById('gender').value;
    const disease = document.getElementById('disease').value;
    const activityLevel = parseFloat(document.getElementById('activity-level').value);
    const goal = document.getElementById('goal').value;

    const bmi = weight / (height * height);

    let bmr;
    if (gender === 'male') {
        bmr = 66 + (13.75 * weight) + (5 * height * 100) - (6.75 * age);
    } else {
        bmr = 655 + (9.56 * weight) + (1.85 * height * 100) - (4.68 * age);
    }

    const totalCalories = bmr * activityLevel;

    let targetCalories;
    if (goal === 'lose') {
        targetCalories = totalCalories - 500;  
    } else if (goal === 'gain') {
        targetCalories = totalCalories + 500; 
    } else {
        targetCalories = totalCalories;  
    }

    const carbs = (targetCalories * 0.5) / 4;  
    const proteins = (targetCalories * 0.2) / 4;
    const fats = (targetCalories * 0.3) / 9;  
    const water = weight * 30; 

    document.getElementById('calories').innerText = Daily Calories: ${targetCalories}  calory;
    document.getElementById('water').innerText = daily Water: ${water} ml;
    document.getElementById('carbs').innerText = Carbohydrate: ${carbs} g;
    document.getElementById('proteins').innerText = Proteins: ${proteins} g;
    document.getElementById('fats').innerText = Fats: ${fats} جرام;

    let dietPlan = "Balanced Diet.";
    if (goal === 'lose') {
        dietPlan = "Low-calorie diet with exercise.";
    } else if (goal === 'gain') {
        dietPlan = "A diet high in protein and carbohydrates.";
    }

    document.getElementById('diet-plan').innerText = Diet: ${dietPlan};

    let exercisePlan = "Light exercises such as walking or light exercises at home.";
    if (goal === 'lose') {
        exercisePlan = "Cardio exercises such as running or swimming.";
    } else if (goal === 'gain') {
        exercisePlan = "Weight lifting exercises to increase muscle mass.";
    }

    document.getElementById('exercise-plan').innerText = Plan Excercise: ${exercisePlan};

    let bodyStatus = '';
    let bodyImage = '';
    if (bmi < 18.5) {
        bodyStatus = 'You are underweight. Try to increase calories gradually.';
        bodyImage = 'images/thin.jpg.jpg';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        bodyStatus = 'Your weight is moderate. Maintain a healthy lifestyle.';
        bodyImage = 'images/normal.jpg.jpg'; 
    } else {
        bodyStatus = 'You are overweight. Try to reduce calories and increase physical activity.';
        bodyImage = 'images/overweight.jpg.jpg';
    }

    document.getElementById('body-img').src = bodyImage;
    document.getElementById('body-status').innerText = bodyStatus;

    let medicalNote = '';
    if (disease === 'diabetes') {
        medicalNote = 'Diabetics should eat small, balanced meals that contain slow-absorbing carbohydrates.';
    } else if (disease === 'hypertension') {
        medicalNote = 'You should avoid salty foods and choose foods that contain potassium and healthy fats.';
    } else if (disease === 'heart') {
        medicalNote = ' You should reduce saturated fats and increase foods rich in omega-3 fatty acids.';
    }

    document.getElementById('medical-note').innerText = medicalNote;

    document.getElementById('results').style.display = 'block';
});
