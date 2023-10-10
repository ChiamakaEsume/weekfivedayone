
      
             document.getElementById("getGradeButton").addEventListener("click", function () {
              const scoreInput = document.getElementById("score").value;

              if (scoreInput === "") {
                document.getElementById("gradeResult").innerText = "REQUIRED!";
            } else {
                const score = (scoreInput);
                

                switch (true) {
                  case score < 0:
                     alert(`Negative not Supported!`);
                     break;
                   case score < 40:
                     grade = "F9";
                     alert(`Your grade is ${grade}`);
                     break;
                   case score >= 40 && score <= 45:
                     grade = "E8";
                     alert(`Your grade is ${grade}`);
                     break;
                   case score >= 45 && score <= 50:
                     grade = "D7";
                     alert(`Your grade is ${grade}`);
                     break;
                   case score >= 50 && score <= 65:
                     grade = "C6";
                     alert(`Your grade is ${grade}`);
                     break;
                   case score >= 65 && score <= 70:
                     grade = "B2";
                     alert(`Your grade is ${grade}`);
                     break;
                   case score >= 70 && score <= 100:
                     grade = "A1";
                     alert(`Your grade is ${grade}`);
                     break;
                   case score > 100:
                     alert(`Your grade does not exist`);
                     break;
                  /* default:
                     grade = "Absent";
                     alert("You did not sit for this exam");
                     break;*/
                 }
                
                }
             })