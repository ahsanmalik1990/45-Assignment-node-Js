// Quistion 31
var userName = ["ahsan", "Saniya", "Admin", "Miss zahida", "Narjis"];
userName = [];
if (userName.length === 0) {
    console.log("your array is empty we need to find some users!");
}
else {
    // using foreach loop on aaray
    userName.forEach(function (oneUser) {
        if (oneUser === "admin") {
            console.log("Hello ".concat(oneUser, ",would you like to see a status"));
        }
        else {
            console.log("Hello ".concat(oneUser, ",thank u for logging in again"));
        }
    });
}
