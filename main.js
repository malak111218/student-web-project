 function goToQuestions() {
            let username = document.getElementById("username").value;
            let password = document.getElementById("password").value;
            if (username === "malak" && password === "qwer") {
                document.getElementById("loginPage").style.display = "none";
                document.getElementById("questionsPage").style.display = "block";
            } else {
                alert("Incorrect username or password");
            }
        }

        function calculateResults() {
            let weight = parseFloat(document.getElementById("weight").value);
            let height = parseFloat(document.getElementById("height").value);
            let age = parseInt(document.getElementById("age").value);
            let gender = document.getElementById("gender").value;
            let activity = document.getElementById("activity").value;
            let goal = document.getElementById("goal").value;

            let BMR;
            if (gender == "male") {
                BMR = 66 + (13.75 * weight) + (5 * height) - (6.75 * age);
            } else {
                BMR = 655 + (9.56 * weight) + (1.85 * height) - (4.68 * age);
            }

            let activityMultiplier;
            if (activity == "low") {
                activityMultiplier = 1.2;
            } else if (activity == "moderate") {
                activityMultiplier = 1.55;
            } else {
                activityMultiplier = 1.9;
            }

            let TDEE = BMR * activityMultiplier;

            if (goal == "lose") {
                TDEE -= 500;
            } else if (goal == "gain") {
                TDEE += 500;
            }let waterIntake = weight * 35; 
            let carbs = (TDEE * 0.45) / 4; 
            let protein = (TDEE * 0.3) / 4; 
            let fats = (TDEE * 0.25) / 9; 

            let bodyType = "normal";
            if (weight / ((height / 100) ** 2) < 18.5) {
                bodyType = "underweight";
            } else if (weight / ((height / 100) ** 2) > 25) {
                bodyType = "overweight";
            }

            let heightInMeters = height / 100;
            let idealWeightMax = 24.9 * (heightInMeters * heightInMeters);

        
            let resultText = "<h2> Result: </h2>" +
                "<table>" +
                "<tr><td> Body type</td><td>" + bodyType + "</td></tr>" +
                "<tr><td> Ideal weight</td><td>" + idealWeightMax.toFixed(2) + " (kg)</td></tr>" +
                "<tr><td> Daily calories</td><td>" + TDEE.toFixed(0) + "  (calorie)</td></tr>" +
                "<tr><td> Daily water</td><td>" + waterIntake + " (ml)</td></tr>" +
                "<tr><td> Carbohydrates</td><td>" + carbs.toFixed(2) + " (g)</td></tr>" +
                "<tr><td> Proteins</td><td>" + protein.toFixed(2) + " (g)</td></tr>" +
                "<tr><td> Fats</td><td>" + fats.toFixed(2) + " (g)</td></tr>" +
                "</table>";

            document.getElementById("resultText").innerHTML = resultText;

        
            var mealTableContent = "";
            if (bodyType === "underweight") {
                mealTableContent = 
                    "<tr><th>Meal</th><th>Food Items</th></tr>" +
                    "<tr><td>Breakfast</td><td>Full-fat Milk, Oats, Eggs, Banana</td></tr>" +
                    "<tr><td>Lunch</td><td>Chicken, Rice, Avocado, Olive Oil</td></tr>" +
                    "<tr><td>Dinner</td><td>Steak, Potatoes, Salad with Dressing</td></tr>" +
                    "<tr><td>Snack</td><td>Peanut Butter, Toast, Yogurt</td></tr>";
            } else if (bodyType === "normal") {
                mealTableContent = 
                    "<tr><th>Meal</th><th>Food Items</th></tr>" +
                    "<tr><td>Breakfast</td><td>Oatmeal, Fruit, Eggs</td></tr>" +
                    "<tr><td>Lunch</td><td>Chicken, Rice, Vegetables</td></tr>" +
                    "<tr><td>Dinner</td><td>Grilled Fish, Quinoa, Salad</td></tr>" +
                    "<tr><td>Snack</td><td>Greek Yogurt, Almonds</td></tr>";
            } else if (bodyType === "overweight") {
                mealTableContent = 
                    "<tr><th>Meal</th><th>Food Items</th></tr>" +
                    "<tr><td>Breakfast</td><td>Egg Whites, Spinach, Whole Wheat Toast</td></tr>" +
                    "<tr><td>Lunch</td><td>Grilled Chicken, Salad, Olive Oil</td></tr>" +
                    "<tr><td>Dinner</td><td>Fish, Steamed Veggies</td></tr>" +
                    "<tr><td>Snack</td><td>Carrot Sticks, Hummus</td></tr>";
            }
            document.getElementById("mealTable").innerHTML = mealTableContent;

        
            var bodyImageSrc = "normal.jpg.jpg";
            if (bodyType === "underweight") {
                bodyImageSrc = "thin.jpg.jpg";
            } else if (bodyType === "overweight") {
                bodyImageSrc = "overweight.jpg.jpg";
            }
            document.getElementById("bodyImage").innerHTML = '<img src="' + bodyImageSrc + '" alt="Body Image">';

            document.getElementById("questionsPage").style.display = "none";
            document.getElementById("resultPage").style.display = "block";
        }
