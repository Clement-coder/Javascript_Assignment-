let name = "Clement";
let lastName = "Raymond";
let fullName = name + " " + lastName;
let score = 101;

if (score >= 80 && score < 100) {
    console.log(fullName + " scores an A");
} else 
if (score >= 70 && score < 80) {
    console.log(fullName + " scores a B");
} else
 if (score >= 60 && score < 70) {
    console.log(fullName + " scores a C");
} else
 if (score >= 50 && score < 60) {
    console.log(fullName + " scores a D");
} else
 if (score >= 0 && score < 50) {
    console.log(fullName + " scores an F");
} else {
    console.log("Invalid score");
}
