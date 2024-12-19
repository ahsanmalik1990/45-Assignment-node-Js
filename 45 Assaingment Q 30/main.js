// Quistion 30
//creating a array
var userName = ["Ahsan", "Saniya", "Admin", "Miss Zaheeda", "Narjis"];
// for each loop array 
userName.forEach(function (oneUser) {
    if (oneUser === "Admin") {
        console.log("Hello ".concat(oneUser, ",whould you like to see a status report?"));
    }
    else {
        console.log("Hello ".concat(oneUser, ",thank you for logging in again."));
    }
});
