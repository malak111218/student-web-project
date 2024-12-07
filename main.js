document.getElementById('nutrition-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // جمع المدخلات
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const age = parseInt(document.getElementById('age').value);
    const gender = document.getElementById('gender').value;
    const disease = document.getElementById('disease').value;
    const activityLevel = parseFloat(document.getElementById('activity-level').value);
    const goal = document.getElementById('goal').value;

    // حساب مؤشر كتلة الجسم (BMI)
    const bmi = weight / (height * height);

    // حساب السعرات الحرارية الأساسية (BMR)
    let bmr;
    if (gender === 'male') {
        bmr = 66 + (13.75 * weight) + (5 * height * 100) - (6.75 * age);
    } else {
        bmr = 655 + (9.56 * weight) + (1.85 * height * 100) - (4.68 * age);
    }

    // تعديل السعرات الحرارية حسب مستوى النشاط
    const totalCalories = bmr * activityLevel;

    // تعديل السعرات الحرارية حسب الهدف
    let targetCalories;
    if (goal === 'lose') {
        targetCalories = totalCalories - 500;  // لتقليل 500 سعرة حرارية
    } else if (goal === 'gain') {
        targetCalories = totalCalories + 500;  // لزيادة 500 سعرة حرارية
    } else {
        targetCalories = totalCalories;  // الحفاظ على الوزن
    }

    // حساب النسب المئوية للمغذيات
    const carbs = (targetCalories * 0.5) / 4;  // 50% من السعرات = كربوهيدرات
    const proteins = (targetCalories * 0.2) / 4;  // 20% من السعرات = بروتينات
    const fats = (targetCalories * 0.3) / 9;  // 30% من السعرات = دهون
    const water = weight * 30;  // 30 مل لكل كيلو

    // عرض النتائج
    document.getElementById('calories').innerText = السعرات الحرارية: ${targetCalories} سعرة حرارية;
    document.getElementById('water').innerText = كمية الماء: ${water} مل;
    document.getElementById('carbs').innerText = الكربوهيدرات: ${carbs} جرام;
    document.getElementById('proteins').innerText = البروتينات: ${proteins} جرام;
    document.getElementById('fats').innerText = الدهون: ${fats} جرام;

    // تحديد النظام الغذائي
    let dietPlan = "نظام غذائي متوازن.";
    if (goal === 'lose') {
        dietPlan = "نظام غذائي منخفض السعرات مع تمرين رياضي.";
    } else if (goal === 'gain') {
        dietPlan = "نظام غذائي عالي البروتين والكربوهيدرات.";
    }

    document.getElementById('diet-plan').innerText = النظام الغذائي: ${dietPlan};

    // خطة التمرين
    let exercisePlan = "تمارين خفيفة مثل المشي أو تمارين خفيفة في المنزل.";
    if (goal === 'lose') {
        exercisePlan = "تمارين كاريدو مثل الجري أو السباحة.";
    } else if (goal === 'gain') {
        exercisePlan = "تمارين رفع الأثقال لزيادة الكتلة العضلية.";
    }

    document.getElementById('exercise-plan').innerText = خطة التمرين: ${exercisePlan};

    // عرض حالة الجسم بناءً على BMI
    let bodyStatus = '';
    let bodyImage = '';
    if (bmi < 18.5) {
        bodyStatus = 'أنت تعاني من نقص الوزن. حاول زيادة السعرات الحرارية بشكل تدريجي.';
        bodyImage = 'images/thin.jpg.jpg'; // صورة للنحافة
    } else if (bmi >= 18.5 && bmi < 24.9) {
        bodyStatus = 'وزنك معتدل. حافظ على نمط الحياة الصحي.';
        bodyImage = 'images/normal.jpg.jpg'; // صورة للوزن المعتدل
    } else {
        bodyStatus = 'أنت تعاني من زيادة الوزن. حاول تقليل السعرات الحرارية وزيادة النشاط البدني.';
        bodyImage = 'images/overweight.jpg.jpg'; // صورة للوزن الزائد
    }

    document.getElementById('body-img').src = bodyImage;
    document.getElementById('body-status').innerText = bodyStatus;

    // عرض الملاحظات الطبية بناءً على الأمراض
    let medicalNote = '';
    if (disease === 'diabetes') {
        medicalNote = 'يجب على مرضى السكري تناول وجبات صغيرة ومتوازنة تحتوي على كربوهيدرات بطيئة الامتصاص.';
    } else if (disease === 'hypertension') {
        medicalNote = 'يجب تجنب الأطعمة المالحة واختيار الأطعمة التي تحتوي على بوتاسيوم ودهون صحية.';
    } else if (disease === 'heart') {
        medicalNote = 'يجب تقليل الدهون المشبعة وزيادة الأطعمة الغنية بالأحماض الدهنية أوميغا 3.';
    }

    document.getElementById('medical-note').innerText = medicalNote;

    document.getElementById('results').style.display = 'block';
});