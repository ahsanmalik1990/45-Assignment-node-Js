//  Creating a Guest List Array
var guestlist = ["hamza", "muneer", "junaid", "ahsan",];
//  Making Variables for those guest who cant come
var dontcome = guestlist[0];
//  Print the name of who cant come
console.log(dontcome, "nahi ahh sakta hay");
//  Add or Remove values from guest list array
guestlist.splice(0, 1, "asad");
//  Message Print for Bigger Table
console.log("Good News I Have Found a Bigger Table For Dinner.");
//  Adding a new guest at starting index of array
guestlist.unshift("Ali");
//  Adding a new guest at ending index of array
guestlist.push("Zain");
//  Get a middel index of our guest list array
var middleindex = Math.floor(guestlist.length / 2);
//  Adding a new guest at middel index of array
guestlist.splice(middleindex, 0, "osama");
//  Print mesage of uploaded list
console.log("Updated List of our Guest");
// sending a invitation message to our guest one by one with thier names
guestlist.forEach(function (oneguest) { return console.log("salam ".concat(oneguest, ",Would you like to dinner with me")); });
