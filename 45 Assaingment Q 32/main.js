// Quistion 32
var current_users = ["Ahsan malik", "saniya", "saba", "zain", "zara"];
// array of new users
var new_users = ["Arman malik", "haniya", "saba", "zainab", "zara"];
// loop through new users to cheack for username availblity
new_users.forEach(function (new_one_user) {
    //making a condition for username already exsist and save in our condition variable
    var our_condition = current_users.some(function (current_one_user) { return current_one_user.toLowerCase() === new_one_user.toLowerCase(); });
    if (our_condition) {
        console.log("sorry".concat(new_one_user, "is already taken!"));
    }
    else {
        console.log("this userName is ".concat(new_one_user, " is available"));
    }
});
